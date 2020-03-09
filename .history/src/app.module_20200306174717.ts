import { Module } from '@nestjs/common';
import { ConfModule } from './conf/conf.module';
import { FlightModule } from './modules/flight/flight.module';
import { HotelModule } from './modules/hotel/hotel.module';
import { HomeModule } from './modules/home/home.module';
import { BusModule } from './modules/bus/bus.module';

@Module({
  imports: [ConfModule, FlightModule, HomeModule, HotelModule, BusModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
