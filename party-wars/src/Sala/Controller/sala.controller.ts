import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { Sala } from '../Entity/sala.entity';
import { SalaService } from '../Service/sala.service';


@Controller('salas')
export class SalaController {
  constructor(private readonly salaService: SalaService) {}

  @Get()
  findAll(): Promise<Sala[]> {
    return this.salaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Sala | undefined> {
    return this.salaService.findOne(parseInt(id, 10));
  }

  @Post()
  create(@Body() salaData: Partial<Sala>): Promise<Sala> {
    return this.salaService.create(salaData);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() salaData: Partial<Sala>): Promise<Sala | undefined> {
    return this.salaService.update(parseInt(id, 10), salaData);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.salaService.remove(parseInt(id, 10));
  }
}
