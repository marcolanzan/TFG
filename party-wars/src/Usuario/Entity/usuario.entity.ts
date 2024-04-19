// Usuario.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from "typeorm";
import { Sala } from "./../../Sala/Entity/sala.entity";
import { Evento } from "../../Evento/Entity/evento.entity";
import {Buffer} from 'buffer';
@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  nome: string;

  @Column({ length: 255 })
  email: string;

  @Column({ length: 255 })
  password: string;

  @Column({ length: 255 })
  plan: string;

  @Column({ length: 255 })
  descripcionPersonal: string;

  @Column("bytea", { nullable: true })
  imagen: Buffer;

  @ManyToMany(() => Sala)
  salas: Sala[];

  @ManyToMany(() => Evento)
  eventos: Evento[];
}
