import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "projects" ADD COLUMN "exclude_from_sitemap" boolean DEFAULT false;
  ALTER TABLE "_projects_v" ADD COLUMN "version_exclude_from_sitemap" boolean DEFAULT false;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "projects" DROP COLUMN IF EXISTS "exclude_from_sitemap";
  ALTER TABLE "_projects_v" DROP COLUMN IF EXISTS "version_exclude_from_sitemap";`)
}
