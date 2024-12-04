import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   ALTER TABLE "locations" RENAME COLUMN "hero_image_id" TO "image_id";
  ALTER TABLE "_locations_v" RENAME COLUMN "version_hero_image_id" TO "version_image_id";
  ALTER TABLE "locations" DROP CONSTRAINT "locations_hero_image_id_media_id_fk";
  
  ALTER TABLE "_locations_v" DROP CONSTRAINT "_locations_v_version_hero_image_id_media_id_fk";
  
  DROP INDEX IF EXISTS "locations_hero_image_idx";
  DROP INDEX IF EXISTS "_locations_v_version_version_hero_image_idx";
  DO $$ BEGIN
   ALTER TABLE "locations" ADD CONSTRAINT "locations_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_locations_v" ADD CONSTRAINT "_locations_v_version_image_id_media_id_fk" FOREIGN KEY ("version_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "locations_image_idx" ON "locations" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "_locations_v_version_version_image_idx" ON "_locations_v" USING btree ("version_image_id");`)
}

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   ALTER TABLE "locations" RENAME COLUMN "image_id" TO "hero_image_id";
  ALTER TABLE "_locations_v" RENAME COLUMN "version_image_id" TO "version_hero_image_id";
  ALTER TABLE "locations" DROP CONSTRAINT "locations_image_id_media_id_fk";
  
  ALTER TABLE "_locations_v" DROP CONSTRAINT "_locations_v_version_image_id_media_id_fk";
  
  DROP INDEX IF EXISTS "locations_image_idx";
  DROP INDEX IF EXISTS "_locations_v_version_version_image_idx";
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
