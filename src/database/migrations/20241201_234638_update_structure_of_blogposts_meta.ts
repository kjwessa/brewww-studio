import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   ALTER TABLE "posts" RENAME COLUMN "meta_meta_title" TO "meta_title";
  ALTER TABLE "posts" RENAME COLUMN "meta_meta_image_id" TO "meta_image_id";
  ALTER TABLE "posts" RENAME COLUMN "meta_meta_description" TO "meta_description";
  ALTER TABLE "_posts_v" RENAME COLUMN "version_meta_meta_title" TO "version_meta_title";
  ALTER TABLE "_posts_v" RENAME COLUMN "version_meta_meta_image_id" TO "version_meta_image_id";
  ALTER TABLE "_posts_v" RENAME COLUMN "version_meta_meta_description" TO "version_meta_description";
  ALTER TABLE "posts" DROP CONSTRAINT "posts_meta_meta_image_id_media_id_fk";
  
  ALTER TABLE "_posts_v" DROP CONSTRAINT "_posts_v_version_meta_meta_image_id_media_id_fk";
  
  DROP INDEX IF EXISTS "posts_meta_meta_meta_meta_image_idx";
  DROP INDEX IF EXISTS "_posts_v_version_meta_meta_version_meta_meta_image_idx";
  DO $$ BEGIN
   ALTER TABLE "posts" ADD CONSTRAINT "posts_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_posts_v" ADD CONSTRAINT "_posts_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "posts_meta_meta_image_idx" ON "posts" USING btree ("meta_image_id");
  CREATE INDEX IF NOT EXISTS "_posts_v_version_meta_version_meta_image_idx" ON "_posts_v" USING btree ("version_meta_image_id");`)
}

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   ALTER TABLE "posts" RENAME COLUMN "meta_title" TO "meta_meta_title";
  ALTER TABLE "posts" RENAME COLUMN "meta_image_id" TO "meta_meta_image_id";
  ALTER TABLE "posts" RENAME COLUMN "meta_description" TO "meta_meta_description";
  ALTER TABLE "_posts_v" RENAME COLUMN "version_meta_title" TO "version_meta_meta_title";
  ALTER TABLE "_posts_v" RENAME COLUMN "version_meta_image_id" TO "version_meta_meta_image_id";
  ALTER TABLE "_posts_v" RENAME COLUMN "version_meta_description" TO "version_meta_meta_description";
  ALTER TABLE "posts" DROP CONSTRAINT "posts_meta_image_id_media_id_fk";
  
  ALTER TABLE "_posts_v" DROP CONSTRAINT "_posts_v_version_meta_image_id_media_id_fk";
  
  DROP INDEX IF EXISTS "posts_meta_meta_image_idx";
  DROP INDEX IF EXISTS "_posts_v_version_meta_version_meta_image_idx";
  DO $$ BEGIN
   ALTER TABLE "posts" ADD CONSTRAINT "posts_meta_meta_image_id_media_id_fk" FOREIGN KEY ("meta_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_posts_v" ADD CONSTRAINT "_posts_v_version_meta_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "posts_meta_meta_meta_meta_image_idx" ON "posts" USING btree ("meta_meta_image_id");
  CREATE INDEX IF NOT EXISTS "_posts_v_version_meta_meta_version_meta_meta_image_idx" ON "_posts_v" USING btree ("version_meta_meta_image_id");`)
}
