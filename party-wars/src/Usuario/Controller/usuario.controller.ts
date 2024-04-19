import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { Usuario } from './usuario.entity';

@Controller('usuarios')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Get()
  findAll(): Promise<Usuario[]> {
    return this.usuarioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Usuario | undefined> {
    return this.usuarioService.findOne(parseInt(id, 10));
  }

  @Post()
  create(@Body() usuarioData: Partial<Usuario>): Promise<Usuario> {
    return this.usuarioService.create(usuarioData);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() usuarioData: Partial<Usuario>): Promise<Usuario | undefined> {
    return this.usuarioService.update(parseInt(id, 10), usuarioData);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.usuarioService.remove(parseInt(id, 10));
  }
}
