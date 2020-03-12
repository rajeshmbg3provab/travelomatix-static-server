import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { BaseService } from "./base.service";
import { FlightCabinClass } from "../entity/flight-cabin-classes.entity";


@Injectable()
export class FlightCabinsService extends BaseService<FlightCabinClass> {
    constructor(
        @InjectRepository(FlightCabinClass)
        private readonly cabinRepository: Repository<FlightCabinClass>
        ) 
    {
        super(cabinRepository)
    }
}