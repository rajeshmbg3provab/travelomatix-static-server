import { Injectable } from '@nestjs/common';

@Injectable()
export class FlightService {
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
