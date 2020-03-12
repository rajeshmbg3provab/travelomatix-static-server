import { Entity, Column } from "typeorm";
import { BaseEntity } from "./base.entity";

@Entity()
export class HomeModules extends BaseEntity {
    @Column('varchar') ModuleName: string;
}