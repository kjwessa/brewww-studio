import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   ALTER TABLE "work" ADD COLUMN "meta_title" varchar;
  ALTER TABLE "work" ADD COLUMN "meta_image_id" uuid;
  ALTER TABLE "work" ADD COLUMN "meta_description" varchar;
  ALTER TABLE "_work_v" ADD COLUMN "version_meta_title" varchar;
  ALTER TABLE "_work_v" ADD COLUMN "version_meta_image_id" uuid;
  ALTER TABLE "_work_v" ADD COLUMN "version_meta_description" varchar;
  DO $$ BEGIN
   ALTER TABLE "work" ADD CONSTRAINT "work_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_work_v" ADD CONSTRAINT "_work_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "work_meta_meta_image_idx" ON "work" USING btree ("meta_image_id");
  CREATE INDEX IF NOT EXISTS "_work_v_version_meta_version_meta_image_idx" ON "_work_v" USING btree ("version_meta_image_id");`)
}

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   ALTER TABLE "work" DROP CONSTRAINT "work_meta_image_id_media_id_fk";
  
  ALTER TABLE "_work_v" DROP CONSTRAINT "_work_v_version_meta_image_id_media_id_fk";
  
  DROP INDEX IF EXISTS "work_meta_meta_image_idx";
  DROP INDEX IF EXISTS "_work_v_version_meta_version_meta_image_idx";
  ALTER TABLE "work" DROP COLUMN IF EXISTS "meta_title";
  ALTER TABLE "work" DROP COLUMN IF EXISTS "meta_image_id";
  ALTER TABLE "work" DROP COLUMN IF EXISTS "meta_description";
  ALTER TABLE "_work_v" DROP COLUMN IF EXISTS "version_meta_title";
  ALTER TABLE "_work_v" DROP COLUMN IF EXISTS "version_meta_image_id";
  ALTER TABLE "_work_v" DROP COLUMN IF EXISTS "version_meta_description";`)
}
