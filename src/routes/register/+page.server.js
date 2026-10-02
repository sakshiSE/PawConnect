import { fail, redirect } from '@sveltejs/kit';
import { createUser, startSession } from '$lib/server/auth.js';

export const actions = { default: async ({ request, cookies }) => {
  const data = await request.formData();
  const name = String(data.get('name') || '').trim();
  const email = String(data.get('email') || '').trim();
  const password = String(data.get('password') || '');
  const location = String(data.get('location') || '').trim();
  if (!name || !email || password.length < 6) return fail(400, { error: 'Enter a name, valid email and password of at least 6 characters.' });
  try {
    const user = await createUser(name, email, password, location);
    const token = await startSession(user.id);
    cookies.set('pawconnect_session', token, { path: '/', httpOnly: true, sameSite: 'lax', secure: process.env.NODE_ENV === 'production', maxAge: 60*60*24*7 });
  } catch (e) {
    if (e.code === '23505') return fail(400, { error: 'That email is already registered.' });
    return fail(500, { error: 'Could not create account. Check your database settings.' });
  }
  throw redirect(303, '/dashboard');
}};
