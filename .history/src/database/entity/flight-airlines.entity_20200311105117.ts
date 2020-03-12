import { Entity, Column } from "typeorm";
import { BaseEntity } from "./base.entity";


@Entity()
export class FlightAirlines extends BaseEntity {
    @Column('varchar') Name: string;  
    @Column('varchar') Code: string; 
}