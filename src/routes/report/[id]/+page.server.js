import { error, fail, redirect } from '@sveltejs/kit';
import { query } from '$lib/server/db.js';
export async function load({ params, url }) {
  const kind=url.searchParams.get('kind')||'report';
  let result;
  if(kind==='adoption') result=await query('SELECT a.*,u.name AS owner,u.email AS contact_email FROM adoption_listings a JOIN users u ON u.id=a.user_id WHERE a.id=$1',[params.id]);
  else if(kind==='help') result=await query('SELECT h.*,u.name AS reporter,u.email AS contact_email FROM help_requests h JOIN users u ON u.id=h.user_id WHERE h.id=$1',[params.id]);
  else result=await query('SELECT r.*,u.name AS reporter,u.email AS contact_email FROM animal_reports r JOIN users u ON u.id=r.user_id WHERE r.id=$1',[params.id]);
  if(!result.rows[0]) throw error(404,'Post not found');
  let helpers=[];
  if(kind==='help'){const h=await query('SELECT u.name,u.email FROM help_responses x JOIN users u ON u.id=x.user_id WHERE x.request_id=$1',[params.id]);helpers=h.rows;}
  return {item:result.rows[0],kind,helpers};
}
export const actions={
  respond:async({locals,params})=>{if(!locals.user)throw redirect(303,'/login');try{await query('INSERT INTO help_responses(request_id,user_id) VALUES($1,$2)',[params.id,locals.user.id]);}catch(e){if(e.code!=='23505')return fail(400,{error:'Could not record your response.'});}return{success:true}},
  status:async({request,locals,params})=>{if(!locals.user)throw redirect(303,'/login');const d=await request.formData();const kind=String(d.get('kind'));const status=String(d.get('status'));const allowed=kind==='adoption'?['available','adopted']:kind==='help'?['open','helped','closed']:['active','resolved'];if(!allowed.includes(status))return fail(400,{error:'Invalid status'});const table=kind==='adoption'?'adoption_listings':kind==='help'?'help_requests':'animal_reports';await query(`UPDATE ${table} SET status=$1 WHERE id=$2 AND user_id=$3`,[status,params.id,locals.user.id]);return{updated:true}}
};
