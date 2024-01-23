import { PartialType } from '@nestjs/swagger';
import { CreateContractDto } from './create-contract.dto';

export class UpdateContractDto extends PartialType(CreateContractDto) {
  end_date?: Date;
  termination_date?: Date;
  type?: 'graduation' | 'postgraduate';
}
