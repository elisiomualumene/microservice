import { PrismaService } from './prisma.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateNotificationBody } from './create-notification-body';

@Controller('notifications')
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  allNotification() {
    return this.prisma.notification.findMany();
  }

  @Post()
  async createNotification(@Body() body: CreateNotificationBody) {
    const { content, recipientId, category } = body;

    await this.prisma.notification.create({
      data: {
        id: randomUUID(),
        content,
        category,
        recipientId,
      },
    });
  }
}
