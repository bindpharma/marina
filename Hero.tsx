import { NextResponse } from 'next/server';
import { getSettings, updateSettings } from '@/lib/store';
import { getSession } from '@/lib/auth';

const MAX_LOGO_SIZE = 1024 * 1024; // 1 MB
const ALLOWED_TYPES = ['image/svg+xml', 'image/png', 'image/jpeg', 'image/webp'];

export async function GET() {
  if (!getSession()) {
    return NextResponse.json({ error: 'unauthorized' }, { status: 401 });
  }
  const settings = await getSettings();
  return NextResponse.json(settings);
}

export async function PATCH(request: Request) {
  if (!getSession()) {
    return NextResponse.json({ error: 'unauthorized' }, { status: 401 });
  }

  const body = await request.json();
  const patch: Record<string, unknown> = {};

  if (typeof body.brandName === 'string') {
    patch.brandName = body.brandName.trim().slice(0, 80) || undefined;
  }
  if (typeof body.tagline === 'string') {
    patch.tagline = body.tagline.trim().slice(0, 120) || undefined;
  }
  if (body.logoUrl === null) {
    patch.logoUrl = undefined; // sıfırla
  } else if (typeof body.logoUrl === 'string' && body.logoUrl.startsWith('data:')) {
    patch.logoUrl = body.logoUrl;
  } else if (typeof body.logoUrl === 'string' && /^https?:\/\//.test(body.logoUrl)) {
    patch.logoUrl = body.logoUrl;
  }
  if (body.logoUrlDark === null) {
    patch.logoUrlDark = undefined;
  } else if (typeof body.logoUrlDark === 'string' && (body.logoUrlDark.startsWith('data:') || /^https?:\/\//.test(body.logoUrlDark))) {
    patch.logoUrlDark = body.logoUrlDark;
  }

  const updated = await updateSettings(patch);
  return NextResponse.json(updated);
}

// Logo dosya yükleme — multipart/form-data
export async function POST(request: Request) {
  if (!getSession()) {
    return NextResponse.json({ error: 'unauthorized' }, { status: 401 });
  }

  try {
    const formData = await request.formData();
    const file = formData.get('logo') as File | null;
    const variant = (formData.get('variant') as string) || 'light'; // light | dark

    if (!file) {
      return NextResponse.json({ error: 'Dosya bulunamadı' }, { status: 400 });
    }

    if (!ALLOWED_TYPES.includes(file.type)) {
      return NextResponse.json(
        { error: 'Sadece SVG, PNG, JPEG veya WebP dosyaları yükleyebilirsiniz' },
        { status: 400 },
      );
    }

    if (file.size > MAX_LOGO_SIZE) {
      return NextResponse.json(
        { error: `Dosya çok büyük (max ${MAX_LOGO_SIZE / 1024 / 1024} MB)` },
        { status: 400 },
      );
    }

    // Dosyayı base64 data URI'ye dönüştür
    const buffer = Buffer.from(await file.arrayBuffer());
    const base64 = buffer.toString('base64');
    const dataUri = `data:${file.type};base64,${base64}`;

    const patch =
      variant === 'dark' ? { logoUrlDark: dataUri } : { logoUrl: dataUri };
    const updated = await updateSettings(patch);

    return NextResponse.json({
      ok: true,
      url: variant === 'dark' ? updated.logoUrlDark : updated.logoUrl,
    });
  } catch (err) {
    console.error('Logo upload error:', err);
    return NextResponse.json({ error: 'Yükleme başarısız' }, { status: 500 });
  }
}
