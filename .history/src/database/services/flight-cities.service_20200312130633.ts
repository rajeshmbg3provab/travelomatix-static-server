import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { FlightAirportList } from "../entity/flight-cities.entity";
import { BaseService } from "./base.service";


@Injectable()
export class FlightCitiesService extends BaseService<FlightAirportList> {
    constructor(
        @InjectRepository(FlightAirportList)
        private readonly citiesRepository: Repository<FlightAirportList>
    ) {
        super(citiesRepository)
    }
}