CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(80) NOT NULL,
  email VARCHAR(160) UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  location VARCHAR(120),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS animal_reports (
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  type VARCHAR(20) NOT NULL CHECK (type IN ('lost','found')),
  animal_type VARCHAR(30) NOT NULL,
  title VARCHAR(120) NOT NULL,
  description TEXT NOT NULL,
  location VARCHAR(160) NOT NULL,
  image_url TEXT,
  status VARCHAR(20) NOT NULL DEFAULT 'active' CHECK (status IN ('active','resolved')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS adoption_listings (
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  animal_type VARCHAR(30) NOT NULL,
  title VARCHAR(120) NOT NULL,
  description TEXT NOT NULL,
  location VARCHAR(160) NOT NULL,
  image_url TEXT,
  status VARCHAR(20) NOT NULL DEFAULT 'available' CHECK (status IN ('available','adopted')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS help_requests (
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  animal_type VARCHAR(30) NOT NULL,
  title VARCHAR(120) NOT NULL,
  description TEXT NOT NULL,
  location VARCHAR(160) NOT NULL,
  image_url TEXT,
  status VARCHAR(20) NOT NULL DEFAULT 'open' CHECK (status IN ('open','helped','closed')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS help_responses (
  id SERIAL PRIMARY KEY,
  request_id INTEGER NOT NULL REFERENCES help_requests(id) ON DELETE CASCADE,
  user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(request_id, user_id)
);

CREATE TABLE IF NOT EXISTS places (
  id SERIAL PRIMARY KEY,
  name VARCHAR(120) NOT NULL,
  type VARCHAR(30) NOT NULL CHECK (type IN ('vet','cafe')),
  city VARCHAR(100) NOT NULL,
  address VARCHAR(220) NOT NULL,
  description TEXT,
  phone VARCHAR(40),
  image_url TEXT
);

CREATE TABLE IF NOT EXISTS care_guides (
  id SERIAL PRIMARY KEY,
  animal_type VARCHAR(30) NOT NULL,
  title VARCHAR(160) NOT NULL,
  category VARCHAR(40) NOT NULL,
  content TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_reports_type ON animal_reports(type);
CREATE INDEX IF NOT EXISTS idx_reports_animal ON animal_reports(animal_type);
CREATE INDEX IF NOT EXISTS idx_adoption_animal ON adoption_listings(animal_type);
CREATE INDEX IF NOT EXISTS idx_help_status ON help_requests(status);

CREATE TABLE IF NOT EXISTS sessions (
  token VARCHAR(128) PRIMARY KEY,
  user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  expires_at TIMESTAMPTZ NOT NULL
);
