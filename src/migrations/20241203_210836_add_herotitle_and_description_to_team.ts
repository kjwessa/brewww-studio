import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   ALTER TABLE "team" ADD COLUMN "hero_title" varchar;
  ALTER TABLE "team" ADD COLUMN "hero_description" jsonb;
  ALTER TABLE "_team_v" ADD COLUMN "version_hero_title" varchar;
  ALTER TABLE "_team_v" ADD COLUMN "version_hero_description" jsonb;`)
}

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   ALTER TABLE "team" DROP COLUMN IF EXISTS "hero_title";
  ALTER TABLE "team" DROP COLUMN IF EXISTS "hero_description";
  ALTER TABLE "_team_v" DROP COLUMN IF EXISTS "version_hero_title";
  ALTER TABLE "_team_v" DROP COLUMN IF EXISTS "version_hero_description";`)
}
