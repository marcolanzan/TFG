import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './Entity/usuario.entity';
import { UsuarioService } from './Service/usuario.service';
import { UsuarioController } from './Controller/usuario.controller';
@Module({
  imports: [TypeOrmModule.forFeature([Usuario])],
  providers: [UsuarioService],
  controllers: [UsuarioController],
})
export class UsuarioModule {}
