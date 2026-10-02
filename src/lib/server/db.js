import pg from 'pg';
import { DATABASE_URL } from '$env/static/private';

const { Pool } = pg;
export const pool = new Pool({ connectionString: DATABASE_URL, max: 5, ssl: { rejectUnauthorized: false } });

export async function query(text, params = []) {
  return pool.query(text, params);
}
