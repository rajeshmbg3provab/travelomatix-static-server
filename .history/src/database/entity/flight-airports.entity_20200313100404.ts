import { Entity, Column } from "typeorm";
import { BaseEntity } from "./base.entity";

@Entity()
export class FlightAirportList extends BaseEntity {
    @Column({name: 'airport_code'})
    AirportCode: string;

    @Column({name: 'airport_name'})
    AirportName: string;

    @Column({name: 'airport_city'})
    AirportCity: string;

    @Column({name: 'priority'})
    Priority: string;

    @Column({name: 'sub_priority'})
    SubPriority: string;

}
