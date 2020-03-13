import { Entity, Column } from "typeorm";
import { BaseEntity } from "./base.entity";

@Entity('domain_why_choose_us')
export class HomeWhyUs extends BaseEntity {
    @Column({type: "varchar"})
    Title: string;
    @Column({type: "varchar"})
    Icon: string;
    @Column({type: "varchar"})
    Status: string;


}