// export * from './flight.airports.service';
// export * from './flight.cabinCass.service';
// export * from './flight.airlineList.service';


import * as FlightAirportsService from './flight.airports.service';
import * as FlightAirlineListService from './flight.airlineList.service';
import * as FlightCabinClassService from './flight.cabinCass.service';

export const allFlightServices = {
    FlightAirportsService,
    FlightAirlineListService,
    FlightCabinClassService,
}
