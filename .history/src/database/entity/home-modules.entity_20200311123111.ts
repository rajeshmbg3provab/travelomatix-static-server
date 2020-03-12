import { Entity, BaseEntity, Column } from "typeorm";

@Entity()
export class HomeModules extends BaseEntity {
    @Column('varchar') ModuleName: string;
}