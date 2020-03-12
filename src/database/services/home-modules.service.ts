import { Injectable } from "@nestjs/common";
import { BaseService } from "./base.service";
import { HomeModules } from "../entity/home-modules.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class HomeModulesService extends BaseService<HomeModules> {
    constructor(
        @InjectRepository(HomeModules)
        private readonly modulesRepository: Repository<HomeModules>
    ) {
        super(modulesRepository);
    }
}