import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfModule } from './conf/conf.module';
import { FlightModule } from './flight/flight.module';
import { HotelModule } from './hotel/hotel.module';
import { HomeModule } from './home/home.module';

@Module({
  imports: [ConfModule, FlightModule, HotelModule, HomeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
