import { Module } from '@nestjs/common';
import { FlightController } from './flight.controller';
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
export class FlightModule {
  findAllFlightList() {
    return [
      'blr',
      'gau',
      'mum',
      'del',
      'chn',
    ]
  }
}
