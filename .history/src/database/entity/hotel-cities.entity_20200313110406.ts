import { Entity, Column } from "typeorm";
import { BaseEntity } from "./base.entity";



@Entity('hotel_city_list') 
export class HotelCities extends BaseEntity {
    @Column('varchar') Origin: string; 
    @Column('varchar') CityName: string;
    @Column('varchar') CountryName: string;
}