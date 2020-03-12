import { Injectable } from "@nestjs/common";
import { BaseService } from "./base.service";
import { HomeRecommendations } from "../entity/home-recomends.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class HomeRecommendationsService extends BaseService<HomeRecommendations> {
    constructor(
        @InjectRepository(HomeRecommendations)
        private recommendationsRepository: Repository<HomeRecommendations>
    ) {
        super(recommendationsRepository);
    }
}