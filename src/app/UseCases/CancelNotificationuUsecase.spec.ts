import { randomUUID } from 'crypto';
import { InMemoryNotificationRepository } from '../../../test/repositories/NotificationRepository-InMemory';
import { Content } from '../entities/content';
import { Notification } from '../entities/notification';
import { CancelNotificationUseCase } from './CancelNotificationUseCase';
import { NotificationNotFound } from './errors/NotificationNotFound';

describe('Cancel Notification', () => {
  it('should be able do cancel a notification', async () => {
    const NotificationRepository = new InMemoryNotificationRepository();

    const CancelNotification = new CancelNotificationUseCase(
      NotificationRepository,
    );

    const notification = new Notification({
      category: 'social',
      content: new Content('something is here'),
      recipientId: randomUUID(),
    });

    await NotificationRepository.create(notification);

    await CancelNotification.execute({ notificationId: notification.id });

    expect(NotificationRepository.notifications[0].canceledAt).toEqual(
      expect.any(Date),
    );
  });

  it('should bo be able to cancel a non existing notification', async () => {
    const NotificationRepository = new InMemoryNotificationRepository();

    const CancelNotification = new CancelNotificationUseCase(
      NotificationRepository,
    );

    expect(() => {
      return CancelNotification.execute({
        notificationId: 'fake-notification-id',
      });
    }).rejects.toThrow(NotificationNotFound);
  });
});
