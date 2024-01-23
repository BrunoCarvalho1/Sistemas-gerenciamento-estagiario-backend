import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ContractService } from './contract.service';
import { CreateContractDto } from './dto/create-contract.dto';
import { UpdateContractDto } from './dto/update-contract.dto';
import { Contract } from './entities/contract.entity';

@Controller('contract')
export class ContractController {
  constructor(private readonly contractService: ContractService) {}

  @Post()
  async create(@Body() data: CreateContractDto): Promise<void> {
    return await this.contractService.create(data);
  }

  @Get(':user_email')
  findAll(@Param('user_email') user_email: string): Promise<Contract[]> {
    return this.contractService.findAll(user_email);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() data: UpdateContractDto,
  ): Promise<void> {
    return this.contractService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.contractService.remove(id);
  }
}
