import { Module } from '@nestjs/common';
import { CitiesService } from './flight/services/cities.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cities } from './flight/entity/cities.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([Cities])
    ],
    controllers: [],
    providers: [CitiesService],
    exports: [CitiesService]
})
export class DatabaseModule { }
