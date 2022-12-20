import { InMemoryNotificationRepository } from '../../../../test/repositories/NotificationRepository-InMemory';
import { CancelNotificationUseCase } from './CancelNotificationUseCase';
import { NotificationNotFound } from '../errors/NotificationNotFound';
import { makeNotification } from '../../../../test/factories/NotificationFactory';

describe('Cancel Notification', () => {
  it('should be able do cancel a notification', async () => {
    const NotificationRepository = new InMemoryNotificationRepository();

    const CancelNotification = new CancelNotificationUseCase(
      NotificationRepository,
    );

    const notification = makeNotification();

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
