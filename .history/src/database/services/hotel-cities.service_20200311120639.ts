import { Injectable } from "@nestjs/common";
import { BaseService } from "./base.service";
import { HotelCities } from "../entity/hotel-cities.entity";

@Injectable()
export class HotelCitiesService extends BaseService<HotelCities> {
    
}