import { Entity, Column } from "typeorm";
import { BaseEntity } from "./base.entity";

@Entity()
export class BusCities extends BaseEntity {
    @Column('varchar') CityName: string;
    @Column('varchar') Origin: string;
    @Column('varchar') StationId: string;
    @Column('varchar') State: string;
}