import { Module, forwardRef } from '@nestjs/common';
import { HomeController } from './controllers/home.controller';
import {
  FlightDealsService,
  InternationalPackagesService,
  RecommendedHotelService,
  SearchModulesService,
  SocialLinksService,
  SpecialOffersService,
  WhyChooseUsService,
} from './services';
import { DatabaseModule } from 'src/database/database.module';

const allServicesArr = [
  FlightDealsService,
  InternationalPackagesService,
  RecommendedHotelService,
  SearchModulesService,
  SocialLinksService,
  SpecialOffersService,
  WhyChooseUsService,
]


@Module({
  controllers: [HomeController],
  providers: [...allServicesArr],
  imports: [forwardRef(() => DatabaseModule)]
})
export class HomeModule { }
