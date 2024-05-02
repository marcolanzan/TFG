import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { Juego } from '../Entity/juego.entity';
import { Pregunta } from '../Entity/pregunta.entity';
import { JuegosService } from '../Service/juego.service';

@Controller('juegos')
export class JuegosController {
    constructor(private readonly juegosService: JuegosService) { }

    @Get()
    findAll(): Promise<Juego[]> {
        return this.juegosService.findAll();
    }

  

    @Post()
    create(@Body() juego: Juego): Promise<Juego> {
        return this.juegosService.create(juego);
    }

   
    @Delete(':id')
    delete(@Param('id') id: number): Promise<void> {
        return this.juegosService.delete(id);
    }
}
