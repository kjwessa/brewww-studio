import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "projects" ALTER COLUMN "exclude_from_sitemap" SET DEFAULT true;
  ALTER TABLE "_projects_v" ALTER COLUMN "version_exclude_from_sitemap" SET DEFAULT true;
  ALTER TABLE "services" ADD COLUMN "exclude_from_sitemap" boolean DEFAULT true;
  ALTER TABLE "_services_v" ADD COLUMN "version_exclude_from_sitemap" boolean DEFAULT true;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "projects" ALTER COLUMN "exclude_from_sitemap" SET DEFAULT false;
  ALTER TABLE "_projects_v" ALTER COLUMN "version_exclude_from_sitemap" SET DEFAULT false;
  ALTER TABLE "services" DROP COLUMN IF EXISTS "exclude_from_sitemap";
  ALTER TABLE "_services_v" DROP COLUMN IF EXISTS "version_exclude_from_sitemap";`)
}
