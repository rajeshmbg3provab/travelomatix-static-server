import { Controller, Post, Query, Body } from '@nestjs/common';
import { Conf as conf } from 'src/config/conf';
import { BaseFlightController } from '../controllers';

import { CreateFlightCityDto } from 'src/database/dto/create-flight-city.dto';
import { FlightCitiesService } from 'src/database/services/flight-cities.service';
import { FlightCities } from 'src/database/entity/flight-cities.entity';
import { FlightCabinsService } from 'src/database/services/flight-cabins.service';
import { FlightAirlinesServices } from 'src/database/services/flight-airlines.service';


@Controller('flight')
export class FlightController extends BaseFlightController {

    constructor(
        private readonly cabinClassService: FlightCabinsService,
        private readonly airlinesService: FlightAirlinesServices,
        private readonly citiesService: FlightCitiesService
    ) {
        super()
    }

    @Post('createCity')
    async create(@Body() createCityDto: CreateFlightCityDto): Promise<any> {
        return await this.citiesService.create(createCityDto);
    }

    @Post('airportList')
    async findAllAirport(@Query() AirportCode: any): Promise<any> {
        const where: FlightCities = AirportCode || {status: true};
        const reslut = await this.citiesService.findAll({where});
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
// INSERT INTO `flight_airlines`(`Name`, `Code`) VALUES ()
}
