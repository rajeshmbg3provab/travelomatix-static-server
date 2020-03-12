import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity()
export class FlightCabins extends BaseEntity {
    @Column() name: string
}