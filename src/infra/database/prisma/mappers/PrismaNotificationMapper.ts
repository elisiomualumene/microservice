import { Notification as RawNotification } from '@prisma/client';
import { Content } from '../../../../../src/app/entities/content';
import { Notification } from '../../../../app/entities/notification';

export class PrismaNotificationMapper {
  static toPrisma(notification: Notification) {
    return {
      category: notification.category,
      content: notification.content.value,
      recipientId: notification.recipientId,
      CreatedAt: notification.createdAt,
      readAt: notification.readAt,
      id: notification.id,
    };
  }

  static toDomain(raw: RawNotification): Notification {
    return new Notification(
      {
        category: raw.category,
        content: new Content(raw.content),
        recipientId: raw.recipientId,
        readAt: raw.readAt,
        createdAt: raw.CreatedAt,
        canceledAt: raw.canceledAt,
      },
      raw.id,
    );
  }
}
