import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "projects" ADD COLUMN "archive_highlights" varchar;
  ALTER TABLE "_projects_v" ADD COLUMN "version_archive_highlights" varchar;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "projects" DROP COLUMN IF EXISTS "archive_highlights";
  ALTER TABLE "_projects_v" DROP COLUMN IF EXISTS "version_archive_highlights";`)
}
