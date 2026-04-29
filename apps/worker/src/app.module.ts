import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bullmq';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { parseRedis } from './redis.config';

/**
 * Queues registered for later workers. No @Processor here so nothing connects
 * to Redis until you add consumers.
 */
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: ['.env', '../../.env'] }),
    BullModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        connection: parseRedis(config.get<string>('REDIS_URL', 'redis://127.0.0.1:6379')),
      }),
    }),
    BullModule.registerQueue({ name: 'inventory' }, { name: 'shipping' }),
  ],
})
export class AppModule {}
