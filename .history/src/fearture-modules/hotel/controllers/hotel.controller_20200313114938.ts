import { Controller, Get, Query } from '@nestjs/common';

import { Conf as conf } from '@conf/conf';
import { BaseHotelController } from './base.hotel.controller';

import { HotelCitiesService } from '@database/services';
import { Like } from 'typeorm';

@Controller('hotel')
export class HotelController extends BaseHotelController {
    
    constructor(
        private readonly hotelCitiesService: HotelCitiesService
    ) {
        super()
    }

    @Get('cityList')
    async findCityList(@Query('City') City: string): Promise<any> {
        const where = {
            CityName: Like(`${City}%`),
        }
        const result = await this.hotelCitiesService.findAll({where})
        return conf.res.ok(result);
    }
}
