import { Module } from '@nestjs/common';
import { FlightCitiesService } from './services/flight-cities.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FlightCities } from './entity/flight-cities.entity';
import { FlightCabins } from './entity/flight-cabins.entity';
import { FlightCabinsService } from './services/flight-cabins.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([FlightCities, FlightCabins])
    ],
    controllers: [],
    providers: [FlightCitiesService, FlightCabinsService],
    exports: [FlightCitiesService, FlightCabinsService]
})
export class DatabaseModule { }
