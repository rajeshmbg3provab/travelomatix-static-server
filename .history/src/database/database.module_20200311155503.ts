import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FlightCitiesService } from './services/flight-cities.service';
import { FlightCities } from './entity/flight-cities.entity';
import { FlightCabins } from './entity/flight-cabins.entity';
import { FlightCabinsService } from './services/flight-cabins.service';
import { FlightAirlines } from './entity/flight-airlines.entity';
import { FlightAirlinesServices } from './services/flight-airlines.service';
import { HotelCities } from './entity/hotel-cities.entity';
import { HotelCitiesService } from './services/hotel-cities.service';
import { HomeModules } from './entity/home-modules.entity';
import { HomeModulesService } from './services/home-modules.service';
import { HomeWhyUs } from './entity/home-why-us.entity';
import { HomeWhyUsService } from './services/home-why-us.service';
import { HomeSpecialOffers } from './entity/home-special-offers.entity';
import { HomeSpecialOffersService } from './services/home-special-offers.service';
import { HomeBestDeals } from './entity/home-best-deals.entity';
import { HomeBestDealsService } from './services/home-best-deals.service';
import { HomeRecommendations } from './entity/home-recomends.entity';
import { HomeRecommendationsService } from './services/home-recommendations.service';
import { HomePackages } from './entity/home-packages.entity';
import { HomeLinks } from './entity/home-links.entity';
import { HomePackagesService } from './services/home-packages.service';
import { HomeLinksService } from './services/home-links.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([FlightCities, FlightCabins, FlightAirlines, HotelCities, HomeModules, HomeWhyUs, HomeSpecialOffers, HomeBestDeals, HomeRecommendations, HomePackages, HomeLinks])
    ],

    controllers: [],
    providers: [FlightCitiesService, FlightCabinsService, FlightAirlinesServices, HotelCitiesService, HomeModulesService, HomeWhyUsService, HomeSpecialOffersService, HomeBestDealsService, HomeRecommendationsService, HomePackagesService, HomeLinksService ],

    exports: [FlightCitiesService, FlightCabinsService, FlightAirlinesServices, HotelCitiesService, HomeModulesService, HomeWhyUsService, HomeSpecialOffersService, HomeBestDealsService, HomeRecommendationsService, HomePackagesService, HomeLinksService ]
})
export class DatabaseModule { }
