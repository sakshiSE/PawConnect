import { redirect } from '@sveltejs/kit';
import { endSession } from '$lib/server/auth.js';
export async function GET({ cookies }) { await endSession(cookies.get('pawconnect_session')); cookies.delete('pawconnect_session', { path: '/' }); throw redirect(303, '/'); }
