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
export const entities = [
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
];

export const services = [
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
];

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
