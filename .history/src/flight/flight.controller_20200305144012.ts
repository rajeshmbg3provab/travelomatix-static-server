import { Controller, Get, Param, Post } from '@nestjs/common';
import { FlightService } from './flight.service';

@Controller('flight')
export class FlightController {
    constructor(private readonly flightService: FlightService) {}
    @Post()
    async findAllFlight(@Param('') params: string) {
        console.log(params);
        const  reslut = await this.flightService.findAllFlight();
        return { statusCode: 200, data: reslut };
    }
}
