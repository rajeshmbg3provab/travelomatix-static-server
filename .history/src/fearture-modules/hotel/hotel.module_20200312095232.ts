import { Module, forwardRef } from '@nestjs/common';
import { HotelController } from './controllers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  controllers: [ HotelController ],
  providers: [],
  imports: [forwardRef(() => DatabaseModule)]
})
export class HotelModule {}
