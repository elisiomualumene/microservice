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
    throw new Error('Method not implemented.');
  }
  async save(notification: Notification): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
