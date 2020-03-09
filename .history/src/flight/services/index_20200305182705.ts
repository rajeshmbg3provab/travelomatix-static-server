import { FlightAirportsService } from './flight.airports.service';
import { FlightAirlineListService } from './flight.airlineList.service';
import { FlightCabinClassService } from './flight.cabinCass.service';

export const allFlightServices = [
    FlightAirportsService,
    FlightAirlineListService,
    FlightCabinClassService,
];

export { 
    FlightAirportsService,
    FlightAirlineListService,
    FlightCabinClassService,
}