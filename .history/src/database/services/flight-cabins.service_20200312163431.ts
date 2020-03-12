import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { BaseService } from "./base.service";
import { FlightCabins } from "../entity/flight-cabin-classes.entity";


@Injectable()
export class FlightCabinsService extends BaseService<FlightCabins> {
    constructor(
        @InjectRepository(FlightCabins)
        private readonly cabinRepository: Repository<FlightCabins>
        ) 
    {
        super(cabinRepository)
    }
}