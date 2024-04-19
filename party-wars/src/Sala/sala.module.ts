import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sala } from './Entity/sala.entity';
import { SalaService } from './Service/sala.service';
import { SalaController } from './Controller/sala.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Sala])],
  providers: [SalaService],
  controllers: [SalaController],
})
export class SalaModule {}
