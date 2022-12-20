import { InMemoryNotificationRepository } from '../../../../test/repositories/NotificationRepository-InMemory';
import { UnreadNotificationUseCase } from './UnreadNotificationUseCase';
import { NotificationNotFound } from '../errors/NotificationNotFound';
import { makeNotification } from '../../../../test/factories/NotificationFactory';

describe('Unread Notification', () => {
  it('should be able to unread a notification', async () => {
    const NotificationRepository = new InMemoryNotificationRepository();

    const UnreadNotification = new UnreadNotificationUseCase(
      NotificationRepository,
    );

    const notification = makeNotification({ readAt: new Date() });

    await NotificationRepository.create(notification);

    await UnreadNotification.execute({ notificationId: notification.id });

    expect(NotificationRepository.notifications[0].readAt).toBeNull();
  });

  it('should bo be able to unread a non existing notification', async () => {
    const NotificationRepository = new InMemoryNotificationRepository();

    const UnreadNotification = new UnreadNotificationUseCase(
      NotificationRepository,
    );

    expect(() => {
      return UnreadNotification.execute({
        notificationId: 'fake-notification-id',
      });
    }).rejects.toThrow(NotificationNotFound);
  });
});
