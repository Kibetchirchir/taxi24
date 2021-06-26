import { sequelize } from '../database/models';

export const queryBuilder =  (query) => {
    return sequelize.query(query);
}