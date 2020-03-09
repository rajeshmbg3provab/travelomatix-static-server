import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FlightModule } from './flight/flight.module';
import { ConfModule } from './conf/conf.module';

@Module({
  imports: [FlightModule, ConfModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
