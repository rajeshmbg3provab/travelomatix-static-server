import { Controller, Get, Param, Post, Query } from '@nestjs/common';
import { FlightAirportsService, FlightCabinClassService } from '../services';
import { Conf as conf } from 'src/conf/conf';
import { BaseFlightController } from './';
import { async } from 'rxjs/internal/scheduler/async';


@Controller('flight')
export class FlightController extends BaseFlightController {
    constructor(
        private readonly airportsService: FlightAirportsService,
        private readonly cabinClassList: FlightCabinClassService
    ) {
        super()
    }
    @Post('airportList')
    async findAirportsList(@Query('city') city: string) {
        console.log(city)
        const  reslut = await this.airportsService.findAirportsList();
        return conf.res.ok(reslut);
    }
    @Post('cabinClassList')
    async findCabinList() {
        const result = await this.cabinClassList.findCabinClassList();
        return conf.res.ok(result);
    }
}
