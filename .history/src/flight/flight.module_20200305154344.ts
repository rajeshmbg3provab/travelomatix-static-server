import { Module } from '@nestjs/common';
import { FlightController } from './flight.controller';
import { FlightAirportsService } from './flight.airports.service';

@Module({
  controllers: [FlightController],
  providers: [FlightAirportsService]
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
