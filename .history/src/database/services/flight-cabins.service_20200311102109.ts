import { BaseService } from "./base.service";
import { FlightCabins } from "../entity/flight-cabins.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";



export class FlightCabinsService extends BaseService<FlightCabins> {
    constructor(
        @InjectRepository(FlightCabins)
        private readonly cabinRepository: Repository<FlightCabins>
        ) 
    {
        super(cabinRepository)
    }
}