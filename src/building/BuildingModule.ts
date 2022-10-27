import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';

import { BuildingController } from './BuildingController';
import { Building } from './BuildingEntity';
import { BuildingQueryRepository } from './BuildingQueryRepository';
import { BuildingQueryService } from './BuildingQueryService';

@Module({
  imports: [MikroOrmModule.forFeature({ entities: [Building] })],
  controllers: [BuildingController],
  providers: [BuildingQueryService, BuildingQueryRepository],
  exports: [],
})
export class BuildingModule {}
