import { Module } from '@nestjs/common';
import { ConfModule } from './conf/conf.module';
import {
  FlightModule,
  HomeModule,
  HotelModule,
  BusModule
} from './modules';


@Module({
  imports: [
    ConfModule,
    FlightModule,
    HomeModule,
    HotelModule,
    BusModule
  ],

  controllers: [],
  providers: [],
})
export class AppModule { }
