import { EntityRepository } from '@mikro-orm/mysql';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable } from '@nestjs/common';

import { Building } from './BuildingEntity';

@Injectable()
export class BuildingQueryRepository {
  constructor(
    @InjectRepository(Building)
    private readonly buildingQueryRepository: EntityRepository<Building>,
  ) {}

  findOne() {
    const qb = this.buildingQueryRepository
      .createQueryBuilder('bd')
      .select('bd.id')
      .leftJoin('bd.clientCompany', 'cc')
      .leftJoin('cc.users', 'ucc')
      .where('ucc.username="test"');

    return qb.execute();
  }
}
