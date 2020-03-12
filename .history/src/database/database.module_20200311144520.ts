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

@Module({
    imports: [
        TypeOrmModule.forFeature([FlightCities, FlightCabins, FlightAirlines, HotelCities, HomeModules, HomeWhyUs])
    ],
    controllers: [],
    providers: [FlightCitiesService, FlightCabinsService, FlightAirlinesServices, HotelCitiesService, HomeModulesService, HomeWhyUsService ],
    exports: [FlightCitiesService, FlightCabinsService, FlightAirlinesServices, HotelCitiesService, HomeModulesService, HomeWhyUsService ]
})
export class DatabaseModule { }
