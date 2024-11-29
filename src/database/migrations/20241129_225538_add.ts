import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   ALTER TABLE "locations" ADD COLUMN "location" varchar;
  ALTER TABLE "locations" ADD COLUMN "hero_title" varchar;
  ALTER TABLE "locations" ADD COLUMN "hero_image_id" uuid;
  ALTER TABLE "locations" ADD COLUMN "hero_description" jsonb;
  ALTER TABLE "_locations_v" ADD COLUMN "version_location" varchar;
  ALTER TABLE "_locations_v" ADD COLUMN "version_hero_title" varchar;
  ALTER TABLE "_locations_v" ADD COLUMN "version_hero_image_id" uuid;
  ALTER TABLE "_locations_v" ADD COLUMN "version_hero_description" jsonb;
  DO $$ BEGIN
   ALTER TABLE "locations" ADD CONSTRAINT "locations_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_locations_v" ADD CONSTRAINT "_locations_v_version_hero_image_id_media_id_fk" FOREIGN KEY ("version_hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "locations_hero_image_idx" ON "locations" USING btree ("hero_image_id");
  CREATE INDEX IF NOT EXISTS "_locations_v_version_version_hero_image_idx" ON "_locations_v" USING btree ("version_hero_image_id");`)
}

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   ALTER TABLE "locations" DROP CONSTRAINT "locations_hero_image_id_media_id_fk";
  
  ALTER TABLE "_locations_v" DROP CONSTRAINT "_locations_v_version_hero_image_id_media_id_fk";
  
  DROP INDEX IF EXISTS "locations_hero_image_idx";
  DROP INDEX IF EXISTS "_locations_v_version_version_hero_image_idx";
  ALTER TABLE "locations" DROP COLUMN IF EXISTS "location";
  ALTER TABLE "locations" DROP COLUMN IF EXISTS "hero_title";
  ALTER TABLE "locations" DROP COLUMN IF EXISTS "hero_image_id";
  ALTER TABLE "locations" DROP COLUMN IF EXISTS "hero_description";
  ALTER TABLE "_locations_v" DROP COLUMN IF EXISTS "version_location";
  ALTER TABLE "_locations_v" DROP COLUMN IF EXISTS "version_hero_title";
  ALTER TABLE "_locations_v" DROP COLUMN IF EXISTS "version_hero_image_id";
  ALTER TABLE "_locations_v" DROP COLUMN IF EXISTS "version_hero_description";`)
}
