import { query } from '$lib/server/db.js';
export async function load({url}){const type=url.searchParams.get('type')||'all';const p=[];let w='';if(type!=='all'){p.push(type);w='WHERE type=$1'}const r=await query(`SELECT * FROM places ${w} ORDER BY name`,p);return{places:r.rows,type};}
