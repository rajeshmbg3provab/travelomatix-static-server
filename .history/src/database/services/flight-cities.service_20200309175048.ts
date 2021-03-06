import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { createFlightCityDto } from "../dto/create-flight-city.dto";
import { FlightCities } from "../entity/flight-cities.entity";


@Injectable()
export class FlightCitiesService {
    constructor(
        @InjectRepository(FlightCities)
        private readonly citiesRepo: Repository<FlightCities>
    ) {}

    async create(createCityDto: createFlightCityDto): Promise<any> {
        let city = new FlightCities();
        city = createCityDto;
        return await this.citiesRepo.save(city);
    }
}