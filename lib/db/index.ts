import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import * as schema from './schema';

// Create connection pool
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  max: 20, // Increased pool size for better concurrency
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 10000, // Increased from 2s to 10s to prevent premature timeouts
});

// Create Drizzle instance
export const db = drizzle(pool, { schema });

// Export pool for direct queries if needed
export { pool };
