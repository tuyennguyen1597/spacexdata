import { Entity, Column, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { Expose, Type } from 'class-transformer';

@Entity({ name: 'ship' })
export class Ship {
    @Expose({ name: 'ship_id' })
    @PrimaryColumn()
    id: string;

    @Expose({ name: 'ship_type' })
    @Column({ name: 'type' })
    type: string;

    @Expose({ name: 'weight_kg' })
    @Column({ name: 'weight', nullable: true })
    weight: number;

    @Expose({ name: 'home_port' })
    @Column({ name: 'home_port' })
    homePort: string;

    @Expose({ name: 'ship_name' })
    @Column({ name: 'name' })
    name: string;

    @Column({ name: 'class', nullable: true })
    class: string;
}
