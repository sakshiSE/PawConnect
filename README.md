# 🐾 PawConnect

Simple SvelteKit full-stack MVP for animal help, adoption, and lost & found.

Project Website: https://paw-connect-ivory.vercel.app/

## Stack
- SvelteKit + Svelte
- Node.js server routes
- Neon PostgreSQL
- Cloudinary for images
- Vercel adapter

## 1. Install
```bash
npm install
```

## 2. Environment
Copy `.env.example` to `.env` and add your Neon database connection string.

Cloudinary variables are optional while you are testing text-only posts. Add them when you want image uploads.

## 3. Database
In Neon SQL Editor, run:
1. `database/schema.sql`
2. `database/seed.sql`

## 4. Run
```bash
npm run dev
```
Open the local URL shown by Vite.

## 5. Main features
- Register / login / logout
- Lost and found reports
- Injured-animal help requests
- “I Can Help” responses
- Adoption listings
- Search and filters
- User dashboard
- Post status management with owner check
- Image upload validation + Cloudinary upload
- Care and food guides
- Veterinary / animal café directory

## Security points to demonstrate
- Passwords are bcrypt hashed.
- Session cookie is HttpOnly.
- Users can update status only on records they own.
- Database credentials stay in environment variables.
- Image type and size are validated server-side.
- SQL uses parameterized queries.
