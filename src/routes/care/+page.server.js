import { query } from '$lib/server/db.js';
export async function load(){const r=await query('SELECT * FROM care_guides ORDER BY animal_type,category,id');return{guides:r.rows};}
