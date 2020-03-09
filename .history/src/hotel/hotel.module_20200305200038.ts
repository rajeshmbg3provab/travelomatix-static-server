import { Module } from '@nestjs/common';
import { HotelController } from './hotel.controller';

@Module({
  controllers: [HotelController],
  providers: [Hotel]
})
export class HotelModule {}
