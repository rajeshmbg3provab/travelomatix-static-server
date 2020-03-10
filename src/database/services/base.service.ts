import { BaseEntity } from "../entity/base.entity";
import { Repository } from "typeorm";

export class BaseService <T extends BaseEntity> {
    constructor(private readonly genericRepository: Repository<T>) {}
    async findAll(condition?: any){
        try {
            console.log(condition)
            return await this.genericRepository.find(condition);
        } catch (error) {
            return error.data;
        }
    }

    async create(createCityDto: any): Promise<any> {
        try {
            return await this.genericRepository.save(createCityDto);
        } catch (error) {
            return error.data;
        }
    }

    async update(id: string, entity: object): Promise<any> {
        try {
            const result = await this.genericRepository.update(id, entity);
            return result;
        } catch (error) {
            return error.data;
        }
    }

    async delete(id: string): Promise<any> {
        return await this.update(id, {status: 0});
    }
}