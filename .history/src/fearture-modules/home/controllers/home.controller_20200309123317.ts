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

@Controller('home')
export class HomeController extends BaseHomeController {

    constructor(
        private readonly searchModulesService: SearchModulesService,
        private readonly customerOfferService: WhyChooseUsService,
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
        const result = await this.searchModulesService.findAllSearchModules();
        return conf.res.ok(result);
    }

    @Get('allCustomerOffers')
    async findAllCustomerOffers(): Promise<any> {
        const result = await this.customerOfferService.findAllCustomerOffers();
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

