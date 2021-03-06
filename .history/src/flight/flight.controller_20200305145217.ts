import { Controller, Get, Param, Post, Query } from '@nestjs/common';
import { FlightService } from './flight.service';
import { StringTypeAnnotation } from '@babel/types';

@Controller('flight')
export class FlightController {
    constructor(private readonly flightService: FlightService) {}
    @Get()
    async findAllFlight( @Query('city') qs: string) {
        const  reslut = await this.flightService.findAllFlight();
        return { statusCode: 200, data: reslut };
    }
}
