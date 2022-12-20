import { InMemoryNotificationRepository } from '../../../../test/repositories/NotificationRepository-InMemory';
import { ReadNotificationUseCase } from './ReadNotificationUseCase';
import { NotificationNotFound } from '../errors/NotificationNotFound';
import { makeNotification } from '../../../../test/factories/NotificationFactory';

describe('Read Notification', () => {
  it('should be able do read a notification', async () => {
    const NotificationRepository = new InMemoryNotificationRepository();

    const ReadNotification = new ReadNotificationUseCase(
      NotificationRepository,
    );

    const notification = makeNotification();

    await NotificationRepository.create(notification);

    await ReadNotification.execute({ notificationId: notification.id });

    expect(NotificationRepository.notifications[0].readAt).toEqual(
      expect.any(Date),
    );
  });

  it('should bo be able to read a non existing notification', async () => {
    const NotificationRepository = new InMemoryNotificationRepository();

    const ReadNotification = new ReadNotificationUseCase(
      NotificationRepository,
    );

    expect(() => {
      return ReadNotification.execute({
        notificationId: 'fake-notification-id',
      });
    }).rejects.toThrow(NotificationNotFound);
  });
});
