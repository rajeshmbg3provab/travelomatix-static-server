import { Module } from '@nestjs/common';
import { CitiesService } from './services/cities.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FlightCities } from './entity/flight-cities.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([FlightCities])
    ],
    controllers: [],
    providers: [CitiesService],
    exports: [CitiesService]
})
export class DatabaseModule { }
