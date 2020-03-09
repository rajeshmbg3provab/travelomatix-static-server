import { Controller, Get } from '@nestjs/common';
import { BaseBusController } from './base-bus.controller';
import { BusCitiesService } from '../services';
import { Conf as conf } from 'src/conf/conf';

@Controller('bus')
export class BusController extends BaseBusController {
    constructor(
        private readonly busCitiesService: BusCitiesService
    ) {
        super()
    }

    @Get('cities')
    async findBusCities(): Promise<any> {
        const result = this.busCitiesService.findAll();
        return conf.res.ok(result);
    }
}
