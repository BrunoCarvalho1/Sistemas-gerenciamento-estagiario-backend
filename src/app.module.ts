import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { ContractModule } from './modules/contract/contract.module';
import { VacationModule } from './modules/vacation/vacation.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({ imports: [UserModule, ContractModule, VacationModule, AuthModule] })
export class AppModule {}
