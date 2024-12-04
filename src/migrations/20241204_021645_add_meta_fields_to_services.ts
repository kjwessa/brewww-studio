import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   ALTER TABLE "services" ADD COLUMN "meta_title" varchar;
  ALTER TABLE "services" ADD COLUMN "meta_image_id" uuid;
  ALTER TABLE "services" ADD COLUMN "meta_description" varchar;
  ALTER TABLE "_services_v" ADD COLUMN "version_meta_title" varchar;
  ALTER TABLE "_services_v" ADD COLUMN "version_meta_image_id" uuid;
  ALTER TABLE "_services_v" ADD COLUMN "version_meta_description" varchar;
  DO $$ BEGIN
   ALTER TABLE "services" ADD CONSTRAINT "services_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_services_v" ADD CONSTRAINT "_services_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "services_meta_meta_image_idx" ON "services" USING btree ("meta_image_id");
  CREATE INDEX IF NOT EXISTS "_services_v_version_meta_version_meta_image_idx" ON "_services_v" USING btree ("version_meta_image_id");`)
}

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   ALTER TABLE "services" DROP CONSTRAINT "services_meta_image_id_media_id_fk";
  
  ALTER TABLE "_services_v" DROP CONSTRAINT "_services_v_version_meta_image_id_media_id_fk";
  
  DROP INDEX IF EXISTS "services_meta_meta_image_idx";
  DROP INDEX IF EXISTS "_services_v_version_meta_version_meta_image_idx";
  ALTER TABLE "services" DROP COLUMN IF EXISTS "meta_title";
  ALTER TABLE "services" DROP COLUMN IF EXISTS "meta_image_id";
  ALTER TABLE "services" DROP COLUMN IF EXISTS "meta_description";
  ALTER TABLE "_services_v" DROP COLUMN IF EXISTS "version_meta_title";
  ALTER TABLE "_services_v" DROP COLUMN IF EXISTS "version_meta_image_id";
  ALTER TABLE "_services_v" DROP COLUMN IF EXISTS "version_meta_description";`)
}
