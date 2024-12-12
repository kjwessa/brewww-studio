import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "locations" DROP COLUMN IF EXISTS "hero_title";
  ALTER TABLE "_locations_v" DROP COLUMN IF EXISTS "version_hero_title";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "locations" ADD COLUMN "hero_title" varchar;
  ALTER TABLE "_locations_v" ADD COLUMN "version_hero_title" varchar;`)
}
