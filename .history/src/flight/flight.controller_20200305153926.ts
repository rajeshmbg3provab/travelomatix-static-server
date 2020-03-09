import { Controller, Get, Param, Post, Query } from '@nestjs/common';
import { FlightService } from './flight.service';
import { Conf } from 'src/conf/conf';

@Controller('flight')
export class FlightController {
    constructor(private readonly flightService: FlightService) {}
    @Post()
    async findAirportsList(@Query('city') city: string) {
        const  reslut = await this.flightService.findAirportsList();
        return Conf.res.ok(reslut);
    }
}
