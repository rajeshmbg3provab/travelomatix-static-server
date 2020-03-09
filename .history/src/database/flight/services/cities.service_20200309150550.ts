import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { City } from "../entity/city.entity";
import { createCityDto } from "../dto/create-city.dto";


@Injectable()
export class CitiesService {
    constructor(
        @InjectRepository(City)
        private readonly citiesRepo: Repository<City>
    ) {}

    async create(createCityDto: createCityDto): Promise<any> {
        let city = new City()
        city = createCityDto;
        return await this.citiesRepo.create(city);
    }
}