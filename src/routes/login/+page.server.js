import { fail, redirect } from '@sveltejs/kit';
import { loginUser, startSession } from '$lib/server/auth.js';

export const actions = { default: async ({ request, cookies }) => {
  const data = await request.formData();
  const email = String(data.get('email') || '').trim();
  const password = String(data.get('password') || '');
  const user = await loginUser(email, password);
  if (!user) return fail(400, { error: 'Email or password is incorrect.' });
  const token = await startSession(user.id);
  cookies.set('pawconnect_session', token, { path: '/', httpOnly: true, sameSite: 'lax', secure: process.env.NODE_ENV === 'production', maxAge: 60*60*24*7 });
  throw redirect(303, '/dashboard');
}};
