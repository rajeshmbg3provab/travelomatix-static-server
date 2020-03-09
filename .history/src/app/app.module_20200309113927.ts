import { Module } from '@nestjs/common';
import { ConfModule } from '../conf/conf.module';
import {
  FlightModule,
  HomeModule,
  HotelModule,
  BusModule
} from '../modules';


@Module({
  controllers: [],
  providers: [],
      imports: [
        ConfModule,
        FlightModule,
        HomeModule,
        HotelModule,
        BusModule,
      ],
})
export class AppModule { }
