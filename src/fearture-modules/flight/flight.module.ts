import { Module, forwardRef } from '@nestjs/common';

import { FlightController } from './controllers';

import  { 
  FlightAirlineListService,
  FlightAirportsService,
  FlightCabinClassService }  from './services';
import { DatabaseModule } from 'src/database/database.module';

const allServices = [
  FlightAirlineListService,
  FlightAirportsService,
  FlightCabinClassService
]

@Module({
  imports: [forwardRef( () => DatabaseModule)],
  controllers: [ FlightController ],
  providers: [ ...allServices ]
})
export class FlightModule {}
