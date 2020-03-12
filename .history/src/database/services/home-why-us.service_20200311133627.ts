import { Injectable } from "@nestjs/common";
import { BaseService } from "./base.service";
import { HomeWhyUs } from "../entity/home-why-us.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { ReportBase } from "istanbul-lib-report";
import { Repository } from "typeorm";

@Injectable()
export class HomeWhyUsService extends BaseService<HomeWhyUs> {
    constructor(
        @InjectRepository(HomeWhyUs)
        private readonly whyUsRepository: Repository<HomeWhyUs>
    )
    {
        super(whyUsRepository);
    }
}