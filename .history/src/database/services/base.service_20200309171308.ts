import { BaseEntity } from "../entity/base.entity";
import { Repository } from "typeorm";
import { Conf } from "src/config/conf";

export class BaseService<T extends BaseEntity> {
    constructor(private readonly genericRepository: Repository<T>) {}
    async findAll(condition?: any){
        try {
            return await this.genericRepository.find(condition)
        } catch (error) {
            return Conf.res.failure(error.data)
        }
    }
}