import { BaseEntity } from './base.entity';
import { Column } from 'typeorm';


export class FlightCabin extends BaseEntity {
    @Column() name: string
}