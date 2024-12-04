import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   ALTER TABLE "team" ADD COLUMN "bio_image_id" uuid;
  ALTER TABLE "_team_v" ADD COLUMN "version_bio_image_id" uuid;
  DO $$ BEGIN
   ALTER TABLE "team" ADD CONSTRAINT "team_bio_image_id_media_id_fk" FOREIGN KEY ("bio_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_team_v" ADD CONSTRAINT "_team_v_version_bio_image_id_media_id_fk" FOREIGN KEY ("version_bio_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "team_bio_image_idx" ON "team" USING btree ("bio_image_id");
  CREATE INDEX IF NOT EXISTS "_team_v_version_version_bio_image_idx" ON "_team_v" USING btree ("version_bio_image_id");`)
}

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   ALTER TABLE "team" DROP CONSTRAINT "team_bio_image_id_media_id_fk";
  
  ALTER TABLE "_team_v" DROP CONSTRAINT "_team_v_version_bio_image_id_media_id_fk";
  
  DROP INDEX IF EXISTS "team_bio_image_idx";
  DROP INDEX IF EXISTS "_team_v_version_version_bio_image_idx";
  ALTER TABLE "team" DROP COLUMN IF EXISTS "bio_image_id";
  ALTER TABLE "_team_v" DROP COLUMN IF EXISTS "version_bio_image_id";`)
}
