export class CreateVacationDto {
  contract_idd: string;
  end_date: Date;
  start_date: Date;
  status?: 'approved' | 'reproved';
}
