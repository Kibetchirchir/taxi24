import { client } from '../database';
import dotenv from 'dotenv/config';

const { DATABASE_NAME } = process.env

export const createDatabase = () => {
client.connect();

client.query(`Create database ${DATABASE_NAME}`, (err, res) => {
if(err){
    throw err
}
else {
    return res
}
client.end
})
}