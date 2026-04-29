import 'reflect-metadata';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const bootstrap = async () => {
  const app = await NestFactory.createApplicationContext(AppModule);
  const config = app.get(ConfigService);
  // eslint-disable-next-line no-console
  console.log(
    'Worker started. REDIS_URL:',
    config.get<string>('REDIS_URL', 'redis://127.0.0.1:6379'),
  );
};

void bootstrap().catch((err) => {
  // eslint-disable-next-line no-console
  console.error('Worker failed to start', err);
  process.exit(0);
});
