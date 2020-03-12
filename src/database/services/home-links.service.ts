import { Injectable } from "@nestjs/common";
import { BaseService } from "./base.service";
import { HomeLinks } from "../entity/home-links.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class HomeLinksService extends BaseService<HomeLinks> {
    constructor(
        @InjectRepository(HomeLinks)
        private readonly linksRepository: Repository<HomeLinks>
    ){
        super(linksRepository);
    }
}