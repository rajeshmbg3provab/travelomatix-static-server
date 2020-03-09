import { Module } from '@nestjs/common';
import { HomeController } from './controllers/home.controller';
import {
  SearchModulesService,
  WhyChooseUsService
} from './services';


@Module({
  controllers: [HomeController],
  providers: [SearchModulesService, WhyChooseUsService]
})
export class HomeModule {}
