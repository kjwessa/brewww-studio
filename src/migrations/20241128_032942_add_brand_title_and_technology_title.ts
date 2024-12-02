import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   CREATE TYPE "public"."enum_brands_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__brands_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_technologies_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__technologies_v_version_status" AS ENUM('draft', 'published');
  CREATE TABLE IF NOT EXISTS "brands" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"title" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_brands_status" DEFAULT 'draft'
  );
  
  CREATE TABLE IF NOT EXISTS "_brands_v" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"parent_id" uuid,
  	"version_title" varchar,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__brands_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE IF NOT EXISTS "technologies" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"title" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_technologies_status" DEFAULT 'draft'
  );
  
  CREATE TABLE IF NOT EXISTS "_technologies_v" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"parent_id" uuid,
  	"version_title" varchar,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__technologies_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "brands_id" uuid;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "technologies_id" uuid;
  DO $$ BEGIN
   ALTER TABLE "_brands_v" ADD CONSTRAINT "_brands_v_parent_id_brands_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."brands"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_technologies_v" ADD CONSTRAINT "_technologies_v_parent_id_technologies_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."technologies"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "brands_updated_at_idx" ON "brands" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "brands_created_at_idx" ON "brands" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "brands__status_idx" ON "brands" USING btree ("_status");
  CREATE INDEX IF NOT EXISTS "_brands_v_parent_idx" ON "_brands_v" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_brands_v_version_version_updated_at_idx" ON "_brands_v" USING btree ("version_updated_at");
  CREATE INDEX IF NOT EXISTS "_brands_v_version_version_created_at_idx" ON "_brands_v" USING btree ("version_created_at");
  CREATE INDEX IF NOT EXISTS "_brands_v_version_version__status_idx" ON "_brands_v" USING btree ("version__status");
  CREATE INDEX IF NOT EXISTS "_brands_v_created_at_idx" ON "_brands_v" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "_brands_v_updated_at_idx" ON "_brands_v" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "_brands_v_latest_idx" ON "_brands_v" USING btree ("latest");
  CREATE INDEX IF NOT EXISTS "_brands_v_autosave_idx" ON "_brands_v" USING btree ("autosave");
  CREATE UNIQUE INDEX IF NOT EXISTS "technologies_title_idx" ON "technologies" USING btree ("title");
  CREATE INDEX IF NOT EXISTS "technologies_updated_at_idx" ON "technologies" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "technologies_created_at_idx" ON "technologies" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "technologies__status_idx" ON "technologies" USING btree ("_status");
  CREATE INDEX IF NOT EXISTS "_technologies_v_parent_idx" ON "_technologies_v" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_technologies_v_version_version_title_idx" ON "_technologies_v" USING btree ("version_title");
  CREATE INDEX IF NOT EXISTS "_technologies_v_version_version_updated_at_idx" ON "_technologies_v" USING btree ("version_updated_at");
  CREATE INDEX IF NOT EXISTS "_technologies_v_version_version_created_at_idx" ON "_technologies_v" USING btree ("version_created_at");
  CREATE INDEX IF NOT EXISTS "_technologies_v_version_version__status_idx" ON "_technologies_v" USING btree ("version__status");
  CREATE INDEX IF NOT EXISTS "_technologies_v_created_at_idx" ON "_technologies_v" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "_technologies_v_updated_at_idx" ON "_technologies_v" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "_technologies_v_latest_idx" ON "_technologies_v" USING btree ("latest");
  CREATE INDEX IF NOT EXISTS "_technologies_v_autosave_idx" ON "_technologies_v" USING btree ("autosave");
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_brands_fk" FOREIGN KEY ("brands_id") REFERENCES "public"."brands"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_technologies_fk" FOREIGN KEY ("technologies_id") REFERENCES "public"."technologies"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_brands_id_idx" ON "payload_locked_documents_rels" USING btree ("brands_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_technologies_id_idx" ON "payload_locked_documents_rels" USING btree ("technologies_id");`)
}

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   ALTER TABLE "brands" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_brands_v" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "technologies" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_technologies_v" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "brands" CASCADE;
  DROP TABLE "_brands_v" CASCADE;
  DROP TABLE "technologies" CASCADE;
  DROP TABLE "_technologies_v" CASCADE;
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_brands_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_technologies_fk";
  
  DROP INDEX IF EXISTS "payload_locked_documents_rels_brands_id_idx";
  DROP INDEX IF EXISTS "payload_locked_documents_rels_technologies_id_idx";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "brands_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "technologies_id";
  DROP TYPE "public"."enum_brands_status";
  DROP TYPE "public"."enum__brands_v_version_status";
  DROP TYPE "public"."enum_technologies_status";
  DROP TYPE "public"."enum__technologies_v_version_status";`)
}
