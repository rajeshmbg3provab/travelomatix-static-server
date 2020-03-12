import { Injectable } from "@nestjs/common";
import { BaseService } from "./base.service";
import { BusCities } from "../entity/bus-cities.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class BusCitiesService extends BaseService<BusCities> {
    constructor(
        @InjectRepository(BusCities)
        private readonly citiesService: Repository<BusCities>
    ) {
        super(citiesService);
    }
}