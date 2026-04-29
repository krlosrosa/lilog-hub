import { pgTable, text } from 'drizzle-orm/pg-core';

/** Marker table so Drizzle has a non-empty schema; replace with real models later. */
export const _schemaMarker = pgTable('_schema_marker', {
  id: text('id').notNull().primaryKey(),
});
