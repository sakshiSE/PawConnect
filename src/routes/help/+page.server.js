import { query } from '$lib/server/db.js';
export async function load(){const r=await query(`SELECT h.*,u.name AS reporter, (SELECT COUNT(*) FROM help_responses x WHERE x.request_id=h.id) AS helper_count FROM help_requests h JOIN users u ON u.id=h.user_id WHERE h.status='open' ORDER BY h.created_at DESC`);return{requests:r.rows};}
