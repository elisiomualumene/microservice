import { Notification } from '../entities/notification';

abstract class INotificationRepository {
  abstract create(notification: Notification): Promise<void>;
  abstract findById(notificationId: string): Promise<Notification | null>;
  abstract save(notification: Notification): Promise<void>;
}

export { INotificationRepository };
