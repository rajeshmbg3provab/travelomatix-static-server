import { Module } from '@nestjs/common';
import { CitiesService } from './flight/services/cities.service';

@Module({
    imports: [],
    controllers: [],
    providers: [CitiesService],
    exports: [CitiesService]
})
export class DatabaseModule { }
