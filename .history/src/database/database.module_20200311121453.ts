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

@Module({
    imports: [
        TypeOrmModule.forFeature([FlightCities, FlightCabins, FlightAirlines, HotelCities])
    ],
    controllers: [],
    providers: [FlightCitiesService, FlightCabinsService, FlightAirlinesServices, HotelCitiesService ],
    exports: [FlightCitiesService, FlightCabinsService, FlightAirlinesServices, HotelCitiesService ]
})
export class DatabaseModule { }
