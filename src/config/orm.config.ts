import { DataSource } from 'typeorm';
import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MySQLConnectionOptions';

export const config: MysqlConnectionOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root1234',
  database: 'spacex_ship',
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: true,
};

export default new DataSource(config);