import { Injectable } from "@nestjs/common";
import { BaseEntity } from "../entity/base.entity";
import { HomeBestDeals } from "../entity/home-best-deals.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class HomeBestDealsService extends BaseEntity<HomeBestDeals> {
    constructor(
        @InjectRepository(HomeBestDeals)
        private readonly bestDealsRepositoy: Repository<HomeBestDeals>
    ) {
        super(bestDealsRepositoy);
    }
}