import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "projects" RENAME COLUMN "tagline" TO "snippet";
  ALTER TABLE "_projects_v" RENAME COLUMN "version_tagline" TO "version_snippet";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "projects" RENAME COLUMN "snippet" TO "tagline";
  ALTER TABLE "_projects_v" RENAME COLUMN "version_snippet" TO "version_tagline";`)
}
