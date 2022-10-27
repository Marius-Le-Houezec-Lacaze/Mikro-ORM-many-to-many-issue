import { Collection, Entity, ManyToMany, PrimaryKey, Property } from '@mikro-orm/core';

import { ClientCompany } from '../clientCompany/ClientCompanyEntity';
import { UserHasClientCompany } from './UserHasClientCompanyEntity';

@Entity({ tableName: 'user' })
export class User {
  
  @PrimaryKey()
  id: number;

  @Property()
  username: string;

  @ManyToMany({ entity: () => ClientCompany, pivotEntity: () => UserHasClientCompany })
  clientCompanies: Collection<ClientCompany> = new Collection<ClientCompany>(this);
}
