import { BaseEntity } from "../entity/base.entity";
import { Repository, DeepPartial } from "typeorm";
import { Conf } from "src/config/conf";
import { FlightCities } from "../entity/flight-cities.entity";
import { createFlightCityDto } from "../dto/create-flight-city.dto";

export class BaseService<T extends BaseEntity> {
    constructor(private readonly genericRepository: Repository<T>) {}
    async findAll(condition?: any){
        try {
            return await this.genericRepository.find(condition)
        } catch (error) {
            return Conf.res.failure(error.data)
        }
    }

    async create(createCityDto: createFlightCityDto): Promise<any> {
        let city = new FlightCities();
        city = createCityDto;
        return await this.genericRepository.save(city);
    }
}