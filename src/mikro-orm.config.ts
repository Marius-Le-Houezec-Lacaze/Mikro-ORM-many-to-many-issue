import 'reflect-metadata';

import * as dotenv from 'dotenv';

import { Options } from '@mikro-orm/core';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';

import { CamelCaseNamingStrategy } from './orm/CamelCaseNamingStrategy';

// !!! CONFIG USED FOR MIGRATIONS ONLY !!!
// for the real config check the orm/OrmModule.ts
console.log(process.env.NODE_ENV);

const env = [
  'production',
  'dev',
  'local',
  'smd'
];

if (!env.includes(process.env.NODE_ENV)) {
  console.error(`NODE_ENV must be either ${env.join(', ')}`);
  process.exit(1);
}

dotenv.config({ path: `${__dirname}/../.env.${process.env.NODE_ENV}` })


const options: Options = {
  host: 'localhost',
  dbName: 'test',
  type: 'mysql',
  port: 3306,
  user: 'root',
  password: 'root',
  namingStrategy: CamelCaseNamingStrategy,
  entities: ['./dist/**/*Entity.js'],
  entitiesTs: ['./src/**/*Entity.ts'],
  metadataProvider: TsMorphMetadataProvider,
  migrations: {
    tableName: 'mikroOrmMigrations', // name of database table with log of executed transactions
    path: './migrations', // path to the folder with migrations
    glob : '!(*.d).{js,ts}', // regex pattern for the migration files, change from pattern to glob for V5, default value for glob : !(*.d).{js,ts}
    transactional: true, // wrap each migration in a transaction
    disableForeignKeys: true, // wrap statements with `set foreign_key_checks = 0` or equivalent
    allOrNothing: true, // wrap all migrations in master transaction
    dropTables: true, // allow to disable table dropping
    safe: false, // allow to disable table and column dropping
    emit: 'ts', // migration generation mode
  },
};

export default options;
