import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { SendNotificationUseCase } from '../../../../app/UseCases/SendNotification/SendNotificationUsecase';

interface ISendNotificationPayload {
  content: string;
  category: string;
  recipientId: string;
}

@Controller()
export class NotificationController {
  constructor(private sendNotification: SendNotificationUseCase) {}
  @EventPattern('send-notification')
  async handleSendNotification(
    @Payload() { category, content, recipientId }: ISendNotificationPayload,
  ) {
    await this.sendNotification.execute({
      category,
      content,
      recipientId,
    });
  }
}
