import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   ALTER TABLE "work" DROP COLUMN IF EXISTS "featured";
  ALTER TABLE "_work_v" DROP COLUMN IF EXISTS "version_featured";`)
}

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   ALTER TABLE "work" ADD COLUMN "featured" boolean;
  ALTER TABLE "_work_v" ADD COLUMN "version_featured" boolean;`)
}
