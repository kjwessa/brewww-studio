import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   ALTER TABLE "team" ADD COLUMN "link_website" varchar;
  ALTER TABLE "team" ADD COLUMN "link_linkedin" varchar;
  ALTER TABLE "team" ADD COLUMN "link_instagram" varchar;
  ALTER TABLE "team" ADD COLUMN "link_facebook" varchar;
  ALTER TABLE "_team_v" ADD COLUMN "version_link_website" varchar;
  ALTER TABLE "_team_v" ADD COLUMN "version_link_linkedin" varchar;
  ALTER TABLE "_team_v" ADD COLUMN "version_link_instagram" varchar;
  ALTER TABLE "_team_v" ADD COLUMN "version_link_facebook" varchar;`)
}

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   ALTER TABLE "team" DROP COLUMN IF EXISTS "link_website";
  ALTER TABLE "team" DROP COLUMN IF EXISTS "link_linkedin";
  ALTER TABLE "team" DROP COLUMN IF EXISTS "link_instagram";
  ALTER TABLE "team" DROP COLUMN IF EXISTS "link_facebook";
  ALTER TABLE "_team_v" DROP COLUMN IF EXISTS "version_link_website";
  ALTER TABLE "_team_v" DROP COLUMN IF EXISTS "version_link_linkedin";
  ALTER TABLE "_team_v" DROP COLUMN IF EXISTS "version_link_instagram";
  ALTER TABLE "_team_v" DROP COLUMN IF EXISTS "version_link_facebook";`)
}
