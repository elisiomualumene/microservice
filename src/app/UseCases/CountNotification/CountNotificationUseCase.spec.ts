import { InMemoryNotificationRepository } from '../../../../test/repositories/NotificationRepository-InMemory';
import { CountNotificationUseCase } from './CountNotificstionUseCase';
import { makeNotification } from '../../../../test/factories/NotificationFactory';

describe('Count Notification', () => {
  it('should be able do count notifications', async () => {
    const NotificationRepository = new InMemoryNotificationRepository();

    const CountNotification = new CountNotificationUseCase(
      NotificationRepository,
    );

    await NotificationRepository.create(
      makeNotification({ recipientId: 'recipient-1' }),
    );

    await NotificationRepository.create(
      makeNotification({ recipientId: 'recipient-1' }),
    );

    const { count } = await CountNotification.execute({
      recipientId: 'recipient-1',
    });

    expect(count).toEqual(2);
  });
});
