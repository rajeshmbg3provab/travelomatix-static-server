import { Module } from '@nestjs/common';
import { FlightController } from './controllers/flight.controller';

import { 
  FlightAirportsService,
  FlightCabinClassService, 
} from './services';
import { BaseFlightController } from './controllers/base.controller';


@Module({
  controllers: [BaseFlightController, FlightController],
  providers: [
    FlightAirportsService,
    FlightCabinClassService
   ]
})
export class FlightModule {}
