"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const typeorm_1 = require("typeorm");
exports.config = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root1234',
    database: 'spacex_ship',
    entities: ['dist/**/*.entity{.ts,.js}'],
    synchronize: true,
};
exports.default = new typeorm_1.DataSource(exports.config);
//# sourceMappingURL=orm.config.js.map