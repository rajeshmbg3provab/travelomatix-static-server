import { Controller } from '@nestjs/common';
import { BaseHomeController } from './base-home.controller';
import { SearchModulesService } from '../services';
import { Conf as conf } from 'src/conf/conf';

@Controller('search-module')
export class SearchModuleController extends BaseHomeController  {
    
    constructor(
        private readonly searchModulesService: SearchModulesService
    ) {
        super();
    }

    async findAllSearchModules() {
        const result = this.searchModulesService.findAllSearchModules();
        return conf.res.ok(result);
    }

}
