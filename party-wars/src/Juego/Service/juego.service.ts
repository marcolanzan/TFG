

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Juego } from '../Entity/juego.entity';
import { Pregunta } from '../Entity/pregunta.entity';

@Injectable()
export class JuegosService {
    constructor(
        @InjectRepository(Juego) private readonly juegosRepository: Repository<Juego>,
        @InjectRepository(Pregunta) private readonly preguntasRepository: Repository<Pregunta>,
    ) {}

    async findAll(): Promise<Juego[]> {
        console.log('Listando TODOS los juegos.');
        return this.juegosRepository.find();
    }

   
    async create(juego: Juego): Promise<Juego> {
        return this.juegosRepository.save(juego);
    }
   
    

    async delete(id: number): Promise<void> {
        await this.juegosRepository.delete(id);
    }
}
