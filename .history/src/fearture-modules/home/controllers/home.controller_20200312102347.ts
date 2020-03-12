import { Controller, Get } from '@nestjs/common';

import { Conf as conf } from '@conf/conf';
import { BaseHomeController } from './base-home.controller';

import {
    HomeModulesService,
    HomeWhyUsService,
    HomeSpecialOffersService,
    HomeBestDealsService,
    HomeRecommendationsService,
    HomePackagesService,
    HomeLinksService
} from '@database/services';



@Controller('home')
export class HomeController extends BaseHomeController {

    constructor(
        private readonly searchModulesService: HomeModulesService,
        private readonly customerOfferService: HomeWhyUsService,
        private readonly specialOffersService: HomeSpecialOffersService,
        private readonly bestDealsServices: HomeBestDealsService,
        private readonly recommendationsServices: HomeRecommendationsService,
        private readonly packagesService: HomePackagesService,
        private readonly linksService: HomeLinksService,
    ) {
        super();
    }

    @Get('allSearchModules')
    async findAllSearchModules(): Promise<any> {
        const result = await this.searchModulesService.findAll();
        return conf.res.ok(result);
    }

    @Get('allCustomerOffers')
    async findAllCustomerOffers(): Promise<any> {
        const result = await this.customerOfferService.findAll();
        return conf.res.ok(result);
    }

    @Get('allSpecialOffers')
    async findAllSpecialOffers(): Promise<any> {
        const result = await this.specialOffersService.findAll();
        return conf.res.ok(result);
    }

    @Get('allFlightDeals')
    async findAllFlightDeals(): Promise<any> {
        const result = await this.bestDealsServices.findAll();
        return conf.res.ok(result);
    }

    @Get('allRecommendedHotels')
    async findAllRecommendedHotels(): Promise<any> {
        const result = await this.recommendationsServices.findAll();
        return conf.res.ok(result);
    }

    @Get('internationalPackages')
    async findAllInternationPackages(): Promise<any> {
        const result = await this.packagesService.findAll();
        return conf.res.ok(result);
    }

    @Get('socialLinks')
    async findAllSocialLinks(): Promise<any> {
        const result = await this.linksService.findAll();
        return conf.res.ok(result);
    }
}

