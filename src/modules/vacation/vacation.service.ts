import { Injectable } from '@nestjs/common';
import { CreateVacationDto } from './dto/create-vacation.dto';
import { UpdateVacationDto } from './dto/update-vacation.dto';
import { PrismaService } from 'src/dataBase/prisma.service';
import { Vacation } from './entities/vacation.entity';

@Injectable()
export class VacationService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateVacationDto): Promise<void> {
    await this.prisma.vacation.create({
      data: {
        ...data,
        end_date: new Date(data.end_date),
        start_date: new Date(data.start_date),
      },
    });
  }

  async findAll(contract_idd: string): Promise<Vacation[]> {
    const vacationsRequests = await this.prisma.vacation.findMany({
      where: {
        contract_idd,
      },
    });
    return vacationsRequests;
  }

  async update(id: string, data: UpdateVacationDto): Promise<void> {
    await this.prisma.vacation.update({
      where: {
        id,
      },
      data,
    });
  }
}
