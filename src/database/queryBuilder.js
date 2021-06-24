import { client } from './index'

export const queryBuilder = (query) => {
    client.connect();
    client.query(query, (err, res) => {
        if (err) {
          client.end();
          throw err;
        } else {
          client.end();
          return res;
        }
      });
}