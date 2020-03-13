import { Entity, Column } from "typeorm";
import { BaseEntity } from "./base.entity";
@Entity('bus_city_list')
export class BusCities extends BaseEntity {
    @Column({type: 'varchar', name: 'name'})
    CityName: string;
    
    // @Column({type: 'varchar', name: 'origin'})
    // Origin: string;
    
    @Column({type: 'smallint', name: 'station_id'})
    StationId: number;
    
    @Column({type: 'varchar', name: 'state'})
    State: string;
}