// Evento.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from "typeorm";
import { Usuario } from "../../Usuario/Entity/usuario.entity";

@Entity()
export class Evento {
  @PrimaryGeneratedColumn()
  id: number; 

  @Column({ length: 255 })
  nombreSala: string;
  
  @Column()
  edadMinEvento: number;

  @Column()
  edadMaxEvento: number;

  @Column({ length: 255 })
  localizacion: string;

  @Column({ length: 255 })
  tematicaEvento: string;

  @Column({ length: 255 })
  descripcionEnvento: string;

  @Column({ length: 255 })
  localizacionEvento: string;

  @Column()
  cantidadAsistentes: number;
  
  @Column()
  fechaEvento: Date;

  @Column({ length: 255 })
  nombreEmpEvento: string;

  @ManyToMany(() => Usuario)
  @JoinTable({
    name: "usuario_evento",
    joinColumns: [{ name: "evento_id", referencedColumnName: "id" }],
    inverseJoinColumns: [{ name: "usuario_id", referencedColumnName: "id" }],
  })
  usuarios: Usuario[];
}
