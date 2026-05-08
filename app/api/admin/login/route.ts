import { NextResponse } from 'next/server';
import { verifyPassword, generateSessionToken, setSessionCookie } from '@/lib/auth';

export const runtime = 'nodejs';

export async function POST(req: Request) {
  try {
    const { password } = await req.json();
    if (!verifyPassword(password)) {
      // Brute-force yavaşlatma
      await new Promise((r) => setTimeout(r, 800));
      return NextResponse.json({ ok: false, error: 'Hatalı şifre' }, { status: 401 });
    }
    const token = generateSessionToken();
    setSessionCookie(token);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: 'Bir hata oluştu' }, { status: 500 });
  }
}
