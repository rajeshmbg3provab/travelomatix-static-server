import { Injectable } from "@nestjs/common";
import { BaseService } from "./base.service";
import { FlightAirlineList } from "../entity/flight-airlines.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";



@Injectable()
export class FlightAirlinesService extends BaseService<FlightAirlineList> {
    constructor(
        @InjectRepository(FlightAirlineList)
        private readonly airlinesRepository: Repository<FlightAirlineList>
        )
        {
            super(airlinesRepository);
        }
}