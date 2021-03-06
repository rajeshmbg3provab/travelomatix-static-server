import { Controller, Get, Param, Post, Query, Body } from '@nestjs/common';
import { Conf as conf } from 'src/config/conf';
import { BaseFlightController } from '../controllers';
import {
    FlightAirportsService,
    FlightCabinClassService,
    FlightAirlineListService,
} from '../services';
import { createCityDto } from 'src/database/flight/dto/create-city.dto';
import { CitiesService } from 'src/database/flight/services/cities.service';


@Controller('flight')
export class FlightController extends BaseFlightController {

    constructor(
        private readonly airportsService: FlightAirportsService,
        private readonly cabinClassService: FlightCabinClassService,
        private readonly airlineService: FlightAirlineListService,
        private readonly citiesService: CitiesService
    ) {
        super()
    }

    @Post()
    async create(@Body() createCityDto: createCityDto): Promise<any> {
        return this.citiesService.create(createCityDto);
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
