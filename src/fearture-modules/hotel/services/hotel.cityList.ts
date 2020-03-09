import { Injectable } from "@nestjs/common";

@Injectable()
export class HotelCityListService {
    findCityList(): any {
        return [
            {
                "Origin": "37321",
                "CityName": "Delhi",
                "CountryName": "Canada"
            },
            {
                "Origin": "42427",
                "CityName": "Delhi",
                "CountryName": "United States of America"
            }
        ];
    }
} 