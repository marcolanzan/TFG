import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Evento } from './evento.entity';

@Injectable()
export class EventoService {
  constructor(
    @InjectRepository(Evento)
    private readonly eventoRepository: Repository<Evento>,
  ) {}

  async findAll(): Promise<Evento[]> {
    return await this.eventoRepository.find();
  }

  async findOne(id: number): Promise<Evento | undefined> {
    return await this.eventoRepository.findOne(id);
  }

  async create(evento: Evento): Promise<Evento> {
    return await this.eventoRepository.save(evento);
  }

  async update(id: number, eventData: Partial<Evento>): Promise<Evento | undefined> {
    const evento = await this.findOne(id);
    if (!evento) {
      return undefined;
    }
    Object.assign(evento, eventData);
    return await this.eventoRepository.save(evento);
  }

  async remove(id: number): Promise<void> {
    await this.eventoRepository.delete(id);
  }
}
