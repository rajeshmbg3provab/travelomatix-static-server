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
import { OriginalSource } from 'webpack-sources';




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
        const where = [
            { AirportCode: Like(`${code.AirportCode}%`) },
            { AirportName: Like(`${code.AirportCode}%`) },
        ]; // for OR operator
        const orderBy = {
            Priority: 'ASC'
        };
        // {
        //         AirportCode: Like(`${code.AirportCode}%`),
        //         AirportName: Like(`${code.AirportCode}%`),
        // }; // for AND operator
        console.log({ where, orderBy });
        const reslut = await this.citiesService.findAll({ where },);
        return conf.res.ok(reslut);
    }

    @Post('cabinClassList')
    async findAllCabins(): Promise<any> {
        const result = await this.cabinClassService.findAll();
        return conf.res.ok(result);
    }

    @Post('airlineList')
    async findAirlineList(): Promise<any> {
        const result = await this.airlinesService.findAll();
        return conf.res.ok(result);
    }
}
