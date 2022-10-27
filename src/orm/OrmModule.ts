import { LoadStrategy } from '@mikro-orm/core';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';
import { SqlHighlighter } from '@mikro-orm/sql-highlighter';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { CamelCaseNamingStrategy } from './CamelCaseNamingStrategy';
import { CustomOrmLogger } from './CustomOrmLogger';

const logger = new CustomOrmLogger('MikroORM');

// DB_HOST=127.0.0.1
// DB_EFISCIA_FINANCIAL_INDICATOR=efiscia-financial-indicators
// DB_NAME=test
// DB_VENDOR=mysql
// DB_PORT=3306
// DB_USER=root
// DB_PASSWORD=root


@Module({
  imports: [
    MikroOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        namingStrategy: CamelCaseNamingStrategy,
        entities: ['./dist/**/*Entity.js'],
        entitiesTs: ['./src/**/*Entity.ts'],
        metadataProvider: TsMorphMetadataProvider,
        host: 'localhost',
        dbName: 'test',
        type: 'mysql',
        port: 3306,
        user: 'root',
        password: 'root',
        highlighter: new SqlHighlighter(),
        debug: true,
        logger: logger.log.bind(logger),
        loadStrategy: LoadStrategy.JOINED
      }),
      inject: [ConfigService],
    }),
  ],
  exports: [MikroOrmModule],
})
export class OrmModule {}
