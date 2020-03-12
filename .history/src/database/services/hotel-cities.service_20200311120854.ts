import { Injectable } from "@nestjs/common";
import { BaseService } from "./base.service";
import { HotelCities } from "../entity/hotel-cities.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class HotelCitiesService extends BaseService<HotelCities> {
    constructor(
        @InjectRepository(HotelCities) citiesRepository: Repository<HotelCities>
    ) {
        super(citiesRepository);
    }
}