import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventoController } from './Controller/evento.controller';
import { Evento } from './Entity/evento.entity';
import { EventoService } from './Service/evento.service';


@Module({
  imports: [TypeOrmModule.forFeature([Evento])],
  providers: [EventoService],
  controllers: [EventoController],
})
export class EventoModule {}
