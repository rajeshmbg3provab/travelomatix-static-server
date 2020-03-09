import { Injectable } from '@nestjs/common';

@Injectable()
export class FlightService {
    findAirportList() {
        return [
            'blr',
            'gau',
            'chn',
            'mum',
            'del',
        ]
    }
}
