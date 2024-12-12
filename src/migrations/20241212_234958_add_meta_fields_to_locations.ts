import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "locations" ADD COLUMN "meta_title" varchar;
  ALTER TABLE "locations" ADD COLUMN "meta_image_id" uuid;
  ALTER TABLE "locations" ADD COLUMN "meta_description" varchar;
  ALTER TABLE "_locations_v" ADD COLUMN "version_meta_title" varchar;
  ALTER TABLE "_locations_v" ADD COLUMN "version_meta_image_id" uuid;
  ALTER TABLE "_locations_v" ADD COLUMN "version_meta_description" varchar;
  DO $$ BEGIN
   ALTER TABLE "locations" ADD CONSTRAINT "locations_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_locations_v" ADD CONSTRAINT "_locations_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "locations_meta_meta_image_idx" ON "locations" USING btree ("meta_image_id");
  CREATE INDEX IF NOT EXISTS "_locations_v_version_meta_version_meta_image_idx" ON "_locations_v" USING btree ("version_meta_image_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "locations" DROP CONSTRAINT "locations_meta_image_id_media_id_fk";
  
  ALTER TABLE "_locations_v" DROP CONSTRAINT "_locations_v_version_meta_image_id_media_id_fk";
  
  DROP INDEX IF EXISTS "locations_meta_meta_image_idx";
  DROP INDEX IF EXISTS "_locations_v_version_meta_version_meta_image_idx";
  ALTER TABLE "locations" DROP COLUMN IF EXISTS "meta_title";
  ALTER TABLE "locations" DROP COLUMN IF EXISTS "meta_image_id";
  ALTER TABLE "locations" DROP COLUMN IF EXISTS "meta_description";
  ALTER TABLE "_locations_v" DROP COLUMN IF EXISTS "version_meta_title";
  ALTER TABLE "_locations_v" DROP COLUMN IF EXISTS "version_meta_image_id";
  ALTER TABLE "_locations_v" DROP COLUMN IF EXISTS "version_meta_description";`)
}
