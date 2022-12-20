import { CancelNotificationUseCase } from './../../app/UseCases/CancelNotification/CancelNotificationUseCase';
import { Module } from '@nestjs/common';
import { NotificationsController } from './controllers/notifications.controller';
import { SendNotificationUseCase } from '../../app/UseCases/SendNotification/SendNotificationUsecase';
import { DatabaseModule } from '../database/database.module';
import { ReadNotificationUseCase } from '../../app/UseCases/ReadNotification/ReadNotificationUseCase';
import { UnreadNotificationUseCase } from '../../app/UseCases/UnreadNotification/UnreadNotificationUseCase';
import { CountNotificationUseCase } from '../../app/UseCases/CountNotification/CountNotificstionUseCase';
import { RecipientNotificationUseCase } from '../../app/UseCases/RecipienNotifications/RecipientNotificationUseCase';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [
    SendNotificationUseCase,
    CancelNotificationUseCase,
    ReadNotificationUseCase,
    UnreadNotificationUseCase,
    ReadNotificationUseCase,
    CountNotificationUseCase,
    ReadNotificationUseCase,
    RecipientNotificationUseCase,
  ],
})
export class httpModule {}
