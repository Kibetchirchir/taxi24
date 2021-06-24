import { Client } from 'pg';
import dotenv from 'dotenv/config';

const { DATABASE_USER_NAME, DATABASE_NAME, DATABASE_PASSWORD } =  process.env;


export const client = new Client({
    user: DATABASE_USER_NAME,
    host: 'localhost',
    database: DATABASE_NAME,
    password: DATABASE_PASSWORD,
    port: 5432,
    dialect: 'postgres'
  });