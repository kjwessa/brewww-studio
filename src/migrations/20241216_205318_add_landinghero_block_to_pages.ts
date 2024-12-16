import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_hero_type" AS ENUM('landing');
  CREATE TYPE "public"."enum__pages_v_version_hero_type" AS ENUM('landing');
  ALTER TABLE "pages" ADD COLUMN "hero_type" "enum_pages_hero_type" DEFAULT 'landing';
  ALTER TABLE "pages" ADD COLUMN "hero_hero_title" varchar;
  ALTER TABLE "pages" ADD COLUMN "hero_location_text" varchar;
  ALTER TABLE "pages" ADD COLUMN "hero_description_text" varchar;
  ALTER TABLE "pages" ADD COLUMN "hero_image_id" uuid;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_type" "enum__pages_v_version_hero_type" DEFAULT 'landing';
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hero_title" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_location_text" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_description_text" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_image_id" uuid;
  DO $$ BEGIN
   ALTER TABLE "pages" ADD CONSTRAINT "pages_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_hero_image_id_media_id_fk" FOREIGN KEY ("version_hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "pages_hero_hero_image_idx" ON "pages" USING btree ("hero_image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_hero_version_hero_image_idx" ON "_pages_v" USING btree ("version_hero_image_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages" DROP CONSTRAINT "pages_hero_image_id_media_id_fk";
  
  ALTER TABLE "_pages_v" DROP CONSTRAINT "_pages_v_version_hero_image_id_media_id_fk";
  
  DROP INDEX IF EXISTS "pages_hero_hero_image_idx";
  DROP INDEX IF EXISTS "_pages_v_version_hero_version_hero_image_idx";
  ALTER TABLE "pages" DROP COLUMN IF EXISTS "hero_type";
  ALTER TABLE "pages" DROP COLUMN IF EXISTS "hero_hero_title";
  ALTER TABLE "pages" DROP COLUMN IF EXISTS "hero_location_text";
  ALTER TABLE "pages" DROP COLUMN IF EXISTS "hero_description_text";
  ALTER TABLE "pages" DROP COLUMN IF EXISTS "hero_image_id";
  ALTER TABLE "_pages_v" DROP COLUMN IF EXISTS "version_hero_type";
  ALTER TABLE "_pages_v" DROP COLUMN IF EXISTS "version_hero_hero_title";
  ALTER TABLE "_pages_v" DROP COLUMN IF EXISTS "version_hero_location_text";
  ALTER TABLE "_pages_v" DROP COLUMN IF EXISTS "version_hero_description_text";
  ALTER TABLE "_pages_v" DROP COLUMN IF EXISTS "version_hero_image_id";
  DROP TYPE "public"."enum_pages_hero_type";
  DROP TYPE "public"."enum__pages_v_version_hero_type";`)
}
