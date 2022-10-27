import { Migration } from '@mikro-orm/migrations';

export class Migration20221027090239 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table `building` (`id` int unsigned not null auto_increment primary key) default character set utf8mb4 engine = InnoDB;');

    this.addSql('create table `clientCompany` (`id` int unsigned not null auto_increment primary key, `buildingId` int unsigned not null) default character set utf8mb4 engine = InnoDB;');
    this.addSql('alter table `clientCompany` add unique `clientCompany_buildingId_unique`(`buildingId`);');

    this.addSql('create table `user` (`id` int unsigned not null auto_increment primary key, `username` varchar(255) not null) default character set utf8mb4 engine = InnoDB;');

    this.addSql('create table `userHasClientCompany` (`userId` int unsigned not null, `clientCompanyId` int unsigned not null, primary key (`userId`, `clientCompanyId`)) default character set utf8mb4 engine = InnoDB;');
    this.addSql('alter table `userHasClientCompany` add index `userHasClientCompany_userId_index`(`userId`);');
    this.addSql('alter table `userHasClientCompany` add index `userHasClientCompany_clientCompanyId_index`(`clientCompanyId`);');

    this.addSql('alter table `clientCompany` add constraint `clientCompany_buildingId_foreign` foreign key (`buildingId`) references `building` (`id`) on update cascade;');

    this.addSql('alter table `userHasClientCompany` add constraint `userHasClientCompany_userId_foreign` foreign key (`userId`) references `user` (`id`) on update cascade;');
    this.addSql('alter table `userHasClientCompany` add constraint `userHasClientCompany_clientCompanyId_foreign` foreign key (`clientCompanyId`) references `clientCompany` (`id`) on update cascade;');
  }

  async down(): Promise<void> {
    this.addSql('alter table `clientCompany` drop foreign key `clientCompany_buildingId_foreign`;');

    this.addSql('alter table `userHasClientCompany` drop foreign key `userHasClientCompany_clientCompanyId_foreign`;');

    this.addSql('alter table `userHasClientCompany` drop foreign key `userHasClientCompany_userId_foreign`;');

    this.addSql('drop table if exists `building`;');

    this.addSql('drop table if exists `clientCompany`;');

    this.addSql('drop table if exists `user`;');

    this.addSql('drop table if exists `userHasClientCompany`;');
  }

}
