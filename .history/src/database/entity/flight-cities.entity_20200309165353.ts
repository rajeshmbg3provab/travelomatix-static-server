    import { Entity, Column, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class FlightCities {
    @PrimaryGeneratedColumn()
    id?: string;
    @Column()
    AirportCode: string;

    @Column()
    AirportName: string;

    @Column()
    AirportCity: string;

    @Column()
    Priority: string;

    @Column()
    SubPriority: string;
}
