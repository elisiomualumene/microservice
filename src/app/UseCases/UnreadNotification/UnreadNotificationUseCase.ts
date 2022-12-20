import { Injectable } from '@nestjs/common';
import { INotificationRepository } from '../../repositories/INotificationRepository';
import { NotificationNotFound } from '../errors/NotificationNotFound';

interface IUnreadNotificationRequest {
  notificationId: string;
}

type IUnreadNotificationResponse = void;

@Injectable()
export class UnreadNotificationUseCase {
  constructor(private NotificationRepository: INotificationRepository) {}
  async execute(
    request: IUnreadNotificationRequest,
  ): Promise<IUnreadNotificationResponse> {
    const { notificationId } = request;

    const notification = await this.NotificationRepository.findById(
      notificationId,
    );

    if (!notification) {
      throw new NotificationNotFound();
    }

    notification.unread();

    await this.NotificationRepository.save(notification);
  }
}
