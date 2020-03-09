import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfModule } from './conf/conf.module';
import { FlightModule } from './flight/flight.module';
import { HotelModule } from './hotel/hotel.module';

@Module({
  imports: [FlightModule, ConfModule, HotelModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
