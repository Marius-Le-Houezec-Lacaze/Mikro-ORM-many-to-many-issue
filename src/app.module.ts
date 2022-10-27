import { Module } from '@nestjs/common';

import { BuildingModule } from './building/BuildingModule';
import { OrmModule } from './orm/OrmModule';

@Module({
  imports: [OrmModule, BuildingModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
