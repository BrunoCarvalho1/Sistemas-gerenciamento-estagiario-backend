export class CreateContractDto {
  user_email: string;
  end_date: Date;
  start_date: Date;
  termination_date?: Date;
  type: 'graduation' | 'postgraduate';
}
