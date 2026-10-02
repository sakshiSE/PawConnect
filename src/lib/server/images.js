import { CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET, CLOUDINARY_CLOUD_NAME } from '$env/static/private';
import { createHash } from 'node:crypto';

export async function uploadImage(file) {
  if (!file || file.size === 0) return null;
  if (file.size > 5 * 1024 * 1024) throw new Error('Image must be smaller than 5 MB.');
  if (!file.type.startsWith('image/')) throw new Error('Only image files are allowed.');
  if (!CLOUDINARY_CLOUD_NAME || !CLOUDINARY_API_KEY || !CLOUDINARY_API_SECRET) return null;

  const timestamp = Math.floor(Date.now() / 1000);
  const signature = createHash('sha1')
    .update(`timestamp=${timestamp}${CLOUDINARY_API_SECRET}`)
    .digest('hex');
  const body = new FormData();
  body.append('file', file);
  body.append('api_key', CLOUDINARY_API_KEY);
  body.append('timestamp', String(timestamp));
  body.append('signature', signature);

  const response = await fetch(`https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`, { method: 'POST', body });
  if (!response.ok) throw new Error('Image upload failed.');
  const data = await response.json();
  return data.secure_url;
}
