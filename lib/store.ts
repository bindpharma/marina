/**
 * Form gönderim deposu
 * --------------------
 * Production: Vercel KV (Redis-uyumlu key-value store)
 * Development/fallback: In-memory store
 *
 * Vercel KV kurulumu:
 * 1. Vercel Dashboard → Project → Storage → Create Database → KV
 * 2. Bağlandığında KV_URL, KV_REST_API_URL, KV_REST_API_TOKEN, KV_REST_API_READ_ONLY_TOKEN
 *    otomatik olarak environment variables'a eklenir
 * 3. Yeni deploy ile aktif olur
 *
 * Eğer KV bağlanmamışsa, form yine de çalışır (e-posta gönderir),
 * ama admin paneline ulaşmaz. Ekstra güvenlik katmanı.
 */

export interface ContactSubmission {
  id: string;
  name: string;
  phone: string;
  email?: string;
  service: string;
  message: string;
  createdAt: number;
  status: 'new' | 'contacted' | 'closed';
  ip?: string;
  userAgent?: string;
}

const SUBMISSIONS_KEY = 'submissions:list';
const SUBMISSION_PREFIX = 'submission:';

// In-memory fallback (sadece development için)
const memoryStore = new Map<string, ContactSubmission>();

async function getKv() {
  // KV environment variable'ları yoksa null dön — fallback'e geçeriz
  if (!process.env.KV_REST_API_URL || !process.env.KV_REST_API_TOKEN) {
    return null;
  }
  try {
    const { kv } = await import('@vercel/kv');
    return kv;
  } catch {
    return null;
  }
}

export async function saveSubmission(
  data: Omit<ContactSubmission, 'id' | 'createdAt' | 'status'>
): Promise<ContactSubmission> {
  const submission: ContactSubmission = {
    ...data,
    id: generateId(),
    createdAt: Date.now(),
    status: 'new',
  };

  const kv = await getKv();
  if (kv) {
    await kv.set(`${SUBMISSION_PREFIX}${submission.id}`, submission);
    await kv.lpush(SUBMISSIONS_KEY, submission.id);
  } else {
    memoryStore.set(submission.id, submission);
  }

  return submission;
}

export async function getSubmissions(limit = 50): Promise<ContactSubmission[]> {
  const kv = await getKv();
  if (kv) {
    const ids = await kv.lrange<string>(SUBMISSIONS_KEY, 0, limit - 1);
    if (!ids || ids.length === 0) return [];
    const items = await Promise.all(
      ids.map((id) => kv.get<ContactSubmission>(`${SUBMISSION_PREFIX}${id}`))
    );
    return items.filter((x): x is ContactSubmission => x !== null);
  }
  return Array.from(memoryStore.values()).sort((a, b) => b.createdAt - a.createdAt);
}

export async function updateSubmissionStatus(
  id: string,
  status: ContactSubmission['status']
): Promise<boolean> {
  const kv = await getKv();
  if (kv) {
    const sub = await kv.get<ContactSubmission>(`${SUBMISSION_PREFIX}${id}`);
    if (!sub) return false;
    sub.status = status;
    await kv.set(`${SUBMISSION_PREFIX}${id}`, sub);
    return true;
  }
  const sub = memoryStore.get(id);
  if (!sub) return false;
  sub.status = status;
  return true;
}

export async function deleteSubmission(id: string): Promise<boolean> {
  const kv = await getKv();
  if (kv) {
    await kv.del(`${SUBMISSION_PREFIX}${id}`);
    await kv.lrem(SUBMISSIONS_KEY, 0, id);
    return true;
  }
  return memoryStore.delete(id);
}

export async function getStats() {
  const subs = await getSubmissions(1000);
  const now = Date.now();
  const day = 24 * 60 * 60 * 1000;
  return {
    total: subs.length,
    new: subs.filter((s) => s.status === 'new').length,
    last7: subs.filter((s) => now - s.createdAt < 7 * day).length,
    last30: subs.filter((s) => now - s.createdAt < 30 * day).length,
  };
}

function generateId() {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}
