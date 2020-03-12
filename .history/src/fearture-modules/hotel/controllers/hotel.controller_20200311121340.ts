import { Controller, Get } from '@nestjs/common';
import { BaseHotelController } from './base.hotel.controller';
import { Conf as conf } from 'src/config/conf';
import { HotelCitiesService } from 'src/database/services/hotel-cities.service';

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
