import { Injectable } from '@nestjs/common';
import { INotificationRepository } from '../../repositories/INotificationRepository';
import { NotificationNotFound } from '../errors/NotificationNotFound';

interface IReadNotificationRequest {
  notificationId: string;
}

type IReadNotificationResponse = void;

@Injectable()
export class ReadNotificationUseCase {
  constructor(private NotificationRepository: INotificationRepository) {}
  async execute(
    request: IReadNotificationRequest,
  ): Promise<IReadNotificationResponse> {
    const { notificationId } = request;

    const notification = await this.NotificationRepository.findById(
      notificationId,
    );

    if (!notification) {
      throw new NotificationNotFound();
    }

    notification.read();

    await this.NotificationRepository.save(notification);
  }
}
