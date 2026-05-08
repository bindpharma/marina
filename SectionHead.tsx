import { NextResponse } from 'next/server';
import { getSession } from '@/lib/auth';
import { updateSubmissionStatus, deleteSubmission } from '@/lib/store';

export const runtime = 'nodejs';

interface RouteContext {
  params: { id: string };
}

export async function PATCH(req: Request, { params }: RouteContext) {
  if (!getSession()) {
    return NextResponse.json({ ok: false, error: 'Yetkisiz' }, { status: 401 });
  }
  const { status } = await req.json();
  if (!['new', 'contacted', 'closed'].includes(status)) {
    return NextResponse.json({ ok: false, error: 'Geçersiz durum' }, { status: 400 });
  }
  const ok = await updateSubmissionStatus(params.id, status);
  return NextResponse.json({ ok });
}

export async function DELETE(_req: Request, { params }: RouteContext) {
  if (!getSession()) {
    return NextResponse.json({ ok: false, error: 'Yetkisiz' }, { status: 401 });
  }
  const ok = await deleteSubmission(params.id);
  return NextResponse.json({ ok });
}
