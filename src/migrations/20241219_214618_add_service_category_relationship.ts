import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "services" ADD COLUMN "category_id" uuid;
  ALTER TABLE "_services_v" ADD COLUMN "version_category_id" uuid;
  DO $$ BEGIN
   ALTER TABLE "services" ADD CONSTRAINT "services_category_id_pillars_id_fk" FOREIGN KEY ("category_id") REFERENCES "public"."pillars"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_services_v" ADD CONSTRAINT "_services_v_version_category_id_pillars_id_fk" FOREIGN KEY ("version_category_id") REFERENCES "public"."pillars"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "services_category_idx" ON "services" USING btree ("category_id");
  CREATE INDEX IF NOT EXISTS "_services_v_version_version_category_idx" ON "_services_v" USING btree ("version_category_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "services" DROP CONSTRAINT "services_category_id_pillars_id_fk";
  
  ALTER TABLE "_services_v" DROP CONSTRAINT "_services_v_version_category_id_pillars_id_fk";
  
  DROP INDEX IF EXISTS "services_category_idx";
  DROP INDEX IF EXISTS "_services_v_version_version_category_idx";
  ALTER TABLE "services" DROP COLUMN IF EXISTS "category_id";
  ALTER TABLE "_services_v" DROP COLUMN IF EXISTS "version_category_id";`)
}
