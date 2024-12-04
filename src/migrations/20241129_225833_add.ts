import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   CREATE TYPE "public"."enum_services_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__services_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_pillars_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__pillars_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_play_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__play_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_results_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__results_v_version_status" AS ENUM('draft', 'published');
  CREATE TABLE IF NOT EXISTS "services" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"title" varchar,
  	"tagline" varchar,
  	"slug" varchar,
  	"slug_lock" boolean DEFAULT true,
  	"image_id" uuid,
  	"description" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_services_status" DEFAULT 'draft'
  );
  
  CREATE TABLE IF NOT EXISTS "_services_v" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"parent_id" uuid,
  	"version_title" varchar,
  	"version_tagline" varchar,
  	"version_slug" varchar,
  	"version_slug_lock" boolean DEFAULT true,
  	"version_image_id" uuid,
  	"version_description" varchar,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__services_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE IF NOT EXISTS "pillars" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"title" varchar,
  	"tagline" varchar,
  	"services_id" uuid,
  	"slug" varchar,
  	"slug_lock" boolean DEFAULT true,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_pillars_status" DEFAULT 'draft'
  );
  
  CREATE TABLE IF NOT EXISTS "_pillars_v" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"parent_id" uuid,
  	"version_title" varchar,
  	"version_tagline" varchar,
  	"version_services_id" uuid,
  	"version_slug" varchar,
  	"version_slug_lock" boolean DEFAULT true,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__pillars_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE IF NOT EXISTS "play" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"title" varchar,
  	"tagline" varchar,
  	"description" varchar,
  	"image_id" uuid,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_play_status" DEFAULT 'draft'
  );
  
  CREATE TABLE IF NOT EXISTS "_play_v" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"parent_id" uuid,
  	"version_title" varchar,
  	"version_tagline" varchar,
  	"version_description" varchar,
  	"version_image_id" uuid,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__play_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE IF NOT EXISTS "results" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"title" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_results_status" DEFAULT 'draft'
  );
  
  CREATE TABLE IF NOT EXISTS "_results_v" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"parent_id" uuid,
  	"version_title" varchar,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__results_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "services_id" uuid;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "pillars_id" uuid;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "play_id" uuid;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "results_id" uuid;
  DO $$ BEGIN
   ALTER TABLE "services" ADD CONSTRAINT "services_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_services_v" ADD CONSTRAINT "_services_v_parent_id_services_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."services"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_services_v" ADD CONSTRAINT "_services_v_version_image_id_media_id_fk" FOREIGN KEY ("version_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pillars" ADD CONSTRAINT "pillars_services_id_services_id_fk" FOREIGN KEY ("services_id") REFERENCES "public"."services"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pillars_v" ADD CONSTRAINT "_pillars_v_parent_id_pillars_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pillars"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pillars_v" ADD CONSTRAINT "_pillars_v_version_services_id_services_id_fk" FOREIGN KEY ("version_services_id") REFERENCES "public"."services"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "play" ADD CONSTRAINT "play_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_play_v" ADD CONSTRAINT "_play_v_parent_id_play_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."play"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_play_v" ADD CONSTRAINT "_play_v_version_image_id_media_id_fk" FOREIGN KEY ("version_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_results_v" ADD CONSTRAINT "_results_v_parent_id_results_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."results"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE UNIQUE INDEX IF NOT EXISTS "services_title_idx" ON "services" USING btree ("title");
  CREATE INDEX IF NOT EXISTS "services_slug_idx" ON "services" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "services_image_idx" ON "services" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "services_updated_at_idx" ON "services" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "services_created_at_idx" ON "services" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "services__status_idx" ON "services" USING btree ("_status");
  CREATE INDEX IF NOT EXISTS "_services_v_parent_idx" ON "_services_v" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_services_v_version_version_title_idx" ON "_services_v" USING btree ("version_title");
  CREATE INDEX IF NOT EXISTS "_services_v_version_version_slug_idx" ON "_services_v" USING btree ("version_slug");
  CREATE INDEX IF NOT EXISTS "_services_v_version_version_image_idx" ON "_services_v" USING btree ("version_image_id");
  CREATE INDEX IF NOT EXISTS "_services_v_version_version_updated_at_idx" ON "_services_v" USING btree ("version_updated_at");
  CREATE INDEX IF NOT EXISTS "_services_v_version_version_created_at_idx" ON "_services_v" USING btree ("version_created_at");
  CREATE INDEX IF NOT EXISTS "_services_v_version_version__status_idx" ON "_services_v" USING btree ("version__status");
  CREATE INDEX IF NOT EXISTS "_services_v_created_at_idx" ON "_services_v" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "_services_v_updated_at_idx" ON "_services_v" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "_services_v_latest_idx" ON "_services_v" USING btree ("latest");
  CREATE INDEX IF NOT EXISTS "_services_v_autosave_idx" ON "_services_v" USING btree ("autosave");
  CREATE UNIQUE INDEX IF NOT EXISTS "pillars_title_idx" ON "pillars" USING btree ("title");
  CREATE INDEX IF NOT EXISTS "pillars_services_idx" ON "pillars" USING btree ("services_id");
  CREATE INDEX IF NOT EXISTS "pillars_slug_idx" ON "pillars" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "pillars_updated_at_idx" ON "pillars" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "pillars_created_at_idx" ON "pillars" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "pillars__status_idx" ON "pillars" USING btree ("_status");
  CREATE INDEX IF NOT EXISTS "_pillars_v_parent_idx" ON "_pillars_v" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_pillars_v_version_version_title_idx" ON "_pillars_v" USING btree ("version_title");
  CREATE INDEX IF NOT EXISTS "_pillars_v_version_version_services_idx" ON "_pillars_v" USING btree ("version_services_id");
  CREATE INDEX IF NOT EXISTS "_pillars_v_version_version_slug_idx" ON "_pillars_v" USING btree ("version_slug");
  CREATE INDEX IF NOT EXISTS "_pillars_v_version_version_updated_at_idx" ON "_pillars_v" USING btree ("version_updated_at");
  CREATE INDEX IF NOT EXISTS "_pillars_v_version_version_created_at_idx" ON "_pillars_v" USING btree ("version_created_at");
  CREATE INDEX IF NOT EXISTS "_pillars_v_version_version__status_idx" ON "_pillars_v" USING btree ("version__status");
  CREATE INDEX IF NOT EXISTS "_pillars_v_created_at_idx" ON "_pillars_v" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "_pillars_v_updated_at_idx" ON "_pillars_v" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "_pillars_v_latest_idx" ON "_pillars_v" USING btree ("latest");
  CREATE INDEX IF NOT EXISTS "_pillars_v_autosave_idx" ON "_pillars_v" USING btree ("autosave");
  CREATE UNIQUE INDEX IF NOT EXISTS "play_title_idx" ON "play" USING btree ("title");
  CREATE INDEX IF NOT EXISTS "play_image_idx" ON "play" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "play_updated_at_idx" ON "play" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "play_created_at_idx" ON "play" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "play__status_idx" ON "play" USING btree ("_status");
  CREATE INDEX IF NOT EXISTS "_play_v_parent_idx" ON "_play_v" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_play_v_version_version_title_idx" ON "_play_v" USING btree ("version_title");
  CREATE INDEX IF NOT EXISTS "_play_v_version_version_image_idx" ON "_play_v" USING btree ("version_image_id");
  CREATE INDEX IF NOT EXISTS "_play_v_version_version_updated_at_idx" ON "_play_v" USING btree ("version_updated_at");
  CREATE INDEX IF NOT EXISTS "_play_v_version_version_created_at_idx" ON "_play_v" USING btree ("version_created_at");
  CREATE INDEX IF NOT EXISTS "_play_v_version_version__status_idx" ON "_play_v" USING btree ("version__status");
  CREATE INDEX IF NOT EXISTS "_play_v_created_at_idx" ON "_play_v" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "_play_v_updated_at_idx" ON "_play_v" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "_play_v_latest_idx" ON "_play_v" USING btree ("latest");
  CREATE INDEX IF NOT EXISTS "_play_v_autosave_idx" ON "_play_v" USING btree ("autosave");
  CREATE INDEX IF NOT EXISTS "results_updated_at_idx" ON "results" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "results_created_at_idx" ON "results" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "results__status_idx" ON "results" USING btree ("_status");
  CREATE INDEX IF NOT EXISTS "_results_v_parent_idx" ON "_results_v" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_results_v_version_version_updated_at_idx" ON "_results_v" USING btree ("version_updated_at");
  CREATE INDEX IF NOT EXISTS "_results_v_version_version_created_at_idx" ON "_results_v" USING btree ("version_created_at");
  CREATE INDEX IF NOT EXISTS "_results_v_version_version__status_idx" ON "_results_v" USING btree ("version__status");
  CREATE INDEX IF NOT EXISTS "_results_v_created_at_idx" ON "_results_v" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "_results_v_updated_at_idx" ON "_results_v" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "_results_v_latest_idx" ON "_results_v" USING btree ("latest");
  CREATE INDEX IF NOT EXISTS "_results_v_autosave_idx" ON "_results_v" USING btree ("autosave");
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_services_fk" FOREIGN KEY ("services_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_pillars_fk" FOREIGN KEY ("pillars_id") REFERENCES "public"."pillars"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_play_fk" FOREIGN KEY ("play_id") REFERENCES "public"."play"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_results_fk" FOREIGN KEY ("results_id") REFERENCES "public"."results"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_services_id_idx" ON "payload_locked_documents_rels" USING btree ("services_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_pillars_id_idx" ON "payload_locked_documents_rels" USING btree ("pillars_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_play_id_idx" ON "payload_locked_documents_rels" USING btree ("play_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_results_id_idx" ON "payload_locked_documents_rels" USING btree ("results_id");`)
}

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   ALTER TABLE "services" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_services_v" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pillars" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pillars_v" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "play" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_play_v" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "results" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_results_v" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "services" CASCADE;
  DROP TABLE "_services_v" CASCADE;
  DROP TABLE "pillars" CASCADE;
  DROP TABLE "_pillars_v" CASCADE;
  DROP TABLE "play" CASCADE;
  DROP TABLE "_play_v" CASCADE;
  DROP TABLE "results" CASCADE;
  DROP TABLE "_results_v" CASCADE;
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_services_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_pillars_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_play_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_results_fk";
  
  DROP INDEX IF EXISTS "payload_locked_documents_rels_services_id_idx";
  DROP INDEX IF EXISTS "payload_locked_documents_rels_pillars_id_idx";
  DROP INDEX IF EXISTS "payload_locked_documents_rels_play_id_idx";
  DROP INDEX IF EXISTS "payload_locked_documents_rels_results_id_idx";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "services_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "pillars_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "play_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "results_id";
  DROP TYPE "public"."enum_services_status";
  DROP TYPE "public"."enum__services_v_version_status";
  DROP TYPE "public"."enum_pillars_status";
  DROP TYPE "public"."enum__pillars_v_version_status";
  DROP TYPE "public"."enum_play_status";
  DROP TYPE "public"."enum__play_v_version_status";
  DROP TYPE "public"."enum_results_status";
  DROP TYPE "public"."enum__results_v_version_status";`)
}
