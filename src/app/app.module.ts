import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ConfigModule } from '../config/conf.module';
import {
  FlightModule,
  HomeModule,
  HotelModule,
  BusModule
} from '../fearture-modules';
import { ConfigService } from 'src/config/conf.service';


@Module({
  controllers: [],
  providers: [],
  imports: [
    ConfigModule,
    FlightModule,
    HomeModule,
    HotelModule,
    BusModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (config: ConfigService): Promise<any> => ({
        type: config.get('DB_TYPE'),
        host: config.get('DB_HOST'),
        username: config.get('DB_USERNAME'),
        password: config.get('DB_PASSWORD'),
        database: config.get('DB_NAME'),
        autoLoadEntities: true,
        synchronize: true,
        logging: true,
      }),
      inject: [ConfigService],
    })
  ],
})
export class AppModule { }
