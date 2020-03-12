import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { 
    FlightCities,
    FlightCabins,
    FlightAirlines,
    HotelCities,
    HomeModules,
    HomeWhyUs,
    HomeSpecialOffers,
    HomeBestDeals,
    HomeRecommendations,
    HomePackages,
    HomeLinks,
    BusCities
} from './entity';
import {
    FlightCitiesService,
    FlightCabinsService,
    FlightAirlinesService,
    HotelCitiesService,
    HomeModulesService,
    HomeWhyUsService,
    HomeSpecialOffersService,
    HomeBestDealsService,
    HomeRecommendationsService,
    HomePackagesService,
    HomeLinksService,
    BusCitiesService
} from './services';


@Module({
    imports: [
        TypeOrmModule.forFeature([
            FlightCities, FlightCabins, FlightAirlines, HotelCities, HomeModules, HomeWhyUs, HomeSpecialOffers, HomeBestDeals, HomeRecommendations, HomePackages, HomeLinks, BusCities])
    ],

    controllers: [],
    providers: [FlightCitiesService, FlightCabinsService, FlightAirlinesService, HotelCitiesService, HomeModulesService, HomeWhyUsService, HomeSpecialOffersService, HomeBestDealsService, HomeRecommendationsService, HomePackagesService, HomeLinksService, BusCitiesService ],

    exports: [FlightCitiesService, FlightCabinsService, FlightAirlinesService, HotelCitiesService, HomeModulesService, HomeWhyUsService, HomeSpecialOffersService, HomeBestDealsService, HomeRecommendationsService, HomePackagesService, HomeLinksService, BusCitiesService ]
})
export class DatabaseModule { }
