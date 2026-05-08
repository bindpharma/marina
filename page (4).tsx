import { requireAuth } from '@/lib/auth';
import { getSettings } from '@/lib/store';
import SettingsClient from './SettingsClient';

export const dynamic = 'force-dynamic';

export default async function SettingsPage() {
  requireAuth();
  const settings = await getSettings();
  return <SettingsClient initialSettings={settings} />;
}
