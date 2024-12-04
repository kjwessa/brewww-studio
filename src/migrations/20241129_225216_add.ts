import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   ALTER TABLE "posts" ADD COLUMN "featured" boolean DEFAULT false;
  ALTER TABLE "posts" ADD COLUMN "read_time" numeric;
  ALTER TABLE "_posts_v" ADD COLUMN "version_featured" boolean DEFAULT false;
  ALTER TABLE "_posts_v" ADD COLUMN "version_read_time" numeric;`)
}

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   ALTER TABLE "posts" DROP COLUMN IF EXISTS "featured";
  ALTER TABLE "posts" DROP COLUMN IF EXISTS "read_time";
  ALTER TABLE "_posts_v" DROP COLUMN IF EXISTS "version_featured";
  ALTER TABLE "_posts_v" DROP COLUMN IF EXISTS "version_read_time";`)
}
