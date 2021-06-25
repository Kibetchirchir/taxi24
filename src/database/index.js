import { Pool } from 'pg';
import dotenv from 'dotenv/config';
import pgp from 'pg-promise';

const { DATABASE_USER_NAME, DATABASE_NAME, DATABASE_PASSWORD } =  process.env;


export const pool = new Pool({
    user: DATABASE_USER_NAME,
    host: 'localhost',
    database: DATABASE_NAME,
    password: DATABASE_PASSWORD,
    port: 5432,
    dialect: 'postgres',
    pool: 100,
    max: 20,
      idleTimeoutMillis: 30000,
      connectionTimeoutMillis: 2000,
  });
  

