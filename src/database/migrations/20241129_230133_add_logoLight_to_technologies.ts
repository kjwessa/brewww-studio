import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   ALTER TABLE "technologies" ADD COLUMN "logo_light_id" uuid;
  ALTER TABLE "_technologies_v" ADD COLUMN "version_logo_light_id" uuid;
  DO $$ BEGIN
   ALTER TABLE "technologies" ADD CONSTRAINT "technologies_logo_light_id_media_id_fk" FOREIGN KEY ("logo_light_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_technologies_v" ADD CONSTRAINT "_technologies_v_version_logo_light_id_media_id_fk" FOREIGN KEY ("version_logo_light_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "technologies_logo_light_idx" ON "technologies" USING btree ("logo_light_id");
  CREATE INDEX IF NOT EXISTS "_technologies_v_version_version_logo_light_idx" ON "_technologies_v" USING btree ("version_logo_light_id");`)
}

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   ALTER TABLE "technologies" DROP CONSTRAINT "technologies_logo_light_id_media_id_fk";
  
  ALTER TABLE "_technologies_v" DROP CONSTRAINT "_technologies_v_version_logo_light_id_media_id_fk";
  
  DROP INDEX IF EXISTS "technologies_logo_light_idx";
  DROP INDEX IF EXISTS "_technologies_v_version_version_logo_light_idx";
  ALTER TABLE "technologies" DROP COLUMN IF EXISTS "logo_light_id";
  ALTER TABLE "_technologies_v" DROP COLUMN IF EXISTS "version_logo_light_id";`)
}
