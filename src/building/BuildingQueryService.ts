import { Injectable } from '@nestjs/common';

import { BuildingQueryRepository } from './BuildingQueryRepository';

@Injectable()
export class BuildingQueryService {
  constructor(
    private readonly buildingQueryRepository: BuildingQueryRepository,
  ){}

  findOne(){
    return this.buildingQueryRepository.findOne();
  }
}