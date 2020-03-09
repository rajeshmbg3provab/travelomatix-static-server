import { Module } from '@nestjs/common';

import { 
  FlightController
} from './controllers';

import { 
  FlightAirportsService,
  FlightCabinClassService, 
} from './services';


@Module({
  controllers: [FlightController],
  providers: [
    FlightAirportsService,
    FlightCabinClassService
   ]
})
export class FlightModule {}
