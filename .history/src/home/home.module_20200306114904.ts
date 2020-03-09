import { Module } from '@nestjs/common';
import { Base.HomeController } from './controllers/base.home.controller';
import { SearchModulesService } from './services/search-modules.service';
import { SearchModuleController } from './controllers/search-module.controller';
import { SearchModuleController } from './controllers/search-module.controller';

@Module({
  controllers: [Base.HomeController, SearchModuleController],
  providers: [SearchModulesService]
})
export class HomeModule {}
