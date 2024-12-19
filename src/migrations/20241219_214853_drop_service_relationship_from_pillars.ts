import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pillars" DROP CONSTRAINT "pillars_services_id_services_id_fk";
  
  ALTER TABLE "_pillars_v" DROP CONSTRAINT "_pillars_v_version_services_id_services_id_fk";
  
  DROP INDEX IF EXISTS "pillars_services_idx";
  DROP INDEX IF EXISTS "_pillars_v_version_version_services_idx";
  ALTER TABLE "pillars" DROP COLUMN IF EXISTS "services_id";
  ALTER TABLE "_pillars_v" DROP COLUMN IF EXISTS "version_services_id";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pillars" ADD COLUMN "services_id" uuid;
  ALTER TABLE "_pillars_v" ADD COLUMN "version_services_id" uuid;
  DO $$ BEGIN
   ALTER TABLE "pillars" ADD CONSTRAINT "pillars_services_id_services_id_fk" FOREIGN KEY ("services_id") REFERENCES "public"."services"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pillars_v" ADD CONSTRAINT "_pillars_v_version_services_id_services_id_fk" FOREIGN KEY ("version_services_id") REFERENCES "public"."services"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "pillars_services_idx" ON "pillars" USING btree ("services_id");
  CREATE INDEX IF NOT EXISTS "_pillars_v_version_version_services_idx" ON "_pillars_v" USING btree ("version_services_id");`)
}
