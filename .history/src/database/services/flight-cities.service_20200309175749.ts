import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { createFlightCityDto } from "../dto/create-flight-city.dto";
import { FlightCities } from "../entity/flight-cities.entity";
import { BaseService } from "./base.service";


@Injectable()
export class FlightCitiesService extends BaseService<FlightCities> {
    constructor(
        @InjectRepository(FlightCities)
        private readonly citiesRepository: Repository<FlightCities>
    ) {
        super(citiesRepository)
    }

    async create(createCityDto: createFlightCityDto): Promise<any> {
        let city = new FlightCities();
        city = createCityDto;
        return await this.citiesRepository.save(city);
    }
}