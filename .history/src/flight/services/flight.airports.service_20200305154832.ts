import { Injectable } from '@nestjs/common';

@Injectable()
export class FlightAirportsService {
    findAirportsList() {
        return [
            'blr',
            'gau',
            'chn',
            'mum',
            'del',
        ]
    }
}
