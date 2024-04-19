import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PlanController } from "./Controller/plan.controller";
import { Plan } from "./Entity/plan.entity";
import { PlanService } from "./Service/plan.service";

@Module({
  imports: [TypeOrmModule.forFeature([Plan])],
  providers: [PlanService],
  controllers: [PlanController],
})
export class PlanModule {}
