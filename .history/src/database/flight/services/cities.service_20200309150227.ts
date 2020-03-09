import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { createCityDto } from "../dto/create-city.dto";
import { City } from "../entity/city.entity";


@Injectable()
export class CitiesService {
    constructor(
        @InjectRepository(City)
        private readonly citiesRepo: Repository<City>
    ) {}

    async create(createCityDto: createCityDto): Promise<any> {
        let city = new City()
        city = createCityDto;
        return await this.citiesRepo
    }
}