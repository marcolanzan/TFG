import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Juego } from '../Entity/juego.entity';
import { Pregunta } from '../Entity/pregunta.entity';

@Injectable()
export class JuegosService {
    constructor(
        @InjectRepository(Juego) private juegosRepository: Repository<Juego>,
        @InjectRepository(Pregunta) private preguntasRepository: Repository<Pregunta>,
    ) {}

    async findAll(): Promise<Juego[]> {
        console.log('Listando TODOS los juegos.');
        return this.juegosRepository.find();
    }

    async findPreguntas(id: number): Promise<Pregunta[]> {
        return this.preguntasRepository.find({
        })
    }
}