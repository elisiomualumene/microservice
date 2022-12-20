import { InMemoryNotificationRepository } from '../../../../test/repositories/NotificationRepository-InMemory';
import { RecipientNotificationUseCase } from './RecipientNotificationUseCase';
import { makeNotification } from '../../../../test/factories/NotificationFactory';

describe('Get Notification', () => {
  it('should be able do Get notifications', async () => {
    const NotificationRepository = new InMemoryNotificationRepository();

    const RecipientNotifications = new RecipientNotificationUseCase(
      NotificationRepository,
    );

    await NotificationRepository.create(
      makeNotification({ recipientId: 'recipient-1' }),
    );
    await NotificationRepository.create(
      makeNotification({ recipientId: 'recipient-1' }),
    );

    const { notifications } = await RecipientNotifications.execute({
      recipientId: 'recipient-1',
    });

    expect(notifications).toHaveLength(2);
    expect(notifications).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ recipientId: 'recipient-1' }),
        expect.objectContaining({ recipientId: 'recipient-1' }),
      ]),
    );
  });
});
