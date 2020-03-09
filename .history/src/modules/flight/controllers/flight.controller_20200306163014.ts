import { Controller, Get, Param, Post, Query } from '@nestjs/common';
import { Conf as conf } from 'src/conf/conf';
import { BaseFlightController } from './';
import {
    FlightAirportsService,
    FlightCabinClassService,
    FlightAirlineListService,
} from '../services';


@Controller('flight')
export class FlightController extends BaseFlightController {

    constructor(
        private readonly airportsService: FlightAirportsService,
        private readonly cabinClassService: FlightCabinClassService,
        private readonly airlineService: FlightAirlineListService
    ) {
        super()
    }

    @Post('airportList')
    async findAirportsList(@Query('city') city: string): Promise<any> {
        const reslut = await this.airportsService.findAirportsList();
        return conf.res.ok(reslut);
    }

    @Post('cabinClassList')
    async findCabinClassList(): Promise<any> {
        const result = await this.cabinClassService.findCabinClassList();
        return conf.res.ok(result);
    }

    @Post('airlineList')
    async findAirlineList(): Promise<any> {
        const result = await this.airlineService.findAirlineList();
        return conf.res.ok(result);
    }

}
