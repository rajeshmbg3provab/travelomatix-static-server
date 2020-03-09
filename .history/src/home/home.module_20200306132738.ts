import { Module } from '@nestjs/common';
import { HomeController } from './controllers/home.controller';
import {
  FlightDealsService,
  RecommendedHotelService,
  SearchModulesService,
  SpecialOffersService,
  WhyChooseUsService,
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
export class HomeModule { }
