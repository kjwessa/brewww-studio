import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "brands" ADD COLUMN "snippet" varchar;
  ALTER TABLE "_brands_v" ADD COLUMN "version_snippet" varchar;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "brands" DROP COLUMN IF EXISTS "snippet";
  ALTER TABLE "_brands_v" DROP COLUMN IF EXISTS "version_snippet";`)
}
