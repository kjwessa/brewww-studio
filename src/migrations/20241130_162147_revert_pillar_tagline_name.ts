import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   ALTER TABLE "pillars" RENAME COLUMN "tagline_test" TO "tagline";
  ALTER TABLE "_pillars_v" RENAME COLUMN "version_tagline_test" TO "version_tagline";`)
}

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   ALTER TABLE "pillars" RENAME COLUMN "tagline" TO "tagline_test";
  ALTER TABLE "_pillars_v" RENAME COLUMN "version_tagline" TO "version_tagline_test";`)
}
