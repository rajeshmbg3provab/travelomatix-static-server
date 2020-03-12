import { Module, forwardRef } from '@nestjs/common';

import { HomeController } from './controllers/home.controller';
import { DatabaseModule } from '@database/database.module';


@Module({
  controllers: [HomeController],
  providers: [],
  imports: [forwardRef(() => DatabaseModule)]
})
export class HomeModule { }
