import { NextResponse } from 'next/server';
import { saveSubmission } from '@/lib/store';

export const runtime = 'nodejs';

interface ContactPayload {
  name?: string;
  phone?: string;
  email?: string;
  service?: string;
  message?: string;
  // Honeypot — botların doldurması için gizli alan
  website?: string;
}

export async function POST(req: Request) {
  try {
    const data = (await req.json()) as ContactPayload;

    // Honeypot — bot ise sessiz başarı dön
    if (data.website) {
      return NextResponse.json({ ok: true });
    }

    const name = (data.name || '').trim();
    const phone = (data.phone || '').trim();
    const service = (data.service || '').trim();
    const message = (data.message || '').trim();
    const email = (data.email || '').trim();

    // Basit doğrulama
    if (!name || name.length < 2) {
      return NextResponse.json({ ok: false, error: 'Lütfen adınızı girin.' }, { status: 400 });
    }
    if (!phone || phone.length < 6) {
      return NextResponse.json({ ok: false, error: 'Geçerli telefon girin.' }, { status: 400 });
    }
    if (!service) {
      return NextResponse.json({ ok: false, error: 'Hizmet seçin.' }, { status: 400 });
    }

    // KV'ye kaydet
    const submission = await saveSubmission({
      name,
      phone,
      email: email || undefined,
      service,
      message,
      ip: req.headers.get('x-forwarded-for') || undefined,
      userAgent: req.headers.get('user-agent') || undefined,
    });

    // E-posta gönderim — Resend / SMTP entegrasyonu için TODO
    // await sendNotificationEmail(submission);

    return NextResponse.json({ ok: true, id: submission.id });
  } catch (err) {
    console.error('Contact form error:', err);
    return NextResponse.json(
      { ok: false, error: 'Bir hata oluştu. Lütfen telefon ya da WhatsApp deneyin.' },
      { status: 500 }
    );
  }
}
