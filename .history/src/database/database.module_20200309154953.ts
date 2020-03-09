import { Module } from '@nestjs/common';
import { CitiesService } from './flight/services/cities.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { City } from './flight/entity/city.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([City])
    ],
    controllers: [],
    providers: [CitiesService],
    exports: [CitiesService]
})
export class DatabaseModule { }
