import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity()
export class FlightCabinClass extends BaseEntity {
    @Column() Name: string
}