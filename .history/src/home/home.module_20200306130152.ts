import { Module } from '@nestjs/common';
import { HomeController } from './controllers/home.controller';
import {
  SearchModulesService,
  WhyChooseUsService,
  SpecialOffersService
} from './services';


@Module({
  controllers: [HomeController],
  providers: [SearchModulesService, SpecialOffersService, WhyChooseUsService]
})
export class HomeModule {}
