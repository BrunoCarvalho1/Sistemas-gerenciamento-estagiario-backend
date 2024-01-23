import { Module } from '@nestjs/common';
import { VacationService } from './vacation.service';
import { VacationController } from './vacation.controller';
import { PrismaService } from 'src/dataBase/prisma.service';

@Module({
  controllers: [VacationController],
  providers: [VacationService, PrismaService],
})
export class VacationModule {}
