import { Entity, Column } from "typeorm";

@Entity()
export class Cities {
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
