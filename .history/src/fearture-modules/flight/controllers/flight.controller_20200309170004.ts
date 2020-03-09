import { Controller, Get, Param, Post, Query, Body } from '@nestjs/common';
import { Conf as conf } from 'src/config/conf';
import { BaseFlightController } from '../controllers';
import {
    FlightAirportsService,
    FlightCabinClassService,
    FlightAirlineListService,
} from '../services';
import { createCityDto } from 'src/database/dto/create-city.dto';
import { FlightCitiesService } from 'src/database/services/flight-cities.service';
import { FlightDealsService } from '@module/home/services';


@Controller('flight')
export class FlightController extends BaseFlightController {

    constructor(
        private readonly airportsService: FlightAirportsService,
        private readonly cabinClassService: FlightCabinClassService,
        private readonly airlineService: FlightAirlineListService,
        private readonly flightCitiesService: FlightCitiesService
    ) {
        super()
    }

    @Post('createCity')
    async create(@Body() createCityDto: createCityDto): Promise<any> {
        return await this.citiesService.create(createCityDto);
    }

    @Post('airportList')
    async findAirportsList(@Query('city') city: string): Promise<any> {
        const reslut = await this.airportsService.findAirportsList();
        return conf.res.ok(reslut);
    }

    @Post('cabinClassList')
    async findCabinClassList(): Promise<any> {
        const result = await this.cabinClassService.findCabinClassList();
        return conf.res.ok(result);
    }

    @Post('airlineList')
    async findAirlineList(): Promise<any> {
        const result = await this.airlineService.findAirlineList();
        return conf.res.ok(result);
    }

}
