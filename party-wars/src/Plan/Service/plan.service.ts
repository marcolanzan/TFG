import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Plan } from './plan.entity';

@Injectable()
export class PlanService {
  constructor(
    @InjectRepository(Plan)
    private readonly planRepository: Repository<Plan>,
  ) {}

  async findAll(): Promise<Plan[]> {
    return await this.planRepository.find();
  }

  async findOne(id: number): Promise<Plan | undefined> {
    return await this.planRepository.findOne(id);
  }

  async create(planData: Partial<Plan>): Promise<Plan> {
    const plan = this.planRepository.create(planData);
    return await this.planRepository.save(plan);
  }

  async update(id: number, planData: Partial<Plan>): Promise<Plan | undefined> {
    const plan = await this.findOne(id);
    if (!plan) {
      return undefined;
    }
    Object.assign(plan, planData);
    return await this.planRepository.save(plan);
  }

  async remove(id: number): Promise<void> {
    await this.planRepository.delete(id);
  }
}
