import { randomUUID } from 'crypto';
import { InMemoryNotificationRepository } from '../../../test/repositories/NotificationRepository-InMemory';
import { SendNotificationUseCase } from './SendNotificationUsecase';

describe('Send Notification', () => {
  it('Should be able to create a notification', async () => {
    const NotificationsRepositories = new InMemoryNotificationRepository();
    const sendNotification = new SendNotificationUseCase(
      NotificationsRepositories,
    );

    const { notification } = await sendNotification.execute({
      category: 'social',
      content: 'notificação',
      recipientId: randomUUID(),
    });

    expect(NotificationsRepositories.notifications).toHaveLength(1);
    expect(NotificationsRepositories.notifications[0]).toEqual(notification);
  });
});
