import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   ALTER TABLE "faq" ADD COLUMN "answer" jsonb;
  ALTER TABLE "_faq_v" ADD COLUMN "version_answer" jsonb;`)
}

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   ALTER TABLE "faq" DROP COLUMN IF EXISTS "answer";
  ALTER TABLE "_faq_v" DROP COLUMN IF EXISTS "version_answer";`)
}
