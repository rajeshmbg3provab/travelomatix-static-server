import { Controller, Post, Get } from '@nestjs/common';
import { BaseHomeController } from './base-home.controller';
import { SearchModulesService } from '../services';
import { Conf as conf } from 'src/conf/conf';
import { WhyChooseUsService } from '../services/why-choose-us.service';

@Controller('home')
export class HomeController extends BaseHomeController {
        
    constructor(
        private readonly searchModulesService: SearchModulesService,
        private readonly customerOfferService: WhyChooseUsService
    ) {
        super();
    }

    @Get('allSearchModules')
    async findAllSearchModules() {
        const result = this.searchModulesService.findAllSearchModules();
        return conf.res.ok(result);
    }

    @Get('allCustomerOffers')
    async findAllCustomerOffers() {
        const result = this.customerOfferService.findAllCustomerOffers();
        return conf.res.ok(result);
    }

}
