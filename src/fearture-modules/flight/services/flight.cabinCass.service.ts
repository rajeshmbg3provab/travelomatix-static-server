import { Injectable } from "@nestjs/common";


@Injectable()
export class FlightCabinClassService {
    findCabinClassList() {
        return [
            {
                "Name": "Economy"
            },
            {
                "Name": "Premium Economy"
            },
            {
                "Name": "Business"
            },
            {
                "Name": "First"
            }
        ];
    }
}