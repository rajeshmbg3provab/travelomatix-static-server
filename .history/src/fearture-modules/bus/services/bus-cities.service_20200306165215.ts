import { Injectable } from '@nestjs/common';

@Injectable()
export class BusCitiesService {
    findAll(): any {
        return [
            {
                "city_name": "Raniganj, West Bengal",
                "Origin": "2205",
                "StationId": "848",
                "State": "West Bengal"
            },
            {
                "city_name": "Bengaluru",
                "Origin": "2216",
                "StationId": "4292",
                "State": "Karnataka"
            },
            {
                "city_name": "Islampur, West Bengal",
                "Origin": "2909",
                "StationId": "1223",
                "State": "West Bengal"
            }
        ];
    }
}
