import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() data: CreateUserDto): Promise<User> {
    return await this.userService.create(data);
  }

  @Get()
  async findAll(): Promise<User[]> {
    return await this.userService.findAll();
  }

  @Get(':email')
  async findOne(@Param('email') email: string): Promise<User> {
    return await this.userService.findOne(email);
  }

  @Patch(':email')
  async update(@Param('email') email: string, @Body() data: UpdateUserDto) {
    return await this.userService.update(email, data);
  }

  @Delete(':email')
  async remove(@Param('email') email: string): Promise<void> {
    return await this.userService.remove(email);
  }
}
