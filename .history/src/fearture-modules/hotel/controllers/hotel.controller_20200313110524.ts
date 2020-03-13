import { Controller, Get } from '@nestjs/common';

import { Conf as conf } from '@conf/conf';
import { BaseHotelController } from './base.hotel.controller';

import { HotelCitiesService } from '@database/services';

@Controller('hotel')
export class HotelController extends BaseHotelController {
    
    constructor(
        private readonly hotelCitiesService: HotelCitiesService
    ) {
        super()
    }

    @Get('cityList')
    async findCityList(): Promise<any> {
        const result = await this.hotelCitiesService.findAll()
        return conf.res.ok(result);
    }
}
