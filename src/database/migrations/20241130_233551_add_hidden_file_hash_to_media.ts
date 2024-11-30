import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   ALTER TABLE "media" ADD COLUMN "file_hash" varchar;
  CREATE UNIQUE INDEX IF NOT EXISTS "media_file_hash_idx" ON "media" USING btree ("file_hash");`)
}

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   DROP INDEX IF EXISTS "media_file_hash_idx";
  ALTER TABLE "media" DROP COLUMN IF EXISTS "file_hash";`)
}
