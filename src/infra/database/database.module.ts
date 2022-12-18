import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { INotificationRepository } from '../../../src/app/repositories/INotificationRepository';
import { PrismaNotificationRepository } from './prisma/repositories/PrismaNotificationRepository';
@Module({
  providers: [
    PrismaService,
    {
      provide: INotificationRepository,
      useClass: PrismaNotificationRepository,
    },
  ],
  exports: [INotificationRepository],
})
export class DatabaseModule {}
