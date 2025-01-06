import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('Event')
export class Event {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    eventName: string;

    @Column()
    eventDate: Date;

    @Column()
    eventTime: string;

    @Column()
    location: string;

    @Column('text')
    eventDescription: string;

    @Column({ nullable: true })
    eventPhoto: string; // This could be a URL or file path
}