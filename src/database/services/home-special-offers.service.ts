import { Injectable } from "@nestjs/common";
import { BaseService } from "./base.service";
import { HomeSpecialOffers } from "../entity/home-special-offers.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class HomeSpecialOffersService extends BaseService<HomeSpecialOffers> {
    constructor(
        @InjectRepository(HomeSpecialOffers)
        private readonly spesialOffers: Repository<HomeSpecialOffers>
    ) {
        super(spesialOffers);
    }
}