import { Entity, OneToOne, PrimaryKey } from '@mikro-orm/core';

import { ClientCompany } from '../clientCompany/ClientCompanyEntity';

// import { AccountantCompany } from '../accountantCompany/AccountantCompanyEntity';
// import { AccountingMethod } from '../accountingMethod/AccountingMethodEntity';
// import { ClientCompany } from '../clientCompany/ClientCompanyEntity';
// import { Editor } from '../editor/EditorEntity';
// import { FecStatus } from '../fecStatus/FecStatusEntity';
// import { FileUpload } from '../fileTransfer/FileUploadEntity';
// import { TaxCategory } from '../taxCategory/TaxCategoryEntity';
// import { TaxSystem } from '../taxSystem/TaxSystemEntity';

@Entity({ tableName: 'building' })
export class Building {


  @PrimaryKey()
  id: number

  @OneToOne(()=> ClientCompany, clientCompany => clientCompany.building)
  clientCompany: ClientCompany
}

