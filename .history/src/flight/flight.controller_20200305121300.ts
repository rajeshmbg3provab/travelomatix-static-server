import { Controller, Get } from '@nestjs/common';
import { FlightService } from './flight.service';

@Controller('flight')
export class FlightController {
    constructor(private readonly flightService: FlightService) {}
    @Get()
    async findAllFlight() {
        const  reslut = await this.flightService.findAllFlight();
        return { statusCode: 200, data: reslut };
    }
}
