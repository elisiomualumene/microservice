import { CancelNotificationUseCase } from './../../../app/UseCases/CancelNotification/CancelNotificationUseCase';
import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateNotificationBody } from '../dtos/create-notification-body';
import { SendNotificationUseCase } from '../../../app/UseCases/SendNotification/SendNotificationUsecase';
import { NotifcationViewModel } from '../views/NotificationViewModel';
import { ReadNotificationUseCase } from '../../../app/UseCases/ReadNotification/ReadNotificationUseCase';
import { UnreadNotificationUseCase } from '../../../app/UseCases/UnreadNotification/UnreadNotificationUseCase';
import { CountNotificationUseCase } from '../../../app/UseCases/CountNotification/CountNotificstionUseCase';
import { RecipientNotificationUseCase } from '../../../app/UseCases/RecipienNotifications/RecipientNotificationUseCase';

@Controller('notifications')
export class NotificationsController {
  constructor(
    private SendNotification: SendNotificationUseCase,
    private CancelNotification: CancelNotificationUseCase,
    private ReadNotification: ReadNotificationUseCase,
    private UnreadNotification: UnreadNotificationUseCase,
    private CountNotification: CountNotificationUseCase,
    private RecipientNotification: RecipientNotificationUseCase,
  ) {}

  @Patch(':id/cancel')
  async cancel(@Param('id') id: string) {
    return this.CancelNotification.execute({ notificationId: id });
  }

  @Get('count/from/:recipientId')
  async CountNotifications(@Param('recipientId') recipientId: string) {
    const { count } = await this.CountNotification.execute({ recipientId });

    return count;
  }

  @Get('from/:recipientId')
  async RecipientNotifications(@Param('recipientId') recipientId: string) {
    const { notifications } = await this.RecipientNotification.execute({
      recipientId,
    });

    return { notifications: notifications.map(NotifcationViewModel.toHttp) };
  }

  @Patch(':id/read')
  async read(@Param('id') id: string) {
    return this.ReadNotification.execute({ notificationId: id });
  }

  @Patch(':id/unread')
  async unread(@Param('id') id: string) {
    return this.UnreadNotification.execute({ notificationId: id });
  }

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
