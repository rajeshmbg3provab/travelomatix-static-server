import { Controller, Get } from '@nestjs/common';
import { BaseHotelController } from './base.hotel.controller';
import { Conf as conf } from 'src/conf/conf';
import { HotelCityListService } from '../services';

@Controller('hotel')
export class HotelController extends BaseHotelController {
    
    constructor(
        private readonly hotelCityService: HotelCityListService
    ) {
        super()
    }

    @Get()
    async findCityList() {
        const result = await this.hotelCityService.findCityList();
        return conf.res.ok(result);
    }
}
