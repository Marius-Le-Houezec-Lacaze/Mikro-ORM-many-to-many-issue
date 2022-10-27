import { Collection, Entity, ManyToMany, OneToOne, PrimaryKey } from '@mikro-orm/core';

import { Building } from '../building/BuildingEntity';
import { User } from '../user/UserEntity';
import { UserHasClientCompany } from '../user/UserHasClientCompanyEntity';

@Entity({ tableName: 'clientCompany' })
export class ClientCompany {
  // @ManyToMany({ entity: () => User, pivotEntity: () => UserHasClientCompany})
  // users = new Collection<User>(this);
  @PrimaryKey()
  id: number

  @OneToOne({owner: true})
  building: Building;
  
  @ManyToMany({ entity: () => User, pivotEntity: () => UserHasClientCompany})
  users = new Collection<User>(this);
}
