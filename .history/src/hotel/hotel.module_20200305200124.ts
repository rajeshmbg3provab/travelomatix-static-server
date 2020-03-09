import { Module } from '@nestjs/common';
import { HotelCityListService } from './services';
import { HotelController } from './hotel.controller';

@Module({
  controllers: [HotelController],
  providers: [HotelCityListService]
})
export class HotelModule {}
