import { queryBuilder } from '../database/queryBuilder';

class Role{
    static addRole(user_id, role_id){
        const query = `insert into users_role (user_id, role_id, status) values (${user_id}, ${role_id}, 'active')`

        return queryBuilder(query)
    }

    static getUserByRole(role_id, offset, limit, status){
        const query = `SELECT
        users.*
    FROM
        users
        INNER JOIN users_role ON users.id = users_role.user_id
    WHERE
        role_id = ${role_id} ${status}
        LIMIT ${limit} OFFSET ${offset}  
    `
    return  queryBuilder(query);
    }
}

export default Role;
