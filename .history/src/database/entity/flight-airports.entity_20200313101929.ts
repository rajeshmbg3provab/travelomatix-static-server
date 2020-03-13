import { Entity, Column } from "typeorm";
import { BaseEntity } from "./base.entity";

@Entity()
export class FlightAirportList extends BaseEntity {
    @Column({type: 'varchar', name: 'airport_code'})
    AirportCode: string;

    @Column({type: 'varchar', name: 'airport_name'})
    AirportName: string;

    @Column({type: 'varchar', name: 'airport_city'})
    AirportCity: string;

    @Column({type: 'varchar', name: 'priority'})
    Priority: string;

    @Column({type: 'varchar', name: 'sub_priority'})
    SubPriority: string;

}
