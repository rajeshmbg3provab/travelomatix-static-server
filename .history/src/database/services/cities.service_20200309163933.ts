import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { createCityDto } from "../dto/create-city.dto";
import { Cities } from "../entity/cities.entity";


@Injectable()
export class CitiesService {
    constructor(
        @InjectRepository(Cities)
        private readonly citiesRepo: Repository<Cities>
    ) {}

    async create(createCityDto: createCityDto): Promise<any> {
        let city = new Cities();
        city = createCityDto;
        return await this.citiesRepo.create(city);
    }
}