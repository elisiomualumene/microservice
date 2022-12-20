import { Injectable } from '@nestjs/common';
import { INotificationRepository } from '../../repositories/INotificationRepository';
import { NotificationNotFound } from '../errors/NotificationNotFound';

interface ICancelNotificationRequest {
  notificationId: string;
}

type ICancelNotificationResponse = void;

@Injectable()
export class CancelNotificationUseCase {
  constructor(private NotificationRepository: INotificationRepository) {}
  async execute(
    request: ICancelNotificationRequest,
  ): Promise<ICancelNotificationResponse> {
    const { notificationId } = request;

    const notification = await this.NotificationRepository.findById(
      notificationId,
    );

    if (!notification) {
      throw new NotificationNotFound();
    }

    notification.cancel();

    await this.NotificationRepository.save(notification);
  }
}
