import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   ALTER TABLE "work" ADD COLUMN "tagline" varchar;
  ALTER TABLE "work" ADD COLUMN "description" varchar;
  ALTER TABLE "work" ADD COLUMN "slug" varchar;
  ALTER TABLE "work" ADD COLUMN "slug_lock" boolean DEFAULT true;
  ALTER TABLE "work" ADD COLUMN "image_id" uuid;
  ALTER TABLE "work" ADD COLUMN "brand_id" uuid;
  ALTER TABLE "work" ADD COLUMN "featured" boolean;
  ALTER TABLE "work" ADD COLUMN "project_link" varchar;
  ALTER TABLE "_work_v" ADD COLUMN "version_tagline" varchar;
  ALTER TABLE "_work_v" ADD COLUMN "version_description" varchar;
  ALTER TABLE "_work_v" ADD COLUMN "version_slug" varchar;
  ALTER TABLE "_work_v" ADD COLUMN "version_slug_lock" boolean DEFAULT true;
  ALTER TABLE "_work_v" ADD COLUMN "version_image_id" uuid;
  ALTER TABLE "_work_v" ADD COLUMN "version_brand_id" uuid;
  ALTER TABLE "_work_v" ADD COLUMN "version_featured" boolean;
  ALTER TABLE "_work_v" ADD COLUMN "version_project_link" varchar;
  DO $$ BEGIN
   ALTER TABLE "work" ADD CONSTRAINT "work_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "work" ADD CONSTRAINT "work_brand_id_brands_id_fk" FOREIGN KEY ("brand_id") REFERENCES "public"."brands"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_work_v" ADD CONSTRAINT "_work_v_version_image_id_media_id_fk" FOREIGN KEY ("version_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_work_v" ADD CONSTRAINT "_work_v_version_brand_id_brands_id_fk" FOREIGN KEY ("version_brand_id") REFERENCES "public"."brands"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "work_slug_idx" ON "work" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "work_image_idx" ON "work" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "work_brand_idx" ON "work" USING btree ("brand_id");
  CREATE INDEX IF NOT EXISTS "_work_v_version_version_slug_idx" ON "_work_v" USING btree ("version_slug");
  CREATE INDEX IF NOT EXISTS "_work_v_version_version_image_idx" ON "_work_v" USING btree ("version_image_id");
  CREATE INDEX IF NOT EXISTS "_work_v_version_version_brand_idx" ON "_work_v" USING btree ("version_brand_id");`)
}

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   ALTER TABLE "work" DROP CONSTRAINT "work_image_id_media_id_fk";
  
  ALTER TABLE "work" DROP CONSTRAINT "work_brand_id_brands_id_fk";
  
  ALTER TABLE "_work_v" DROP CONSTRAINT "_work_v_version_image_id_media_id_fk";
  
  ALTER TABLE "_work_v" DROP CONSTRAINT "_work_v_version_brand_id_brands_id_fk";
  
  DROP INDEX IF EXISTS "work_slug_idx";
  DROP INDEX IF EXISTS "work_image_idx";
  DROP INDEX IF EXISTS "work_brand_idx";
  DROP INDEX IF EXISTS "_work_v_version_version_slug_idx";
  DROP INDEX IF EXISTS "_work_v_version_version_image_idx";
  DROP INDEX IF EXISTS "_work_v_version_version_brand_idx";
  ALTER TABLE "work" DROP COLUMN IF EXISTS "tagline";
  ALTER TABLE "work" DROP COLUMN IF EXISTS "description";
  ALTER TABLE "work" DROP COLUMN IF EXISTS "slug";
  ALTER TABLE "work" DROP COLUMN IF EXISTS "slug_lock";
  ALTER TABLE "work" DROP COLUMN IF EXISTS "image_id";
  ALTER TABLE "work" DROP COLUMN IF EXISTS "brand_id";
  ALTER TABLE "work" DROP COLUMN IF EXISTS "featured";
  ALTER TABLE "work" DROP COLUMN IF EXISTS "project_link";
  ALTER TABLE "_work_v" DROP COLUMN IF EXISTS "version_tagline";
  ALTER TABLE "_work_v" DROP COLUMN IF EXISTS "version_description";
  ALTER TABLE "_work_v" DROP COLUMN IF EXISTS "version_slug";
  ALTER TABLE "_work_v" DROP COLUMN IF EXISTS "version_slug_lock";
  ALTER TABLE "_work_v" DROP COLUMN IF EXISTS "version_image_id";
  ALTER TABLE "_work_v" DROP COLUMN IF EXISTS "version_brand_id";
  ALTER TABLE "_work_v" DROP COLUMN IF EXISTS "version_featured";
  ALTER TABLE "_work_v" DROP COLUMN IF EXISTS "version_project_link";`)
}
