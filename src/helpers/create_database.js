import { client } from "../database";
import dotenv from "dotenv/config";
import queryBuilder from '../database'

const { DATABASE_NAME } = process.env;

export const createDatabase = () => {
  queryBuilder(`DROP database ${DATABASE_NAME}`)
};

export const dropDatabase = () => {

    queryBuilder(`DROP database ${DATABASE_NAME}`)
};

