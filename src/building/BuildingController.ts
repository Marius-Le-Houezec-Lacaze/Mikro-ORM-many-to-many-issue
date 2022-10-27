import { Controller, Get } from '@nestjs/common';

import { BuildingQueryService } from './BuildingQueryService';

@Controller('building')
export class BuildingController {
  constructor(private readonly buildingQueryRepository: BuildingQueryService) {}

  @Get('')
  async getAllFecs(): Promise<string> {
    this.buildingQueryRepository.findOne();
    return 'hello';
  }
}
