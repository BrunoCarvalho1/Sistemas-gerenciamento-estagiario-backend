import { PartialType } from '@nestjs/swagger';
import { CreateVacationDto } from './create-vacation.dto';

export class UpdateVacationDto extends PartialType(CreateVacationDto) {
  status?: 'approved' | 'reproved';
  end_date?: Date;
  start_date?: Date;
}
