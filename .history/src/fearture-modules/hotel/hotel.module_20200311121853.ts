import { Module, forwardRef } from '@nestjs/common';
import { HotelController } from './controllers';
import { HotelCityListService } from './services';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  controllers: [ HotelController ],
  providers: [HotelCityListService],
  imports: [forwardRef(() => DatabaseModule)]
})
export class HotelModule {}
