import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   ALTER TABLE "team" ADD COLUMN "meta_title" varchar;
  ALTER TABLE "team" ADD COLUMN "meta_image_id" uuid;
  ALTER TABLE "team" ADD COLUMN "meta_description" varchar;
  ALTER TABLE "_team_v" ADD COLUMN "version_meta_title" varchar;
  ALTER TABLE "_team_v" ADD COLUMN "version_meta_image_id" uuid;
  ALTER TABLE "_team_v" ADD COLUMN "version_meta_description" varchar;
  DO $$ BEGIN
   ALTER TABLE "team" ADD CONSTRAINT "team_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_team_v" ADD CONSTRAINT "_team_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "team_meta_meta_image_idx" ON "team" USING btree ("meta_image_id");
  CREATE INDEX IF NOT EXISTS "_team_v_version_meta_version_meta_image_idx" ON "_team_v" USING btree ("version_meta_image_id");`)
}

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   ALTER TABLE "team" DROP CONSTRAINT "team_meta_image_id_media_id_fk";
  
  ALTER TABLE "_team_v" DROP CONSTRAINT "_team_v_version_meta_image_id_media_id_fk";
  
  DROP INDEX IF EXISTS "team_meta_meta_image_idx";
  DROP INDEX IF EXISTS "_team_v_version_meta_version_meta_image_idx";
  ALTER TABLE "team" DROP COLUMN IF EXISTS "meta_title";
  ALTER TABLE "team" DROP COLUMN IF EXISTS "meta_image_id";
  ALTER TABLE "team" DROP COLUMN IF EXISTS "meta_description";
  ALTER TABLE "_team_v" DROP COLUMN IF EXISTS "version_meta_title";
  ALTER TABLE "_team_v" DROP COLUMN IF EXISTS "version_meta_image_id";
  ALTER TABLE "_team_v" DROP COLUMN IF EXISTS "version_meta_description";`)
}
