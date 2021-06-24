import { queryBuilder } from "../queryBuilder"

export const seedRoles = () => {
    const query = `insert into role (name, created_at, updated_at)
    values
    ('driver', NOW(), NOW()),
    ('rider', NOW(), NOW())`

    queryBuilder(query);
}

seedRoles()