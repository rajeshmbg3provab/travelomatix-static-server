import { Injectable } from "@nestjs/common";
import { BaseService } from "./base.service";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { HomePackages } from "../entity/home-packages.entity";

@Injectable()
export class HomePackagesService extends BaseService<HomePackages> {
    constructor(
        @InjectRepository(HomePackages)
        private readonly packagesRepository: Repository<HomePackages>
    ){
        super(packagesRepository);
    }
}