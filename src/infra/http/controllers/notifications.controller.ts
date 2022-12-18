import { Body, Controller, Post } from '@nestjs/common';
import { CreateNotificationBody } from '../dtos/create-notification-body';
import { SendNotificationUseCase } from '../../../app/UseCases/SendNotificationUsecase';
import { NotifcationViewModel } from '../views/NotificationViewModel';

@Controller('notifications')
export class NotificationsController {
  constructor(private SendNotification: SendNotificationUseCase) {}

  @Post()
  async createNotification(@Body() body: CreateNotificationBody) {
    const { content, recipientId, category } = body;

    const { notification } = await this.SendNotification.execute({
      content,
      recipientId,
      category,
    });

    const raw = NotifcationViewModel.toHttp(notification);

    return {
      notification: raw,
    };
  }
}
