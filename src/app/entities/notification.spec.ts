import { randomUUID } from 'crypto';
import { Notification } from './notification';
import { Content } from './content';

describe('Notification', () => {
  it('Should be able to create a notification', () => {
    const data = {
      category: 'friends',
      content: new Content('notificação de teste'),
      recipientId: randomUUID(),
    };

    const notification = new Notification(data);

    expect(notification).toBeTruthy();
  });
});
