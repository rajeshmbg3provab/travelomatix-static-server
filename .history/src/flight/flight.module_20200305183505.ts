import { Module } from '@nestjs/common';

import { FlightController } from './controllers';

import  { 
  FlightAirlineListService,
  FlightAirportsService,
  FlightCabinClassService }  from './services';

const allServices = [
  FlightAirlineListService,
  FlightAirportsService,
  FlightCabinClassService
]

@Module({
  controllers: [ FlightController ],
  providers: [
    FlightAirlineListService,
    FlightAirportsService,
    FlightCabinClassService
]
})
export class FlightModule {}
