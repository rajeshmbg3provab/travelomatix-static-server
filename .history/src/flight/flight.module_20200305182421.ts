import { Module } from '@nestjs/common';

import { FlightController } from './controllers';

import  { allFlightServices }  from './services';

@Module({
  controllers: [ FlightController ],
  providers: [
    allFlightServices.FlightAirlineListService,
    allFlightServices.FlightAirportsService,
    allFlightServices.FlightCabinClassService
  ]
})
export class FlightModule {}
