import { randomBytes } from 'node:crypto';
import bcrypt from 'bcryptjs';
import { query } from './db.js';

export async function createUser(name, email, password, location) {
  const hash = await bcrypt.hash(password, 12);
  const result = await query(
    'INSERT INTO users (name,email,password_hash,location) VALUES ($1,$2,$3,$4) RETURNING id,name,email,location',
    [name.trim(), email.toLowerCase().trim(), hash, location?.trim() || null]
  );
  return result.rows[0];
}

export async function loginUser(email, password) {
  const result = await query('SELECT * FROM users WHERE email=$1', [email.toLowerCase().trim()]);
  const user = result.rows[0];
  if (!user || !(await bcrypt.compare(password, user.password_hash))) return null;
  return { id: user.id, name: user.name, email: user.email, location: user.location };
}

export async function startSession(userId) {
  const token = randomBytes(48).toString('hex');
  await query('INSERT INTO sessions (token,user_id,expires_at) VALUES ($1,$2,NOW()+INTERVAL \'7 days\')', [token, userId]);
  return token;
}

export async function getSession(token) {
  if (!token) return null;
  const result = await query(
    `SELECT u.id,u.name,u.email,u.location FROM sessions s JOIN users u ON u.id=s.user_id
     WHERE s.token=$1 AND s.expires_at > NOW()`, [token]
  );
  return result.rows[0] || null;
}

export async function endSession(token) {
  if (token) await query('DELETE FROM sessions WHERE token=$1', [token]);
}
