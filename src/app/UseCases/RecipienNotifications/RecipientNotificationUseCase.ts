import { Injectable } from '@nestjs/common';
import { Notification } from '../../../../src/app/entities/notification';
import { INotificationRepository } from '../../../../src/app/repositories/INotificationRepository';

interface IRequestProps {
  recipientId: string;
}

interface NotificationsProps {
  notifications: Notification[];
}

@Injectable()
export class RecipientNotificationUseCase {
  constructor(private NotificationRepository: INotificationRepository) {}
  async execute(request: IRequestProps): Promise<NotificationsProps> {
    const { recipientId } = request;

    const notifications =
      await this.NotificationRepository.NotificationsByRecipientId(recipientId);

    return { notifications };
  }
}
