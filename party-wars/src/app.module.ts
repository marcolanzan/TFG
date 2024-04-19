import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { HttpModule, HttpService } from '@nestjs/axios';
import { Client } from 'pg';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { enviroments } from './enviroments';
import config from './config';
import { EventoModule } from './Evento/evento.module';
import { SalaModule } from './Sala/sala.module';
import { PlanModule } from './Plan/plan.module';
import { UsuarioModule } from './Usuario/usuario.module';
import { JuegosModule } from './Juego/juego.module';


process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
const client = new Client({
  user: 'postgres',
  host: 'demo-postgres.ca3gssmimisb.us-east-1.rds.amazonaws.com',
  database: 'sampleDB',
  password: 'LUCASLUCAS',
  port: 5432,
  ssl: true,
});
client.connect();


@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: enviroments[process.env.NODE_ENV] || '.env',
      load: [config],
      isGlobal: true,
      validationSchema: Joi.object({
        API_KEY: Joi.number().required(),
        DATABASE_NAME: Joi.string().required(),
        DATABASE_PORT: Joi.number().required(),
      }),
    }),
    HttpModule,
    DatabaseModule,
    EventoModule,
    SalaModule,
    PlanModule,
    UsuarioModule,
    JuegosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}






