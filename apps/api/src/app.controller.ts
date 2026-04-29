import { Controller, Get } from '@nestjs/common';
import { DatabaseService } from './infra/database.service';

@Controller()
export class AppController {
  constructor(private readonly database: DatabaseService) {}

  @Get('health')
  health() {
    return {
      ok: true,
      service: 'lilo-wms-api',
      database: this.database.isConfigured ? 'configured' : 'not_configured',
    };
  }
}
