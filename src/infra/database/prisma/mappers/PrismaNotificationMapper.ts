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
}
