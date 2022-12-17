import { Injectable } from '@nestjs/common';
import { PrismaService } from './../prisma.service';
import { Notification } from '@app/entities/notification';
import { INotificationRepository } from '@app/repositories/INotificationRepository';

@Injectable()
export class PrismaNotificationRepository implements INotificationRepository {
  constructor(private prisma: PrismaService) {}
  async create(notification: Notification): Promise<void> {
    await this.prisma.notification.create({
      data: {
        category: notification.category,
        content: notification.content.value,
        recipientId: notification.recipientId,
        CreatedAt: notification.createdAt,
        readAt: notification.readAt,
        id: notification.id,
      },
    });
  }
}
