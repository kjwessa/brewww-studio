import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pillars" ADD COLUMN "overview" varchar;
  ALTER TABLE "_pillars_v" ADD COLUMN "version_overview" varchar;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pillars" DROP COLUMN IF EXISTS "overview";
  ALTER TABLE "_pillars_v" DROP COLUMN IF EXISTS "version_overview";`)
}
