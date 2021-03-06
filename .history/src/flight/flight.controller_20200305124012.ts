import { Controller, Get, Param } from '@nestjs/common';
import { FlightService } from './flight.service';

@Controller('flight')
export class FlightController {
    constructor(private readonly flightService: FlightService) {}
    @Get()
    async findAllFlight(@Param('') city: string) {
        console.log(city);
        const  reslut = await this.flightService.findAllFlight();
        return { statusCode: 200, data: reslut };
    }
}
