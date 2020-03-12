import { Entity, Column } from "typeorm";
import { BaseEntity } from "./base.entity";

@Entity()
export class FlightAirportList extends BaseEntity {
    @Column()
    AirportCode: string;

    @Column()
    AirportName: string;

    @Column()
    AirportCity: string;

    @Column()
    Priority: string;

    @Column()
    SubPriority: string;
}
