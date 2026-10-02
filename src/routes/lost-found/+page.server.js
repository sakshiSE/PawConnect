import { query } from '$lib/server/db.js';
export async function load({ url }) {
  const type = url.searchParams.get('type') || 'all';
  const animal = url.searchParams.get('animal') || 'all';
  const q = (url.searchParams.get('q') || '').trim();
  const where = [];
  const params = [];
  if (type !== 'all') { params.push(type); where.push(`r.type=$${params.length}`); }
  if (animal !== 'all') { params.push(animal); where.push(`r.animal_type=$${params.length}`); }
  if (q) { params.push(`%${q}%`); where.push(`(r.title ILIKE $${params.length} OR r.location ILIKE $${params.length} OR r.description ILIKE $${params.length})`); }
  const sql = `SELECT r.*,u.name AS reporter FROM animal_reports r JOIN users u ON u.id=r.user_id WHERE r.status='active' ${where.length?'AND '+where.join(' AND '):''} ORDER BY r.created_at DESC`;
  const result = await query(sql, params);
  return { reports: result.rows, filters: { type, animal, q } };
}
