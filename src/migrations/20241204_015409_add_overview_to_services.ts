import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   ALTER TABLE "services" ADD COLUMN "overview" jsonb;
  ALTER TABLE "_services_v" ADD COLUMN "version_overview" jsonb;`)
}

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   ALTER TABLE "services" DROP COLUMN IF EXISTS "overview";
  ALTER TABLE "_services_v" DROP COLUMN IF EXISTS "version_overview";`)
}
