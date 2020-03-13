import { Entity, Column } from "typeorm";
import { BaseEntity } from "./base.entity";



@Entity('hotel_city_list') 
export class HotelCities extends BaseEntity {
    // @Column('varchar') Origin: string; 
    
    @Column({ type: 'varchar', name: 'city_name'})
    CityName: string;
    
    @Column({type: 'varchar', name: 'state'})
    State: string;

    @Column({type: 'varchar', name: 'country_name'})
    CountryName: string;
}