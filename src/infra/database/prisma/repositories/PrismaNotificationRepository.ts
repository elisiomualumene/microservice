import { Injectable } from '@nestjs/common';
import { PrismaService } from './../prisma.service';
import { Notification } from '../../../../app/entities/notification';
import { INotificationRepository } from '../../../../app/repositories/INotificationRepository';
import { PrismaNotificationMapper } from '../mappers/PrismaNotificationMapper';

@Injectable()
export class PrismaNotificationRepository implements INotificationRepository {
  constructor(private prisma: PrismaService) {}
  async create(notification: Notification): Promise<void> {
    const raw = PrismaNotificationMapper.toPrisma(notification);

    await this.prisma.notification.create({
      data: raw,
    });
  }
  async findById(notificationId: string): Promise<Notification> {
    const notification = await this.prisma.notification.findUnique({
      where: { id: notificationId },
    });

    if (!notification) {
      return null;
    }

    return PrismaNotificationMapper.toDomain(notification);
  }
  async save(notification: Notification): Promise<void> {
    const raw = PrismaNotificationMapper.toPrisma(notification);

    await this.prisma.notification.update({
      where: { id: raw.id },
      data: raw,
    });
  }

  async NotificationsByRecipientId(
    recipientId: string,
  ): Promise<Notification[]> {
    const notification = await this.prisma.notification.findMany({
      where: { recipientId },
    });

    return notification.map(PrismaNotificationMapper.toDomain);
  }

  async countByRecipientId(recipientId: string): Promise<number> {
    const count = await this.prisma.notification.count({
      where: { recipientId },
    });

    return count;
  }
}
