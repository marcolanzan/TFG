import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JuegosController } from './Controller/juego.controller';
import { Juego } from './Entity/juego.entity';
import { Pregunta } from './Entity/pregunta.entity';
import { JuegosService } from './Service/juego.entity';


@Module({
  imports: [
    TypeOrmModule.forFeature([Juego, Pregunta]),
  ],
  controllers: [JuegosController],
  providers: [JuegosService],
})
export class JuegosModule {}