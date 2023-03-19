import { Sequelize } from "sequelize";

const db = new Sequelize('full-stack', 'root', 'admin', {
    'host': 'localhost',
    'dialect': 'mysql'
});

export default db;