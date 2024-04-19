import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { PlanService } from './plan.service';
import { Plan } from './plan.entity';

@Controller('planes')
export class PlanController {
  constructor(private readonly planService: PlanService) {}

  @Get()
  findAll(): Promise<Plan[]> {
    return this.planService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Plan | undefined> {
    return this.planService.findOne(parseInt(id, 10));
  }

  @Post()
  create(@Body() planData: Partial<Plan>): Promise<Plan> {
    return this.planService.create(planData);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() planData: Partial<Plan>): Promise<Plan | undefined> {
    return this.planService.update(parseInt(id, 10), planData);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.planService.remove(parseInt(id, 10));
  }
}
