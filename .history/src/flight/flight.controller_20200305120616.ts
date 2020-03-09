import { Controller } from '@nestjs/common';
import { FlightService } from './flight.service';

@Controller('flight')
export class FlightController {
    constructor(private readonly flightService: FlightService) {}
    async findAllFlight() {
        const  reslut = await this.flightService.findAllFlight();
    }
}
