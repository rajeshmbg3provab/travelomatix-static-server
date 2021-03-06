import { Module } from '@nestjs/common';
import { HomeController } from './controllers/home.controller';
import {
  SearchModulesService,
  WhyChooseUsService,
  SpecialOffersService,
  FlightDealsService
} from './services';

const allServicesArr = [
  SearchModulesService,
  WhyChooseUsService,
  SpecialOffersService,
  FlightDealsService
]


@Module({
  controllers: [HomeController],
  providers: [...allServicesArr]
})
export class HomeModule {}
