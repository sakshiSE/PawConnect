import { query } from '$lib/server/db.js';
export async function load({ url }) {
  const animal=url.searchParams.get('animal')||'all', q=(url.searchParams.get('q')||'').trim(); const p=[]; const w=["a.status='available'"];
  if(animal!=='all'){p.push(animal);w.push(`a.animal_type=$${p.length}`)} if(q){p.push(`%${q}%`);w.push(`(a.title ILIKE $${p.length} OR a.location ILIKE $${p.length} OR a.description ILIKE $${p.length})`)}
  const result=await query(`SELECT a.*,u.name AS owner FROM adoption_listings a JOIN users u ON u.id=a.user_id WHERE ${w.join(' AND ')} ORDER BY a.created_at DESC`,p); return {listings:result.rows,filters:{animal,q}};
}
