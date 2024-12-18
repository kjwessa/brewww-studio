import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "team" ADD COLUMN "exclude_from_sitemap" boolean DEFAULT false;
  ALTER TABLE "_team_v" ADD COLUMN "version_exclude_from_sitemap" boolean DEFAULT false;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "team" DROP COLUMN IF EXISTS "exclude_from_sitemap";
  ALTER TABLE "_team_v" DROP COLUMN IF EXISTS "version_exclude_from_sitemap";`)
}
