import { Entity, Column } from "typeorm";
import { BaseEntity } from "./base.entity";

@Entity('domain_modules')
export class HomeModules extends BaseEntity {
    @Column({type: 'varchar', name: 'module_name'})
    ModuleName: string;
}