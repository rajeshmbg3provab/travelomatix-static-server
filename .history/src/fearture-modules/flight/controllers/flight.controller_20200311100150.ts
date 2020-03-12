import { Controller, Post, Query, Body } from '@nestjs/common';
import { Conf as conf } from 'src/config/conf';
import { BaseFlightController } from '../controllers';
import {
    FlightAirportsService,
    FlightCabinClassService,
    FlightAirlineListService,
} from '../services';
import { CreateFlightCityDto } from 'src/database/dto/create-flight-city.dto';
import { FlightCitiesService } from 'src/database/services/flight-cities.service';
import { FlightCities } from 'src/database/entity/flight-cities.entity';


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
    async create(@Body() createCityDto: CreateFlightCityDto): Promise<any> {
        return await this.flightCitiesService.create(createCityDto);
    }

    @Post('airportList')
    async findAll(@Query() AirportCode: any): Promise<any> {
        const where: FlightCities = AirportCode || {status: true};
        const reslut = await this.flightCitiesService.findAll({where});
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
