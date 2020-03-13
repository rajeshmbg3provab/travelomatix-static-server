import { Entity, Column } from "typeorm";
import { BaseEntity } from "./base.entity";


@Entity()
export class FlightAirlineList extends BaseEntity {
    @Column('varchar') Name: string;
    @Column({type: 'varchar'}) Code: string;
    @Column({type: 'tinyint', name: 'has_specific_markup'})
    HasSpecificMarkup: number;
}