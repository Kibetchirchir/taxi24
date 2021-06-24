import { client }  from '../index';

describe('Database test', () => {
    test('check connection', async () => {
        try{
            client.connect()
        } catch (err) {
            console.log(err)
        }
        client.end();
    })
})