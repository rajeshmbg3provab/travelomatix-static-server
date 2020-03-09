import { Module } from '@nestjs/common';
import { FlightCitiesService } from './services/flight-cities.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FlightCities } from './entity/flight-cities.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([FlightCities])
    ],
    controllers: [],
    providers: [FlightCitiesService],
    exports: [FlightCitiesService]
})
export class DatabaseModule { }
