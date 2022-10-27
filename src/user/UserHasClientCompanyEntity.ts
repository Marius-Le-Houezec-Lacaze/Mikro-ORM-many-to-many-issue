import { Entity, ManyToOne } from '@mikro-orm/core';

import { ClientCompany } from '../clientCompany/ClientCompanyEntity';
import { User } from './UserEntity';

// entity representing pivot table of mikro orm
@Entity({ tableName: 'userHasClientCompany' })
export class UserHasClientCompany {
  @ManyToOne({ primary: true })
  user: User;

  @ManyToOne({ primary: true })
  clientCompany: ClientCompany;
}
