import { Injectable } from '@nestjs/common';
import { CreateContractDto } from './dto/create-contract.dto';
import { UpdateContractDto } from './dto/update-contract.dto';
import { PrismaService } from 'src/dataBase/prisma.service';
import { Contract } from './entities/contract.entity';

@Injectable()
export class ContractService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateContractDto): Promise<void> {
    await this.prisma.contract.create({
      data: {
        ...data,
        end_date: new Date(data.end_date),
        start_date: new Date(data.start_date),
        termination_date: new Date(data.termination_date),
      },
    });
  }

  async findAll(user_email: string): Promise<Contract[]> {
    const contracts = await this.prisma.contract.findMany({
      where: {
        user_email,
      },
    });

    return contracts;
  }

  async update(id: string, data: UpdateContractDto): Promise<void> {
    await this.prisma.contract.update({
      where: {
        id,
      },
      data,
    });
  }

  async remove(id: string): Promise<void> {
    await this.prisma.contract.delete({
      where: {
        id,
      },
    });
  }
}
