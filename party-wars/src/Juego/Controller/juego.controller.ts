import { Controller, Get, Param } from '@nestjs/common';
import { Juego } from '../Entity/juego.entity';
import { Pregunta } from '../Entity/pregunta.entity';
import { JuegosService } from '../Service/juego.entity';


@Controller('juegos')
export class JuegosController {
    constructor(private readonly juegosService: JuegosService) { }

    @Get()
    findAll(): Promise<Juego[]> {
        return this.juegosService.findAll();
    }

    @Get(':id/preguntas')
    findPreguntasByJuegoId(@Param('id') id: number): Promise<Pregunta[]> {
        return this.juegosService.findPreguntas(id);
    }
}