import { Module } from '@nestjs/common';
import { BusController } from './controllers/bus.controller';
import { BusService } from './services/bus-cities.service';

@Module({
  controllers: [BusController],
  providers: [BusService]
})
export class BusModule {}
