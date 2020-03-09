import { Module } from '@nestjs/common';
import { HotelController } from './controllers';
import { HotelCityListService } from './services';

@Module({
  controllers: [ HotelController ],
  providers: [HotelCityListService]
})
export class HotelModule {}
