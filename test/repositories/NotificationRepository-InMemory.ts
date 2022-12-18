import { Notification } from '../../src/app/entities/notification';
import { INotificationRepository } from '../../src/app/repositories/INotificationRepository';

class InMemoryNotificationRepository implements INotificationRepository {
  public notifications: Notification[] = [];

  async create(notification: Notification): Promise<void> {
    this.notifications.push(notification);
  }

  async findById(notificationId: string): Promise<Notification> {
    const notifications = this.notifications.find(
      (item) => item.id === notificationId,
    );

    if (!notifications) {
      return null;
    }

    return notifications;
  }
  async save(notification: Notification): Promise<void> {
    const notificationIndex = this.notifications.findIndex(
      (item) => item.id === notification.id,
    );

    if (notificationIndex >= 0) {
      this.notifications[notificationIndex] = notification;
    }
  }
}

export { InMemoryNotificationRepository };
