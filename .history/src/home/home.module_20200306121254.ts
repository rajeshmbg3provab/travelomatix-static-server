import { Module } from '@nestjs/common';
import { SearchModulesService } from './services';
import { HomeController } from './controllers/home.controller';

@Module({
  controllers: [HomeController],
  providers: [SearchModulesService]
})
export class HomeModule {}
