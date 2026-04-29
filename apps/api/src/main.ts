import 'reflect-metadata';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);
  const cors = config.get<string>('CORS_ORIGIN', 'http://localhost:3000');
  app.enableCors({ origin: cors, credentials: true });
  const port = config.get<number>('API_PORT', 4000);
  const host = config.get<string>('API_HOST', '0.0.0.0');
  await app.listen(port, host);
  // eslint-disable-next-line no-console
  console.log(`API http://localhost:${port}/health`);
};

void bootstrap();
