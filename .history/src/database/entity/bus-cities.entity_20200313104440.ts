import { Entity, Column } from "typeorm";
import { BaseEntity } from "./base.entity";

@Entity({name: 'bus_city_list'})
export class BusCities extends BaseEntity {
    @Column({type: 'varchar', name: 'name'})
    CityName: string;
    
    // @Column({type: 'varchar', name: 'origin'})
    // Origin: string;
    
    @Column({type: 'int', name: 'station_id'})
    StationId: number;
    
    @Column({type: 'varchar', name: 'state'})
    State: string;
}