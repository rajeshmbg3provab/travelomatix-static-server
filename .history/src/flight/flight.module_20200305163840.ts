import { Module } from '@nestjs/common';

import { 
  FlightController
} from './controllers';

import { 
  FlightAirportsService,
  FlightCabinClassService,
  FlightAirlineListService, 
} from './services';


@Module({
  controllers: [FlightController],
  providers: [
    FlightAirportsService,
    FlightCabinClassService,
    FlightAirlineListService
   ]
})
export class FlightModule {}
