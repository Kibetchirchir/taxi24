import { client } from './index'

export const queryBuilder =  (query) => {
  client.connect();
    return new Promise((resolve, reject) => {
        client.query(query, async (err, res) => {
            if (err) {
              reject(err); 
            } else {
              resolve (res);
            }
          });
    })
}