import { client } from '../database';
import { queryBuilder } from '../database/queryBuilder';

class UserService {

    static async createUser({ first_name, second_name, phone_number, email_adress, password }) {
        const query = `insert into users (first_name, second_name, phone_number, email_adress, password, created_at, updated_at)
        values('${first_name}', '${second_name}', '${phone_number}', '${email_adress}', '${password}', NOW(), Now())`
        const res = await queryBuilder(query);
        
        return res;


    }

    static async getUserByPhoneNumber({ phone_number }) {
        const query = `select * from users where phone_number = '${phone_number}'`

        const res = await queryBuilder(query);

        return res;
    }
}

export default UserService;