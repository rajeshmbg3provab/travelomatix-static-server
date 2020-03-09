import { Module } from '@nestjs/common';
import { TypeOrmModule } '@nestjs/typeorm';

import { ConfigModule } from '../config/conf.module';
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
        ConfigModule,
        FlightModule,
        HomeModule,
        HotelModule,
        BusModule,
        TypeOrmModule.forRoot()
      ],
})
export class AppModule { }
