import { Injectable } from "@nestjs/common";
import { BaseEntity } from "../entity/base.entity";
import { HomeBestDeals } from "../entity/home-best-deals.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { BaseService } from "./base.service";

@Injectable()
export class HomeBestDealsService extends BaseService<HomeBestDeals> {
    constructor(
        @InjectRepository(HomeBestDeals)
        private readonly bestDealsRepositoy: Repository<HomeBestDeals>
    ) {
        super(bestDealsRepositoy);
    }
}