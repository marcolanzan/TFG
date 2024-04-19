// Pregunta.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from "typeorm";
import { Juego } from "./juego.entity";

@Entity()
export class Pregunta {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 255 })
    pregunta: string;

    @ManyToMany(() => Juego, juego => juego.preguntas)
    juegos: Juego[];
}
