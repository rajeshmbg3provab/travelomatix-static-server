import { Injectable } from '@nestjs/common';

@Injectable()
export class FlightAirportsService {
    findAirportsList() {
        return [
            {
                "AirportCode": "DUB",
                "AirportName": "Dublin Airport",
                "AirportCity": "Dublin",
                "Priority": "1",
                "SubPriority": "0"
            },
            {
                "AirportCode": "DBN",
                "AirportName": "Dublin Municipal Airport",
                "AirportCity": "Dublin",
                "Priority": "2",
                "SubPriority": "1"
            },
            {
                "AirportCode": "PSK",
                "AirportName": "New River Valley Airport",
                "AirportCity": "Dublin",
                "Priority": "3",
                "SubPriority": "1"
            },
            {
                "AirportCode": "DXB",
                "AirportName": "Dubai International Airport",
                "AirportCity": "Dubai",
                "Priority": "1",
                "SubPriority": "0"
            },
            {
                "AirportCode": "XNB",
                "AirportName": "United Arab Emirates - Bus Station",
                "AirportCity": "Dubai",
                "Priority": "2",
                "SubPriority": "1"
            },
            {
                "AirportCode": "DBO",
                "AirportName": "Dubbo Airport",
                "AirportCity": "Dubbo",
                "Priority": "99",
                "SubPriority": null
            },
            {
                "AirportCode": "DUJ",
                "AirportName": "Jefferson County Airport",
                "AirportCity": "Dubois",
                "Priority": "99",
                "SubPriority": null
            },
            {
                "AirportCode": "DBS",
                "AirportName": "Dubois Airport",
                "AirportCity": "Dubois",
                "Priority": "99",
                "SubPriority": null
            },
            {
                "AirportCode": "DBV",
                "AirportName": "Dubrovnik Airport",
                "AirportCity": "Dubrovnik",
                "Priority": "99",
                "SubPriority": null
            },
            {
                "AirportCode": "DBQ",
                "AirportName": "Dubuque Municipal Airport",
                "AirportCity": "Dubuque",
                "Priority": "99",
                "SubPriority": null
            }
        ]
    }
}
