import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Cities } from "../entity/cities.entity";
import { Repository } from "typeorm";
import { createCityDto } from "../dto/create-city.dto";


@Injectable()
export class CitiesService {
    constructor(
        @InjectRepository(Cities)
        private readonly citiesRepo: Repository<Cities>
    ) {}

    async create(createCityDto: createCityDto): Promise<any> {
        const city = new Cities()
        return
    }
}