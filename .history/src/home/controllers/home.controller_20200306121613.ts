import { Controller, Post } from '@nestjs/common';
import { BaseHomeController } from './base-home.controller';
import { SearchModulesService } from '../services';
import { Conf as conf } from 'src/conf/conf';

@Controller('home')
export class HomeController extends BaseHomeController {
        
    constructor(
        private readonly searchModulesService: SearchModulesService
    ) {
        super();
    }

    @Post()
    async findAllSearchModules() {
        const result = this.searchModulesService.findAllSearchModules();
        return conf.res.ok(result);
    }

}
