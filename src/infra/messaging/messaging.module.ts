import { Module } from '@nestjs/common';
import { NotificationController } from './kafka/controllers/notification.controller';
import { KafkaConsumerService } from './kafka/kafkaComsumer.service';
import { DatabaseModule } from '../database/database.module';
import { SendNotificationUseCase } from '../../app/UseCases/SendNotification/SendNotificationUsecase';
@Module({
  imports: [DatabaseModule],
  controllers: [NotificationController],
  providers: [KafkaConsumerService, SendNotificationUseCase],
})
export class MessagingModule {}
