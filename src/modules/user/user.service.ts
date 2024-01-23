import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/dataBase/prisma.service';
import { User } from './entities/user.entity';
import { AppError } from 'src/errors/index.module';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateUserDto): Promise<User> {
    const userExists = await this.findOne(data.email);

    if (userExists) throw new AppError('User already registered');

    const user = await this.prisma.user.create({
      data: {
        ...data,
        password: await bcrypt.hash(data.password, 10),
      },
    });

    return {
      ...user,
      password: undefined,
    };
  }

  async findAll(): Promise<User[]> {
    const users = await this.prisma.user.findMany();
    return users;
  }

  async findOne(email: string): Promise<User> {
    const user = await this.prisma.user.findFirst({
      where: {
        email,
      },
    });

    return user;
  }

  async update(email: string, data: UpdateUserDto): Promise<void> {
    const userExists = await this.findOne(email);
    if (!userExists) throw new AppError('User not registered');

    if (data.email !== undefined) {
      const userEmail = await this.findOne(data.email);
      if (userEmail) throw new AppError('This email is already in use');
    }

    await this.prisma.user.update({
      where: {
        email,
      },
      data,
    });
  }

  async remove(email: string): Promise<void> {
    if (!email) return;

    const userExists = await this.findOne(email);
    if (!userExists) throw new AppError('User not registered');

    await this.prisma.user.delete({
      where: {
        email,
      },
    });
  }
}
