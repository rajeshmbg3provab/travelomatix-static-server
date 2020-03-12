import { Entity, Column } from "typeorm";
import { BaseEntity } from "./base.entity";


@Entity()
export class FlightAirlineList extends BaseEntity {
    @Column('varchar') name: string;  
    @Column('varchar') code: string; 
}