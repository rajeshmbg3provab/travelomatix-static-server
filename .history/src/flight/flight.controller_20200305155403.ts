import { Controller, Get, Param, Post, Query } from '@nestjs/common';
import { FlightAirportsService } from './services';
import { Conf as conf } from 'src/conf/conf';

@Controller('flight')
export class FlightController {
    constructor(private readonly airportsService: FlightAirportsService) {}
    @Post()
    async findAirportsList(@Query('city') city: string) {
        const  reslut = await this.airportsService.findAirportsList();
        return conf.res.ok(reslut);
    }
}
