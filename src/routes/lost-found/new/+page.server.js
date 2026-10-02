import { fail, redirect } from '@sveltejs/kit';
import { query } from '$lib/server/db.js';
import { uploadImage } from '$lib/server/images.js';
export const load = ({ locals }) => { if (!locals.user) throw redirect(303, '/login'); };
export const actions = { default: async ({ request, locals }) => {
  if (!locals.user) throw redirect(303, '/login');
  const data = await request.formData();
  const type=String(data.get('type')||''), animal=String(data.get('animal_type')||''), title=String(data.get('title')||'').trim(), description=String(data.get('description')||'').trim(), location=String(data.get('location')||'').trim();
  if (!['lost','found'].includes(type)||!['dog','cat'].includes(animal)||!title||!description||!location) return fail(400,{error:'Please fill all required fields.'});
  try { const image=await uploadImage(data.get('image')); await query('INSERT INTO animal_reports(user_id,type,animal_type,title,description,location,image_url) VALUES($1,$2,$3,$4,$5,$6,$7)',[locals.user.id,type,animal,title,description,location,image]); }
  catch(e){ return fail(400,{error:e.message}); }
  throw redirect(303,'/lost-found');
}};
