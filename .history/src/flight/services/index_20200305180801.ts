// export * from './flight.airports.service';
// export * from './flight.cabinCass.service';
// export * from './flight.airlineList.service';

import { FlightAirportsService } from './flight.airports.service';

import { FlightAirlineListService } from './flight.airlineList.service';
import { FlightCabinClassService } from './flight.cabinCass.service';

export const allFlightServices = {
    FlightAirportsService,
    FlightAirlineListService,
    FlightCabinClassService,
}
