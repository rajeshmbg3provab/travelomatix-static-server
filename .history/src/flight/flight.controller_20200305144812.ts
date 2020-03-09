import { Controller, Get, Param, Post, Query } from '@nestjs/common';
import { FlightService } from './flight.service';

@Controller('flight')
export class FlightController {
    constructor(private readonly flightService: FlightService) {}
    @Get(':city')
    async findAllFlight(@Param('city') city: string, @Query() qs: any) {
        console.log(city, qs);
        const  reslut = await this.flightService.findAllFlight();
        return { statusCode: 200, data: reslut };
    }
}
