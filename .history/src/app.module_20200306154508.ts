import { Module } from '@nestjs/common';
import { ConfModule } from './conf/conf.module';
import { FlightModule } from './flight/flight.module';
import { HotelModule } from './hotel/hotel.module';
import { HomeModule } from './home/home.module';

@Module({
  imports: [ConfModule, FlightModule, HomeModule, HotelModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
