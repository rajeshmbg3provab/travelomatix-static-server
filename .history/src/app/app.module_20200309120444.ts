import { Module } from '@nestjs/common';
import { TypeOrmModule } '@nestjs/typeorm';

import { ConfModule } from '../conf/conf.module';
import {
  FlightModule,
  HomeModule,
  HotelModule,
  BusModule
} from '../fearture-modules';


@Module({
  controllers: [],
  providers: [],
      imports: [
        ConfModule,
        FlightModule,
        HomeModule,
        HotelModule,
        BusModule,
        TypeOrmModule.forRoot()
      ],
})
export class AppModule { }
