import { Module } from '@nestjs/common';
import { HomeController } from './controllers/home.controller';
import {
  SearchModulesService,
  WhyChooseUsService,
  SpecialOffersService,
  FlightDealsService,
  RecommendedHotelService
} from './services';

const allServicesArr = [
  FlightDealsService,
  RecommendedHotelService,
  SearchModulesService,
  SpecialOffersService,
  WhyChooseUsService,
]


@Module({
  controllers: [HomeController],
  providers: [...allServicesArr]
})
export class HomeModule {}
