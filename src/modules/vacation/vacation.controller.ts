import { Controller, Get, Post, Body, Patch, Param } from '@nestjs/common';
import { VacationService } from './vacation.service';
import { CreateVacationDto } from './dto/create-vacation.dto';
import { UpdateVacationDto } from './dto/update-vacation.dto';
import { Vacation } from './entities/vacation.entity';

@Controller('vacation')
export class VacationController {
  constructor(private readonly vacationService: VacationService) {}

  @Post()
  create(@Body() createVacationDto: CreateVacationDto): Promise<void> {
    return this.vacationService.create(createVacationDto);
  }

  @Get(':contract_idd')
  async findAll(
    @Param('contract_idd') contract_id: string,
  ): Promise<Vacation[]> {
    return await this.vacationService.findAll(contract_id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() data: UpdateVacationDto,
  ): Promise<void> {
    return this.vacationService.update(id, data);
  }
}
