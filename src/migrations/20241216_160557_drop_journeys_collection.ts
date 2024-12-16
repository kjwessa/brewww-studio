import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "journeys" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_journeys_v" DISABLE ROW LEVEL SECURITY;
  DROP TABLE IF EXISTS "journeys" CASCADE;
  DROP TABLE IF EXISTS "_journeys_v" CASCADE;
  
  DO $$ 
  BEGIN
    IF EXISTS (
      SELECT 1 FROM pg_constraint 
      WHERE conname = 'payload_locked_documents_rels_journeys_fk'
    ) THEN
      ALTER TABLE "payload_locked_documents_rels" 
      DROP CONSTRAINT "payload_locked_documents_rels_journeys_fk";
    END IF;
  END $$;
  
  DROP INDEX IF EXISTS "payload_locked_documents_rels_journeys_id_idx";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "journeys_id";
  DROP TYPE IF EXISTS "public"."enum_journeys_status";
  DROP TYPE IF EXISTS "public"."enum__journeys_v_version_status";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_journeys_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__journeys_v_version_status" AS ENUM('draft', 'published');
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
  
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "journeys_id" uuid;
  DO $$ BEGIN
   ALTER TABLE "_journeys_v" ADD CONSTRAINT "_journeys_v_parent_id_journeys_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."journeys"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
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
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_journeys_fk" FOREIGN KEY ("journeys_id") REFERENCES "public"."journeys"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_journeys_id_idx" ON "payload_locked_documents_rels" USING btree ("journeys_id");`)
}
