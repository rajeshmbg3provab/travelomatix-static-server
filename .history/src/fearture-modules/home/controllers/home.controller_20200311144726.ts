import { Controller, Post, Get } from '@nestjs/common';
import { BaseHomeController } from './base-home.controller';
import { Conf as conf } from 'src/config/conf';
import {
    SearchModulesService,
    WhyChooseUsService,
    SpecialOffersService,
    FlightDealsService,
    RecommendedHotelService,
    InternationalPackagesService,
    SocialLinksService
} from '../services';
import { HomeModulesService } from 'src/database/services/home-modules.service';
import { HomeWhyUsService } from 'src/database/services/home-why-us.service';

@Controller('home')
export class HomeController extends BaseHomeController {

    constructor(
        private readonly searchModulesService: HomeModulesService,
        private readonly customerOfferService: HomeWhyUsService,
        private readonly specialOffersService: SpecialOffersService,
        private readonly flightDealsServices: FlightDealsService,
        private readonly recommendedHotelsServices: RecommendedHotelService,
        private readonly internationalPackagesService: InternationalPackagesService,
        private readonly socialLinksService: SocialLinksService
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
        const result = await this.specialOffersService.findSpecialOffers();
        return conf.res.ok(result);
    }

    @Get('allFlightDeals')
    async findAllFlightDeals(): Promise<any> {
        const result = await this.flightDealsServices.findAllFlightDeals();
        return conf.res.ok(result);
    }

    @Get('allRecommendedHotels')
    async findAllRecommendedHotels(): Promise<any> {
        const result = await this.recommendedHotelsServices.findAllRecommendedHotels();
        return conf.res.ok(result);
    }

    @Get('internationalPackages')
    async findAllInternationPackages(): Promise<any> {
        const result = await this.internationalPackagesService.findAllPackages();
        return conf.res.ok(result);
    }

    @Get('socialLinks')
    async findAllSocialLinks(): Promise<any> {
        const result = await this.socialLinksService.findAll();
        return conf.res.ok(result);
    }
}

