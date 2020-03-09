import { Controller, Post, Get } from '@nestjs/common';
import { BaseHomeController } from './base-home.controller';
import { Conf as conf } from 'src/conf/conf';
import {
    SearchModulesService,
    WhyChooseUsService,
    SpecialOffersService,
    FlightDealsService
} from '../services';

@Controller('home')
export class HomeController extends BaseHomeController {
        
    constructor(
        private readonly searchModulesService: SearchModulesService,
        private readonly customerOfferService: WhyChooseUsService,
        private readonly specialOffersService: SpecialOffersService,
        private readonly flightDealServices: FlightDealsService,
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

    @Get('allSpecialOffers')
    async findAllSpecialOffers() {
        const result = this.specialOffersService.findSpecialOffers();
        return conf.res.ok(result);
    }

    @Get('allFlightDeals')
    async findAllFlightDeals() {
        const result = this.flightDealServices.findAllFlightDeals();
        return conf.res.ok(result);
    }

}
