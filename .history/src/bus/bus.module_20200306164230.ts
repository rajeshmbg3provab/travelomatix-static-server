import { Module } from '@nestjs/common';
import { BusController } from './controllers/bus.controller';
import { BusCitiesService } from './services/bus-cities.service';

@Module({
  controllers: [BusController],
  providers: [BusCitiesService]
})
export class BusModule {}
