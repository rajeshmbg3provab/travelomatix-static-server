import { Entity, Column } from "typeorm";
import { BaseEntity } from "./base.entity";
@Entity({name: 'bus_cities'})
export class BusCities extends BaseEntity {
    @Column({type: 'varchar', name: 'name'})
    CityName: string;
    
    // @Column({type: 'varchar', name: 'origin'})
    // Origin: string;
    
    @Column({type: 'varchar', name: 'station_id'})
    StationId: string;
    
    @Column({type: 'varchar', name: 'state'})
    State: string;
}