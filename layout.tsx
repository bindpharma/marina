import { requireAuth } from '@/lib/auth';
import { getSubmissions, getStats } from '@/lib/store';
import AdminClient from './AdminClient';

// Auth zorunlu — server component
export default async function AdminDashboard() {
  requireAuth();
  const [submissions, stats] = await Promise.all([getSubmissions(100), getStats()]);
  return <AdminClient submissions={submissions} stats={stats} />;
}

export const dynamic = 'force-dynamic';
