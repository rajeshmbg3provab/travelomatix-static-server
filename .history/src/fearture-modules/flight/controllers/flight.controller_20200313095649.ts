import { Controller, Post, Query, Body } from '@nestjs/common';
import { Conf as conf } from 'src/config/conf';
import { BaseFlightController } from '../controllers';


import { CreateFlightCityDto } from '@database/dto';
import {
    FlightCabinsService,
    FlightAirlinesService,
    FlightCitiesService
} from '@database/services';

import { Like } from 'typeorm';

@Controller('flight')
export class FlightController extends BaseFlightController {

    constructor(
        private readonly cabinClassService: FlightCabinsService,
        private readonly airlinesService: FlightAirlinesService,
        private readonly citiesService: FlightCitiesService
    ) {
        super();
    }

    @Post('createCity')
    async create(@Body() createCityDto: CreateFlightCityDto): Promise<any> {
        return await this.citiesService.create(createCityDto);
    }

    @Post('airportList')
    async findAllAirport(@Query() code: any): Promise<any> {
        console.log(code)
        const where = [
            {airport_code: Like(`${code.AirportCode}%`) },
            { airport_name: Like(`${code.AirportCode}%`) },
        ]; // for OR operator
        // {
        //         AirportCode: Like(`${code.AirportCode}%`),
        //         AirportName: Like(`${code.AirportCode}%`),
        // }; // for AND operator
        const order = {priority: 'ASC'};
        const reslut = await this.citiesService.findAll({ where, order });
        return conf.res.ok(reslut);
    }

    @Post('cabinClassList')
    async findAllCabins(): Promise<any> {
        const order = {Name: 'ASC'}
        const result = await this.cabinClassService.findAll({order});
        return conf.res.ok(result); 
        //result ? conf.res.ok(result) : conf.res.noData(result);
    }

    @Post('airlineList')
    async findAirlineList(): Promise<any> {
        const result = await this.airlinesService.findAll();
        return conf.res.ok(result);
    }
}
