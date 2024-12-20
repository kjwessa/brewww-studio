import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pillars" ADD COLUMN "image_id" uuid;
  ALTER TABLE "_pillars_v" ADD COLUMN "version_image_id" uuid;
  DO $$ BEGIN
   ALTER TABLE "pillars" ADD CONSTRAINT "pillars_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pillars_v" ADD CONSTRAINT "_pillars_v_version_image_id_media_id_fk" FOREIGN KEY ("version_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "pillars_image_idx" ON "pillars" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "_pillars_v_version_version_image_idx" ON "_pillars_v" USING btree ("version_image_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pillars" DROP CONSTRAINT "pillars_image_id_media_id_fk";
  
  ALTER TABLE "_pillars_v" DROP CONSTRAINT "_pillars_v_version_image_id_media_id_fk";
  
  DROP INDEX IF EXISTS "pillars_image_idx";
  DROP INDEX IF EXISTS "_pillars_v_version_version_image_idx";
  ALTER TABLE "pillars" DROP COLUMN IF EXISTS "image_id";
  ALTER TABLE "_pillars_v" DROP COLUMN IF EXISTS "version_image_id";`)
}
