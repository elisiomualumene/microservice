import { Notification } from '../../src/app/entities/notification';
import { INotificationRepository } from '../../src/app/repositories/INotificationRepository';

class InMemoryNotificationRepository implements INotificationRepository {
  public notifications: Notification[] = [];

  async create(notification: Notification): Promise<void> {
    this.notifications.push(notification);
  }
}

export { InMemoryNotificationRepository };
