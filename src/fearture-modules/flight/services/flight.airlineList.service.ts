import { Injectable } from "@nestjs/common";

@Injectable()
export class FlightAirlineListService {
    findAirlineList(): any {
        return [
            {
                "Name": "AEROFLOT AIRLINE",
                "Code": "SU"
            },
            {
                "Name": "AIR ASIA",
                "Code": "I5"
            },
            {
                "Name": "AIR ASTANA",
                "Code": "KC"
            },
            {
                "Name": "AIR CANADA",
                "Code": "AC"
            },
            {
                "Name": "AIR CHINA",
                "Code": "CA"
            },
            {
                "Name": "AIR FRANCE",
                "Code": "AF"
            },
            {
                "Name": "AIR INDIA",
                "Code": "AI"
            },
            {
                "Name": "AIR INDIA EXPRESS",
                "Code": "IX"
            }
        ]
    }
}
