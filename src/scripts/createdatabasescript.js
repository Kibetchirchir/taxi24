import { createDatabase } from  '../helpers/create_database';

try{
  createDatabase();
} catch(e) {
    console.log(e.error);
}
