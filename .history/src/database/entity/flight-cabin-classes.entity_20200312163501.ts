import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity()
export class FlightCabinClasses extends BaseEntity {
    @Column() name: string
}