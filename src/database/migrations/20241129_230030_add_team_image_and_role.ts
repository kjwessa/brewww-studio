import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   CREATE TYPE "public"."enum_team_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__team_v_version_status" AS ENUM('draft', 'published');
  CREATE TABLE IF NOT EXISTS "team" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"title" varchar,
  	"slug" varchar,
  	"slug_lock" boolean DEFAULT true,
  	"role" varchar,
  	"image_id" uuid,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_team_status" DEFAULT 'draft'
  );
  
  CREATE TABLE IF NOT EXISTS "_team_v" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"parent_id" uuid,
  	"version_title" varchar,
  	"version_slug" varchar,
  	"version_slug_lock" boolean DEFAULT true,
  	"version_role" varchar,
  	"version_image_id" uuid,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__team_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "team_id" uuid;
  DO $$ BEGIN
   ALTER TABLE "team" ADD CONSTRAINT "team_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_team_v" ADD CONSTRAINT "_team_v_parent_id_team_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."team"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_team_v" ADD CONSTRAINT "_team_v_version_image_id_media_id_fk" FOREIGN KEY ("version_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE UNIQUE INDEX IF NOT EXISTS "team_title_idx" ON "team" USING btree ("title");
  CREATE INDEX IF NOT EXISTS "team_slug_idx" ON "team" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "team_image_idx" ON "team" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "team_updated_at_idx" ON "team" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "team_created_at_idx" ON "team" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "team__status_idx" ON "team" USING btree ("_status");
  CREATE INDEX IF NOT EXISTS "_team_v_parent_idx" ON "_team_v" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_team_v_version_version_title_idx" ON "_team_v" USING btree ("version_title");
  CREATE INDEX IF NOT EXISTS "_team_v_version_version_slug_idx" ON "_team_v" USING btree ("version_slug");
  CREATE INDEX IF NOT EXISTS "_team_v_version_version_image_idx" ON "_team_v" USING btree ("version_image_id");
  CREATE INDEX IF NOT EXISTS "_team_v_version_version_updated_at_idx" ON "_team_v" USING btree ("version_updated_at");
  CREATE INDEX IF NOT EXISTS "_team_v_version_version_created_at_idx" ON "_team_v" USING btree ("version_created_at");
  CREATE INDEX IF NOT EXISTS "_team_v_version_version__status_idx" ON "_team_v" USING btree ("version__status");
  CREATE INDEX IF NOT EXISTS "_team_v_created_at_idx" ON "_team_v" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "_team_v_updated_at_idx" ON "_team_v" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "_team_v_latest_idx" ON "_team_v" USING btree ("latest");
  CREATE INDEX IF NOT EXISTS "_team_v_autosave_idx" ON "_team_v" USING btree ("autosave");
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_team_fk" FOREIGN KEY ("team_id") REFERENCES "public"."team"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_team_id_idx" ON "payload_locked_documents_rels" USING btree ("team_id");`)
}

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   ALTER TABLE "team" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_team_v" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "team" CASCADE;
  DROP TABLE "_team_v" CASCADE;
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_team_fk";
  
  DROP INDEX IF EXISTS "payload_locked_documents_rels_team_id_idx";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "team_id";
  DROP TYPE "public"."enum_team_status";
  DROP TYPE "public"."enum__team_v_version_status";`)
}
