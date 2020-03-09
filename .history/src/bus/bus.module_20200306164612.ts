import { Module } from '@nestjs/common';
import { BusController } from './controllers';
import { BusCitiesService } from './services';

@Module({
  controllers: [BusController],
  providers: [BusCitiesService]
})
export class BusModule {}
