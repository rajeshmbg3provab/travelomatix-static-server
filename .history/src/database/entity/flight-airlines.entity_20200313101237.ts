import { Entity, Column } from "typeorm";
import { BaseEntity } from "./base.entity";


@Entity()
export class FlightAirlineList extends BaseEntity {
    @Column('varchar') Name: string;
    @Column('varchar') Code: string;
    @Column('tinyint') HasSpecificMarkup: number;
}