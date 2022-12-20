import { Module } from '@nestjs/common';
import { DatabaseModule } from './infra/database/database.module';
import { httpModule } from './infra/http/http.module';
import { MessagingModule } from './infra/messaging/messaging.module';

@Module({
  imports: [httpModule, DatabaseModule, MessagingModule],
})
export class AppModule {}
