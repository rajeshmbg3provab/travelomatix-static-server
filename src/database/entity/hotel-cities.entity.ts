import { Entity, Column } from "typeorm";
import { BaseEntity } from "./base.entity";



@Entity() 
export class HotelCities extends BaseEntity {
    @Column('varchar') Origin: string; 
    @Column('varchar') CityName: string;
    @Column('varchar') CountryName: string;
}