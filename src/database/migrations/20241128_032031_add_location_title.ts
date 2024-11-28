import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   CREATE TYPE "public"."enum_locations_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__locations_v_version_status" AS ENUM('draft', 'published');
  CREATE TABLE IF NOT EXISTS "locations" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"title" varchar,
  	"slug" varchar,
  	"slug_lock" boolean DEFAULT true,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_locations_status" DEFAULT 'draft'
  );
  
  CREATE TABLE IF NOT EXISTS "_locations_v" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"parent_id" uuid,
  	"version_title" varchar,
  	"version_slug" varchar,
  	"version_slug_lock" boolean DEFAULT true,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__locations_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "locations_id" uuid;
  DO $$ BEGIN
   ALTER TABLE "_locations_v" ADD CONSTRAINT "_locations_v_parent_id_locations_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."locations"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE UNIQUE INDEX IF NOT EXISTS "locations_title_idx" ON "locations" USING btree ("title");
  CREATE INDEX IF NOT EXISTS "locations_slug_idx" ON "locations" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "locations_updated_at_idx" ON "locations" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "locations_created_at_idx" ON "locations" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "locations__status_idx" ON "locations" USING btree ("_status");
  CREATE INDEX IF NOT EXISTS "_locations_v_parent_idx" ON "_locations_v" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_locations_v_version_version_title_idx" ON "_locations_v" USING btree ("version_title");
  CREATE INDEX IF NOT EXISTS "_locations_v_version_version_slug_idx" ON "_locations_v" USING btree ("version_slug");
  CREATE INDEX IF NOT EXISTS "_locations_v_version_version_updated_at_idx" ON "_locations_v" USING btree ("version_updated_at");
  CREATE INDEX IF NOT EXISTS "_locations_v_version_version_created_at_idx" ON "_locations_v" USING btree ("version_created_at");
  CREATE INDEX IF NOT EXISTS "_locations_v_version_version__status_idx" ON "_locations_v" USING btree ("version__status");
  CREATE INDEX IF NOT EXISTS "_locations_v_created_at_idx" ON "_locations_v" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "_locations_v_updated_at_idx" ON "_locations_v" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "_locations_v_latest_idx" ON "_locations_v" USING btree ("latest");
  CREATE INDEX IF NOT EXISTS "_locations_v_autosave_idx" ON "_locations_v" USING btree ("autosave");
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_locations_fk" FOREIGN KEY ("locations_id") REFERENCES "public"."locations"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_locations_id_idx" ON "payload_locked_documents_rels" USING btree ("locations_id");`)
}

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   ALTER TABLE "locations" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_locations_v" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "locations" CASCADE;
  DROP TABLE "_locations_v" CASCADE;
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_locations_fk";
  
  DROP INDEX IF EXISTS "payload_locked_documents_rels_locations_id_idx";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "locations_id";
  DROP TYPE "public"."enum_locations_status";
  DROP TYPE "public"."enum__locations_v_version_status";`)
}
