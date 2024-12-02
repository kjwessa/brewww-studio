import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   CREATE TYPE "public"."enum_industries_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__industries_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_journeys_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__journeys_v_version_status" AS ENUM('draft', 'published');
  CREATE TABLE IF NOT EXISTS "industries" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"title" varchar,
  	"tagline" varchar,
  	"slug" varchar,
  	"slug_lock" boolean DEFAULT true,
  	"description" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_industries_status" DEFAULT 'draft'
  );
  
  CREATE TABLE IF NOT EXISTS "_industries_v" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"parent_id" uuid,
  	"version_title" varchar,
  	"version_tagline" varchar,
  	"version_slug" varchar,
  	"version_slug_lock" boolean DEFAULT true,
  	"version_description" varchar,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__industries_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE IF NOT EXISTS "journeys" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"title" varchar,
  	"tagline" varchar,
  	"slug" varchar,
  	"slug_lock" boolean DEFAULT true,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_journeys_status" DEFAULT 'draft'
  );
  
  CREATE TABLE IF NOT EXISTS "_journeys_v" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"parent_id" uuid,
  	"version_title" varchar,
  	"version_tagline" varchar,
  	"version_slug" varchar,
  	"version_slug_lock" boolean DEFAULT true,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__journeys_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  ALTER TABLE "pages" DROP CONSTRAINT "pages_meta_image_id_media_id_fk";
  
  ALTER TABLE "_pages_v" DROP CONSTRAINT "_pages_v_version_meta_image_id_media_id_fk";
  
  DROP INDEX IF EXISTS "pages_meta_meta_image_idx";
  DROP INDEX IF EXISTS "_pages_v_version_meta_version_meta_image_idx";
  ALTER TABLE "work" ADD COLUMN "story_title" varchar;
  ALTER TABLE "work" ADD COLUMN "story_content" jsonb;
  ALTER TABLE "_work_v" ADD COLUMN "version_story_title" varchar;
  ALTER TABLE "_work_v" ADD COLUMN "version_story_content" jsonb;
  ALTER TABLE "play" ADD COLUMN "slug" varchar;
  ALTER TABLE "play" ADD COLUMN "slug_lock" boolean DEFAULT true;
  ALTER TABLE "play" ADD COLUMN "published_on" timestamp(3) with time zone;
  ALTER TABLE "_play_v" ADD COLUMN "version_slug" varchar;
  ALTER TABLE "_play_v" ADD COLUMN "version_slug_lock" boolean DEFAULT true;
  ALTER TABLE "_play_v" ADD COLUMN "version_published_on" timestamp(3) with time zone;
  ALTER TABLE "results" ADD COLUMN "client_id" uuid;
  ALTER TABLE "results" ADD COLUMN "number" varchar;
  ALTER TABLE "results" ADD COLUMN "support" varchar;
  ALTER TABLE "results" ADD COLUMN "description" varchar;
  ALTER TABLE "_results_v" ADD COLUMN "version_client_id" uuid;
  ALTER TABLE "_results_v" ADD COLUMN "version_number" varchar;
  ALTER TABLE "_results_v" ADD COLUMN "version_support" varchar;
  ALTER TABLE "_results_v" ADD COLUMN "version_description" varchar;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "industries_id" uuid;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "journeys_id" uuid;
  DO $$ BEGIN
   ALTER TABLE "_industries_v" ADD CONSTRAINT "_industries_v_parent_id_industries_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."industries"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_journeys_v" ADD CONSTRAINT "_journeys_v_parent_id_journeys_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."journeys"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE UNIQUE INDEX IF NOT EXISTS "industries_title_idx" ON "industries" USING btree ("title");
  CREATE INDEX IF NOT EXISTS "industries_slug_idx" ON "industries" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "industries_updated_at_idx" ON "industries" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "industries_created_at_idx" ON "industries" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "industries__status_idx" ON "industries" USING btree ("_status");
  CREATE INDEX IF NOT EXISTS "_industries_v_parent_idx" ON "_industries_v" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_industries_v_version_version_title_idx" ON "_industries_v" USING btree ("version_title");
  CREATE INDEX IF NOT EXISTS "_industries_v_version_version_slug_idx" ON "_industries_v" USING btree ("version_slug");
  CREATE INDEX IF NOT EXISTS "_industries_v_version_version_updated_at_idx" ON "_industries_v" USING btree ("version_updated_at");
  CREATE INDEX IF NOT EXISTS "_industries_v_version_version_created_at_idx" ON "_industries_v" USING btree ("version_created_at");
  CREATE INDEX IF NOT EXISTS "_industries_v_version_version__status_idx" ON "_industries_v" USING btree ("version__status");
  CREATE INDEX IF NOT EXISTS "_industries_v_created_at_idx" ON "_industries_v" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "_industries_v_updated_at_idx" ON "_industries_v" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "_industries_v_latest_idx" ON "_industries_v" USING btree ("latest");
  CREATE INDEX IF NOT EXISTS "_industries_v_autosave_idx" ON "_industries_v" USING btree ("autosave");
  CREATE UNIQUE INDEX IF NOT EXISTS "journeys_title_idx" ON "journeys" USING btree ("title");
  CREATE INDEX IF NOT EXISTS "journeys_slug_idx" ON "journeys" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "journeys_updated_at_idx" ON "journeys" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "journeys_created_at_idx" ON "journeys" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "journeys__status_idx" ON "journeys" USING btree ("_status");
  CREATE INDEX IF NOT EXISTS "_journeys_v_parent_idx" ON "_journeys_v" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_journeys_v_version_version_title_idx" ON "_journeys_v" USING btree ("version_title");
  CREATE INDEX IF NOT EXISTS "_journeys_v_version_version_slug_idx" ON "_journeys_v" USING btree ("version_slug");
  CREATE INDEX IF NOT EXISTS "_journeys_v_version_version_updated_at_idx" ON "_journeys_v" USING btree ("version_updated_at");
  CREATE INDEX IF NOT EXISTS "_journeys_v_version_version_created_at_idx" ON "_journeys_v" USING btree ("version_created_at");
  CREATE INDEX IF NOT EXISTS "_journeys_v_version_version__status_idx" ON "_journeys_v" USING btree ("version__status");
  CREATE INDEX IF NOT EXISTS "_journeys_v_created_at_idx" ON "_journeys_v" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "_journeys_v_updated_at_idx" ON "_journeys_v" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "_journeys_v_latest_idx" ON "_journeys_v" USING btree ("latest");
  CREATE INDEX IF NOT EXISTS "_journeys_v_autosave_idx" ON "_journeys_v" USING btree ("autosave");
  DO $$ BEGIN
   ALTER TABLE "results" ADD CONSTRAINT "results_client_id_brands_id_fk" FOREIGN KEY ("client_id") REFERENCES "public"."brands"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_results_v" ADD CONSTRAINT "_results_v_version_client_id_brands_id_fk" FOREIGN KEY ("version_client_id") REFERENCES "public"."brands"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_industries_fk" FOREIGN KEY ("industries_id") REFERENCES "public"."industries"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_journeys_fk" FOREIGN KEY ("journeys_id") REFERENCES "public"."journeys"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE UNIQUE INDEX IF NOT EXISTS "pages_title_idx" ON "pages" USING btree ("title");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_version_title_idx" ON "_pages_v" USING btree ("version_title");
  CREATE UNIQUE INDEX IF NOT EXISTS "faq_title_idx" ON "faq" USING btree ("title");
  CREATE INDEX IF NOT EXISTS "_faq_v_version_version_title_idx" ON "_faq_v" USING btree ("version_title");
  CREATE UNIQUE INDEX IF NOT EXISTS "brands_title_idx" ON "brands" USING btree ("title");
  CREATE INDEX IF NOT EXISTS "_brands_v_version_version_title_idx" ON "_brands_v" USING btree ("version_title");
  CREATE UNIQUE INDEX IF NOT EXISTS "testimonials_title_idx" ON "testimonials" USING btree ("title");
  CREATE INDEX IF NOT EXISTS "_testimonials_v_version_version_title_idx" ON "_testimonials_v" USING btree ("version_title");
  CREATE INDEX IF NOT EXISTS "play_slug_idx" ON "play" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "_play_v_version_version_slug_idx" ON "_play_v" USING btree ("version_slug");
  CREATE INDEX IF NOT EXISTS "results_client_idx" ON "results" USING btree ("client_id");
  CREATE INDEX IF NOT EXISTS "_results_v_version_version_client_idx" ON "_results_v" USING btree ("version_client_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_industries_id_idx" ON "payload_locked_documents_rels" USING btree ("industries_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_journeys_id_idx" ON "payload_locked_documents_rels" USING btree ("journeys_id");
  ALTER TABLE "pages" DROP COLUMN IF EXISTS "meta_title";
  ALTER TABLE "pages" DROP COLUMN IF EXISTS "meta_image_id";
  ALTER TABLE "pages" DROP COLUMN IF EXISTS "meta_description";
  ALTER TABLE "_pages_v" DROP COLUMN IF EXISTS "version_meta_title";
  ALTER TABLE "_pages_v" DROP COLUMN IF EXISTS "version_meta_image_id";
  ALTER TABLE "_pages_v" DROP COLUMN IF EXISTS "version_meta_description";`)
}

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   ALTER TABLE "industries" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_industries_v" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "journeys" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_journeys_v" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "industries" CASCADE;
  DROP TABLE "_industries_v" CASCADE;
  DROP TABLE "journeys" CASCADE;
  DROP TABLE "_journeys_v" CASCADE;
  ALTER TABLE "results" DROP CONSTRAINT "results_client_id_brands_id_fk";
  
  ALTER TABLE "_results_v" DROP CONSTRAINT "_results_v_version_client_id_brands_id_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_industries_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_journeys_fk";
  
  DROP INDEX IF EXISTS "pages_title_idx";
  DROP INDEX IF EXISTS "_pages_v_version_version_title_idx";
  DROP INDEX IF EXISTS "faq_title_idx";
  DROP INDEX IF EXISTS "_faq_v_version_version_title_idx";
  DROP INDEX IF EXISTS "brands_title_idx";
  DROP INDEX IF EXISTS "_brands_v_version_version_title_idx";
  DROP INDEX IF EXISTS "testimonials_title_idx";
  DROP INDEX IF EXISTS "_testimonials_v_version_version_title_idx";
  DROP INDEX IF EXISTS "play_slug_idx";
  DROP INDEX IF EXISTS "_play_v_version_version_slug_idx";
  DROP INDEX IF EXISTS "results_client_idx";
  DROP INDEX IF EXISTS "_results_v_version_version_client_idx";
  DROP INDEX IF EXISTS "payload_locked_documents_rels_industries_id_idx";
  DROP INDEX IF EXISTS "payload_locked_documents_rels_journeys_id_idx";
  ALTER TABLE "pages" ADD COLUMN "meta_title" varchar;
  ALTER TABLE "pages" ADD COLUMN "meta_image_id" uuid;
  ALTER TABLE "pages" ADD COLUMN "meta_description" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_meta_title" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_meta_image_id" uuid;
  ALTER TABLE "_pages_v" ADD COLUMN "version_meta_description" varchar;
  DO $$ BEGIN
   ALTER TABLE "pages" ADD CONSTRAINT "pages_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "pages_meta_meta_image_idx" ON "pages" USING btree ("meta_image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_meta_version_meta_image_idx" ON "_pages_v" USING btree ("version_meta_image_id");
  ALTER TABLE "work" DROP COLUMN IF EXISTS "story_title";
  ALTER TABLE "work" DROP COLUMN IF EXISTS "story_content";
  ALTER TABLE "_work_v" DROP COLUMN IF EXISTS "version_story_title";
  ALTER TABLE "_work_v" DROP COLUMN IF EXISTS "version_story_content";
  ALTER TABLE "play" DROP COLUMN IF EXISTS "slug";
  ALTER TABLE "play" DROP COLUMN IF EXISTS "slug_lock";
  ALTER TABLE "play" DROP COLUMN IF EXISTS "published_on";
  ALTER TABLE "_play_v" DROP COLUMN IF EXISTS "version_slug";
  ALTER TABLE "_play_v" DROP COLUMN IF EXISTS "version_slug_lock";
  ALTER TABLE "_play_v" DROP COLUMN IF EXISTS "version_published_on";
  ALTER TABLE "results" DROP COLUMN IF EXISTS "client_id";
  ALTER TABLE "results" DROP COLUMN IF EXISTS "number";
  ALTER TABLE "results" DROP COLUMN IF EXISTS "support";
  ALTER TABLE "results" DROP COLUMN IF EXISTS "description";
  ALTER TABLE "_results_v" DROP COLUMN IF EXISTS "version_client_id";
  ALTER TABLE "_results_v" DROP COLUMN IF EXISTS "version_number";
  ALTER TABLE "_results_v" DROP COLUMN IF EXISTS "version_support";
  ALTER TABLE "_results_v" DROP COLUMN IF EXISTS "version_description";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "industries_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "journeys_id";
  DROP TYPE "public"."enum_industries_status";
  DROP TYPE "public"."enum__industries_v_version_status";
  DROP TYPE "public"."enum_journeys_status";
  DROP TYPE "public"."enum__journeys_v_version_status";`)
}
