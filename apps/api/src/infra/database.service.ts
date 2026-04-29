import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createDb, type Database } from '@lilo-wms/db';
import type { Sql } from 'postgres';

@Injectable()
export class DatabaseService implements OnModuleDestroy {
  readonly db: Database | null;
  private readonly client: Sql | null;

  constructor(private readonly config: ConfigService) {
    const url = this.config.get<string>('DATABASE_URL');
    if (!url) {
      this.db = null;
      this.client = null;
      return;
    }
    const { db, client } = createDb(url);
    this.db = db;
    this.client = client;
  }

  get isConfigured() {
    return this.db !== null;
  }

  async onModuleDestroy() {
    if (this.client) {
      await this.client.end({ timeout: 5 });
    }
  }
}
