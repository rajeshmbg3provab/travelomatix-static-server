import { Injectable } from '@nestjs/common';

@Injectable()
export class FlightService {
    findAllFlight() {
        return [
            'blr',
            'gau',
            'chn',
            'mum',
            'del',
        ]
    }
}
