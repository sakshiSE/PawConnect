import { getSession } from '$lib/server/auth.js';

export async function handle({ event, resolve }) {
  event.locals.user = await getSession(event.cookies.get('pawconnect_session'));
  return resolve(event);
}
