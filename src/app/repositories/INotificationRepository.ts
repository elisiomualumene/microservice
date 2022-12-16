import { Notification } from '../entities/notification';

abstract class INotificationRepository {
  abstract create(notification: Notification): Promise<void>;
}

export { INotificationRepository };
