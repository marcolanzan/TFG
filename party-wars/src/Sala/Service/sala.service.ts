import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sala } from '../Entity/sala.entity';

@Injectable()
export class SalaService {
  constructor(
    @InjectRepository(Sala)
    private readonly salaRepository: Repository<Sala>,
  ) {}

  async findAll(): Promise<Sala[]> {
    return await this.salaRepository.find();
  }

  async findOne(id: number): Promise<Sala | undefined> {
    return await this.salaRepository.findOne( {where: { id }});
  }

  async create(salaData: Partial<Sala>): Promise<Sala> {
    const sala = this.salaRepository.create(salaData);
    return await this.salaRepository.save(sala);
  }

  async update(id: number, salaData: Partial<Sala>): Promise<Sala | undefined> {
    const sala = await this.findOne(id);
    if (!sala) {
      return undefined;
    }
    Object.assign(sala, salaData);
    return await this.salaRepository.save(sala);
  }

  async remove(id: number): Promise<void> {
    await this.salaRepository.delete(id);
  }
}
