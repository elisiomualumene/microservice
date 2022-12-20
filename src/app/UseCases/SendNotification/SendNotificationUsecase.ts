import { Injectable } from '@nestjs/common';
import { Content } from '../../entities/content';
import { Notification } from '../../entities/notification';
import { INotificationRepository } from '../../repositories/INotificationRepository';

interface ISendNotificationRequest {
  recipientId: string;
  content: string;
  category: string;
}

interface ISendNotificationResponse {
  notification: Notification;
}

@Injectable()
export class SendNotificationUseCase {
  constructor(private NotificationRepository: INotificationRepository) {}
  async execute(
    request: ISendNotificationRequest,
  ): Promise<ISendNotificationResponse> {
    const { recipientId, content, category } = request;

    const notification = new Notification({
      recipientId,
      content: new Content(content),
      category,
    });

    await this.NotificationRepository.create(notification);

    return {
      notification,
    };
  }
}
