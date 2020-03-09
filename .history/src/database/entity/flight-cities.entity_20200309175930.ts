import { Entity, Column, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./base.entity";

@Entity()
export class FlightCities extends BaseEntity {
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
