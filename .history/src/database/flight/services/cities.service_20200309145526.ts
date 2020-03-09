import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Cities } from "../entity/cities.entity";
import { Repository } from "typeorm";


@Injectable()
export class CitiesService {
    constructor(
        @InjectRepository(Cities)
        private readonly citiesRepo: Repository<Cities>
    ) {}

    async create(): Promise<any> {
        const city = new Cities()
        return
    }
}