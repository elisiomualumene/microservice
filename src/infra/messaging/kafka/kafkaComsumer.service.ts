import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['rational-fawn-6961-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username:
            'cmF0aW9uYWwtZmF3bi02OTYxJJLQsAdXaSAu2EkS4kWsQagzoF0GGhLo02Pwuiw',
          password:
            'L0lvEAHcPn9aR-w85maA2b4n9WqWi1N_1eA-v5HsEITMaNfL8WRrAkd_P7nlp9pkvSRIaA==',
        },
        ssl: true,
      },
    });
  }
  async onModuleDestroy() {
    await this.close();
  }
}
