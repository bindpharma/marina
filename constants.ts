/**
 * Admin Auth (basit cookie-based)
 * --------------------------------
 * Vercel'de environment variable olarak ADMIN_PASSWORD ayarlayın.
 * Yoksa varsayılan "admin123" kullanılır (geliştirme için).
 *
 * Üretimde MUTLAKA güçlü bir şifre belirleyin.
 */

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const SESSION_COOKIE = 'aslanmarin_admin';
const SESSION_DURATION = 7 * 24 * 60 * 60; // 7 gün (saniye)

function getAdminPassword(): string {
  return process.env.ADMIN_PASSWORD || 'admin123';
}

function getSessionSecret(): string {
  return process.env.ADMIN_SESSION_SECRET || 'change-this-secret-in-production-please';
}

/** Şifreyi doğrular */
export function verifyPassword(password: string): boolean {
  return password === getAdminPassword();
}

/** Session token üretir (basit HMAC tarzı) */
export function generateSessionToken(): string {
  const ts = Date.now();
  const random = Math.random().toString(36).slice(2);
  return Buffer.from(`${ts}:${random}:${getSessionSecret().slice(0, 8)}`).toString('base64');
}

/** Session geçerli mi */
export function isValidSession(token: string | undefined): boolean {
  if (!token) return false;
  try {
    const decoded = Buffer.from(token, 'base64').toString();
    const [tsStr, , secret] = decoded.split(':');
    const ts = Number(tsStr);
    if (Number.isNaN(ts)) return false;
    if (secret !== getSessionSecret().slice(0, 8)) return false;
    if (Date.now() - ts > SESSION_DURATION * 1000) return false;
    return true;
  } catch {
    return false;
  }
}

/** Cookie set eder (server action / route handler içinden çağrılır) */
export function setSessionCookie(token: string) {
  cookies().set({
    name: SESSION_COOKIE,
    value: token,
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: SESSION_DURATION,
  });
}

/** Cookie'yi temizler */
export function clearSessionCookie() {
  cookies().delete(SESSION_COOKIE);
}

/** Mevcut session'ın geçerliliğini kontrol et — sayfada kullanım */
export function getSession(): boolean {
  const token = cookies().get(SESSION_COOKIE)?.value;
  return isValidSession(token);
}

/** Korunan sayfalarda — session yoksa login'e yönlendir */
export function requireAuth() {
  if (!getSession()) {
    redirect('/admin/giris');
  }
}
