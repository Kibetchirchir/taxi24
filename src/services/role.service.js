import { queryBuilder } from '../database/queryBuilder';

class Role{
    static addRole(user_id, role_id){
        const query = `insert into users_role (user_id, role_id, status) values (${user_id}, ${role_id}, 'active')`

        return queryBuilder(query)
    }
}

export default Role;
