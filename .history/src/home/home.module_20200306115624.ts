import { Module } from '@nestjs/common';
import { BaseHomeController, SearchModuleController } from './controllers';
import { SearchModulesService } from './services';

@Module({
  controllers: [BaseHomeController, SearchModuleController],
  providers: [SearchModulesService]
})
export class HomeModule {}
