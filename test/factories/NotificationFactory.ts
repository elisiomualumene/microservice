import { Content } from '../../src/app/entities/content';
import {
  INotificationProps,
  Notification,
} from '../../src/app/entities/notification';

type IOverride = Partial<INotificationProps>;

export function makeNotification(override: IOverride = {}) {
  return new Notification({
    category: 'social',
    content: new Content('something is here'),
    recipientId: 'recipient-1',
    ...override,
  });
}
