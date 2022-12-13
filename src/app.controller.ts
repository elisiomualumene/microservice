import { PrismaService } from './prisma.service';
import { Controller, Get, Post } from '@nestjs/common';
import { randomUUID } from 'crypto';

@Controller('notifications')
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  allNotification() {
    return this.prisma.notification.findMany();
  }

  @Post()
  async createNotification() {
    await this.prisma.notification.create({
      data: {
        id: randomUUID(),
        content: 'something',
        category: 'friends',
        recipientId: randomUUID(),
      },
    });
  }
}
