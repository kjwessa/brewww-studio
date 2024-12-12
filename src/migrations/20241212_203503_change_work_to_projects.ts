import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TYPE "public"."enum_work_status" RENAME TO "enum_projects_status";
  ALTER TYPE "public"."enum__work_v_version_status" RENAME TO "enum__projects_v_version_status";
  ALTER TABLE "work" RENAME TO "projects";
  ALTER TABLE "_work_v" RENAME TO "_projects_v";
  ALTER TABLE "payload_locked_documents_rels" RENAME COLUMN "work_id" TO "projects_id";
  ALTER TABLE "projects" DROP CONSTRAINT "work_meta_image_id_media_id_fk";
  
  ALTER TABLE "projects" DROP CONSTRAINT "work_image_id_media_id_fk";
  
  ALTER TABLE "projects" DROP CONSTRAINT "work_brand_id_brands_id_fk";
  
  ALTER TABLE "_projects_v" DROP CONSTRAINT "_work_v_parent_id_work_id_fk";
  
  ALTER TABLE "_projects_v" DROP CONSTRAINT "_work_v_version_meta_image_id_media_id_fk";
  
  ALTER TABLE "_projects_v" DROP CONSTRAINT "_work_v_version_image_id_media_id_fk";
  
  ALTER TABLE "_projects_v" DROP CONSTRAINT "_work_v_version_brand_id_brands_id_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_work_fk";
  
  DROP INDEX IF EXISTS "work_title_idx";
  DROP INDEX IF EXISTS "work_meta_meta_image_idx";
  DROP INDEX IF EXISTS "work_slug_idx";
  DROP INDEX IF EXISTS "work_image_idx";
  DROP INDEX IF EXISTS "work_brand_idx";
  DROP INDEX IF EXISTS "work_updated_at_idx";
  DROP INDEX IF EXISTS "work_created_at_idx";
  DROP INDEX IF EXISTS "work__status_idx";
  DROP INDEX IF EXISTS "_work_v_parent_idx";
  DROP INDEX IF EXISTS "_work_v_version_version_title_idx";
  DROP INDEX IF EXISTS "_work_v_version_meta_version_meta_image_idx";
  DROP INDEX IF EXISTS "_work_v_version_version_slug_idx";
  DROP INDEX IF EXISTS "_work_v_version_version_image_idx";
  DROP INDEX IF EXISTS "_work_v_version_version_brand_idx";
  DROP INDEX IF EXISTS "_work_v_version_version_updated_at_idx";
  DROP INDEX IF EXISTS "_work_v_version_version_created_at_idx";
  DROP INDEX IF EXISTS "_work_v_version_version__status_idx";
  DROP INDEX IF EXISTS "_work_v_created_at_idx";
  DROP INDEX IF EXISTS "_work_v_updated_at_idx";
  DROP INDEX IF EXISTS "_work_v_latest_idx";
  DROP INDEX IF EXISTS "_work_v_autosave_idx";
  DROP INDEX IF EXISTS "payload_locked_documents_rels_work_id_idx";
  DO $$ BEGIN
   ALTER TABLE "projects" ADD CONSTRAINT "projects_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "projects" ADD CONSTRAINT "projects_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "projects" ADD CONSTRAINT "projects_brand_id_brands_id_fk" FOREIGN KEY ("brand_id") REFERENCES "public"."brands"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_projects_v" ADD CONSTRAINT "_projects_v_parent_id_projects_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."projects"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_projects_v" ADD CONSTRAINT "_projects_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_projects_v" ADD CONSTRAINT "_projects_v_version_image_id_media_id_fk" FOREIGN KEY ("version_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_projects_v" ADD CONSTRAINT "_projects_v_version_brand_id_brands_id_fk" FOREIGN KEY ("version_brand_id") REFERENCES "public"."brands"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_projects_fk" FOREIGN KEY ("projects_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE UNIQUE INDEX IF NOT EXISTS "projects_title_idx" ON "projects" USING btree ("title");
  CREATE INDEX IF NOT EXISTS "projects_meta_meta_image_idx" ON "projects" USING btree ("meta_image_id");
  CREATE INDEX IF NOT EXISTS "projects_slug_idx" ON "projects" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "projects_image_idx" ON "projects" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "projects_brand_idx" ON "projects" USING btree ("brand_id");
  CREATE INDEX IF NOT EXISTS "projects_updated_at_idx" ON "projects" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "projects_created_at_idx" ON "projects" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "projects__status_idx" ON "projects" USING btree ("_status");
  CREATE INDEX IF NOT EXISTS "_projects_v_parent_idx" ON "_projects_v" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_projects_v_version_version_title_idx" ON "_projects_v" USING btree ("version_title");
  CREATE INDEX IF NOT EXISTS "_projects_v_version_meta_version_meta_image_idx" ON "_projects_v" USING btree ("version_meta_image_id");
  CREATE INDEX IF NOT EXISTS "_projects_v_version_version_slug_idx" ON "_projects_v" USING btree ("version_slug");
  CREATE INDEX IF NOT EXISTS "_projects_v_version_version_image_idx" ON "_projects_v" USING btree ("version_image_id");
  CREATE INDEX IF NOT EXISTS "_projects_v_version_version_brand_idx" ON "_projects_v" USING btree ("version_brand_id");
  CREATE INDEX IF NOT EXISTS "_projects_v_version_version_updated_at_idx" ON "_projects_v" USING btree ("version_updated_at");
  CREATE INDEX IF NOT EXISTS "_projects_v_version_version_created_at_idx" ON "_projects_v" USING btree ("version_created_at");
  CREATE INDEX IF NOT EXISTS "_projects_v_version_version__status_idx" ON "_projects_v" USING btree ("version__status");
  CREATE INDEX IF NOT EXISTS "_projects_v_created_at_idx" ON "_projects_v" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "_projects_v_updated_at_idx" ON "_projects_v" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "_projects_v_latest_idx" ON "_projects_v" USING btree ("latest");
  CREATE INDEX IF NOT EXISTS "_projects_v_autosave_idx" ON "_projects_v" USING btree ("autosave");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_projects_id_idx" ON "payload_locked_documents_rels" USING btree ("projects_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_work_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__work_v_version_status" AS ENUM('draft', 'published');
  CREATE TABLE IF NOT EXISTS "work" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"title" varchar,
  	"tagline" varchar,
  	"description" varchar,
  	"story_title" varchar,
  	"story_content" jsonb,
  	"meta_title" varchar,
  	"meta_image_id" uuid,
  	"meta_description" varchar,
  	"slug" varchar,
  	"slug_lock" boolean DEFAULT true,
  	"image_id" uuid,
  	"brand_id" uuid,
  	"project_link" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_work_status" DEFAULT 'draft'
  );
  
  CREATE TABLE IF NOT EXISTS "_work_v" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"parent_id" uuid,
  	"version_title" varchar,
  	"version_tagline" varchar,
  	"version_description" varchar,
  	"version_story_title" varchar,
  	"version_story_content" jsonb,
  	"version_meta_title" varchar,
  	"version_meta_image_id" uuid,
  	"version_meta_description" varchar,
  	"version_slug" varchar,
  	"version_slug_lock" boolean DEFAULT true,
  	"version_image_id" uuid,
  	"version_brand_id" uuid,
  	"version_project_link" varchar,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__work_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  ALTER TABLE "projects" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_projects_v" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "projects" CASCADE;
  DROP TABLE "_projects_v" CASCADE;
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_projects_fk";
  
  DROP INDEX IF EXISTS "payload_locked_documents_rels_projects_id_idx";
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "work_id" uuid;
  DO $$ BEGIN
   ALTER TABLE "work" ADD CONSTRAINT "work_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
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
   ALTER TABLE "_work_v" ADD CONSTRAINT "_work_v_parent_id_work_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."work"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_work_v" ADD CONSTRAINT "_work_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
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
  
  CREATE UNIQUE INDEX IF NOT EXISTS "work_title_idx" ON "work" USING btree ("title");
  CREATE INDEX IF NOT EXISTS "work_meta_meta_image_idx" ON "work" USING btree ("meta_image_id");
  CREATE INDEX IF NOT EXISTS "work_slug_idx" ON "work" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "work_image_idx" ON "work" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "work_brand_idx" ON "work" USING btree ("brand_id");
  CREATE INDEX IF NOT EXISTS "work_updated_at_idx" ON "work" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "work_created_at_idx" ON "work" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "work__status_idx" ON "work" USING btree ("_status");
  CREATE INDEX IF NOT EXISTS "_work_v_parent_idx" ON "_work_v" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_work_v_version_version_title_idx" ON "_work_v" USING btree ("version_title");
  CREATE INDEX IF NOT EXISTS "_work_v_version_meta_version_meta_image_idx" ON "_work_v" USING btree ("version_meta_image_id");
  CREATE INDEX IF NOT EXISTS "_work_v_version_version_slug_idx" ON "_work_v" USING btree ("version_slug");
  CREATE INDEX IF NOT EXISTS "_work_v_version_version_image_idx" ON "_work_v" USING btree ("version_image_id");
  CREATE INDEX IF NOT EXISTS "_work_v_version_version_brand_idx" ON "_work_v" USING btree ("version_brand_id");
  CREATE INDEX IF NOT EXISTS "_work_v_version_version_updated_at_idx" ON "_work_v" USING btree ("version_updated_at");
  CREATE INDEX IF NOT EXISTS "_work_v_version_version_created_at_idx" ON "_work_v" USING btree ("version_created_at");
  CREATE INDEX IF NOT EXISTS "_work_v_version_version__status_idx" ON "_work_v" USING btree ("version__status");
  CREATE INDEX IF NOT EXISTS "_work_v_created_at_idx" ON "_work_v" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "_work_v_updated_at_idx" ON "_work_v" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "_work_v_latest_idx" ON "_work_v" USING btree ("latest");
  CREATE INDEX IF NOT EXISTS "_work_v_autosave_idx" ON "_work_v" USING btree ("autosave");
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_work_fk" FOREIGN KEY ("work_id") REFERENCES "public"."work"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_work_id_idx" ON "payload_locked_documents_rels" USING btree ("work_id");
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "projects_id";
  DROP TYPE "public"."enum_projects_status";
  DROP TYPE "public"."enum__projects_v_version_status";`)
}
