import { Controller, Get } from '@nestjs/common';
import { BaseBusController } from './base-bus.controller';
import { BusCitiesService } from '@database/services';
import { Conf as conf} from '@conf/conf';

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
