import { Notification } from 'src/app/entities/notification';

export class NotifcationViewModel {
  static toHttp(notification: Notification) {
    return {
      id: notification.id,
      category: notification.category,
      content: notification.content,
      recipientId: notification.recipientId,
    };
  }
}
