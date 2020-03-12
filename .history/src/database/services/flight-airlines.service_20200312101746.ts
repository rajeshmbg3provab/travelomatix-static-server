import { Injectable } from "@nestjs/common";
import { BaseService } from "./base.service";
import { FlightAirlines } from "../entity/flight-airlines.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";



@Injectable()
export class FlightAirlinesService extends BaseService<FlightAirlines> {
    constructor(
        @InjectRepository(FlightAirlines)
        private readonly airlinesRepository: Repository<FlightAirlines>
        )
        {
            super(airlinesRepository);
        }
}