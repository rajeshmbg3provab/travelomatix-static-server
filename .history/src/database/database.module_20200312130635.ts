import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { 
    FlightAirportList,
    FlightCabins,
    FlightAirlineList,
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
    FlightAirportList,
    FlightCabins,
    FlightAirlineList,
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
];

@Module({
    imports: [
        TypeOrmModule.forFeature([ ...entities ])
    ],

    controllers: [],
    providers: [ ...services ],

    exports: [ ...services ]
})
export class DatabaseModule { }
