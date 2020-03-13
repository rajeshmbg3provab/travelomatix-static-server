import { Controller, Get, Query } from '@nestjs/common';
import { BaseBusController } from './base-bus.controller';
import { BusCitiesService } from '@database/services';
import { Conf as conf} from '@conf/conf';
import { Like } from 'typeorm';

@Controller('bus')
export class BusController extends BaseBusController {
    constructor(
        private readonly busCitiesService: BusCitiesService
    ) {
        super()
    }

    @Get('cityList')
    async findBusCities(@Query('City') city: string): Promise<any> {
        console.log(city);
        const where = {
            CityName: Like(`${city}%`)
        }
        const result = await this.busCitiesService.findAll({where});
        return conf.res.ok(result);
    }
}
