import { PrimaryGeneratedColumn, Column, PrimaryColumn } from 'typeorm';

export class BaseEntity {
    @PrimaryGeneratedColumn() id: number;
    // @Column({default: Date}) createdat: Date;
    // @Column({default: Date}) modifiedat: Date;
    @Column({default: true}) status: boolean;
}
