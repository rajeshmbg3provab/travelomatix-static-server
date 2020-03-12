import { BaseEntity } from './base.entity';
import { Column } from 'typeorm';


export class FlightCabins extends BaseEntity {
    @Column() name: string
}