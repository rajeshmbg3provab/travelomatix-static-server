import { Controller, Get, Param, Post, Query } from '@nestjs/common';
import { FlightService } from './flight.service';
import { Conf as conf } from 'src/conf/conf';

@Controller('flight')
export class FlightController {
    constructor(private readonly flightService: FlightService) {}
    @Post()
    async findAirportsList(@Query('city') city: string) {
        const  reslut = await this.flightService.findAirportsList();
        return conf.res.ok(reslut);
    }
}
