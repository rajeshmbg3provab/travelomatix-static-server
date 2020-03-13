import { Entity, Column } from "typeorm";
import { BaseEntity } from "./base.entity";

@Entity('domain_social_links')
export class HomeLinks extends BaseEntity {
    @Column({type: "varchar", name: "social"})
    Social: string;

    @Column({type: "varchar", name: "url_link"})
    Url: string;
}