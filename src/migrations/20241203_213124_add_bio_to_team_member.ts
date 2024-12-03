import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   ALTER TABLE "team" ADD COLUMN "bio" jsonb;
  ALTER TABLE "_team_v" ADD COLUMN "version_bio" jsonb;`)
}

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   ALTER TABLE "team" DROP COLUMN IF EXISTS "bio";
  ALTER TABLE "_team_v" DROP COLUMN IF EXISTS "version_bio";`)
}
