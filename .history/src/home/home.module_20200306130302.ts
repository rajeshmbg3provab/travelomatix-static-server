import { Module } from '@nestjs/common';
import { HomeController } from './controllers/home.controller';
import {
  SearchModulesService,
  WhyChooseUsService,
  SpecialOffersService
} from './services';

const allServicesArr = [
  SearchModulesService,
  WhyChooseUsService,
  SpecialOffersService
]


@Module({
  controllers: [HomeController],
  providers: [...allServicesArr]
})
export class HomeModule {}
