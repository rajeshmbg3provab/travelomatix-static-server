import { Controller, Get } from '@nestjs/common';
import { BaseBusController } from './base-bus.controller';
import { Conf as conf} from 'src/config/conf';
import { BusCitiesService } from 'src/database/services/bus-cities.service';


@Controller('bus')
export class BusController extends BaseBusController {
    constructor(
        private readonly busCitiesService: BusCitiesService
    ) {
        super()
    }

    @Get('cityList')
    async findBusCities(): Promise<any> {
        const result = this.busCitiesService.findAll();
        return conf.res.ok(result);
    }
}
