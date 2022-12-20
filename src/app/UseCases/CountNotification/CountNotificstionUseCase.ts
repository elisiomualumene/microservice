import { Injectable } from '@nestjs/common';
import { INotificationRepository } from '../../repositories/INotificationRepository';

interface ICountNotificationRequest {
  recipientId: string;
}

interface ICountNotificationResponse {
  count: number;
}

@Injectable()
export class CountNotificationUseCase {
  constructor(private NotificationRepository: INotificationRepository) {}
  async execute(
    request: ICountNotificationRequest,
  ): Promise<ICountNotificationResponse> {
    const { recipientId } = request;

    const count = await this.NotificationRepository.countByRecipientId(
      recipientId,
    );

    return { count };
  }
}
