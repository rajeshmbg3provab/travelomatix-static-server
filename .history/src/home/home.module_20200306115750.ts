import { Module } from '@nestjs/common';
import { SearchModuleController } from './controllers';
import { SearchModulesService } from './services';

@Module({
  controllers: [SearchModuleController],
  providers: [SearchModulesService]
})
export class HomeModule {}
