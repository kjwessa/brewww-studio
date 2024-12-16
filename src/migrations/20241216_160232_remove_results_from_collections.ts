import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "results" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_results_v" DISABLE ROW LEVEL SECURITY;
  DROP TABLE IF EXISTS "results" CASCADE;
  DROP TABLE IF EXISTS "_results_v" CASCADE;
  
  DO $$ 
  BEGIN
    IF EXISTS (
      SELECT 1 FROM pg_constraint 
      WHERE conname = 'payload_locked_documents_rels_results_fk'
    ) THEN
      ALTER TABLE "payload_locked_documents_rels" 
      DROP CONSTRAINT "payload_locked_documents_rels_results_fk";
    END IF;
  END $$;
  
  DROP INDEX IF EXISTS "payload_locked_documents_rels_results_id_idx";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "results_id";
  DROP TYPE IF EXISTS "public"."enum_results_status";
  DROP TYPE IF EXISTS "public"."enum__results_v_version_status";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_results_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__results_v_version_status" AS ENUM('draft', 'published');
  CREATE TABLE IF NOT EXISTS "results" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"title" varchar,
  	"client_id" uuid,
  	"number" varchar,
  	"support" varchar,
  	"description" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_results_status" DEFAULT 'draft'
  );
  
  CREATE TABLE IF NOT EXISTS "_results_v" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"parent_id" uuid,
  	"version_title" varchar,
  	"version_client_id" uuid,
  	"version_number" varchar,
  	"version_support" varchar,
  	"version_description" varchar,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__results_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "results_id" uuid;
  DO $$ BEGIN
   ALTER TABLE "results" ADD CONSTRAINT "results_client_id_brands_id_fk" FOREIGN KEY ("client_id") REFERENCES "public"."brands"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_results_v" ADD CONSTRAINT "_results_v_parent_id_results_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."results"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_results_v" ADD CONSTRAINT "_results_v_version_client_id_brands_id_fk" FOREIGN KEY ("version_client_id") REFERENCES "public"."brands"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "results_client_idx" ON "results" USING btree ("client_id");
  CREATE INDEX IF NOT EXISTS "results_updated_at_idx" ON "results" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "results_created_at_idx" ON "results" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "results__status_idx" ON "results" USING btree ("_status");
  CREATE INDEX IF NOT EXISTS "_results_v_parent_idx" ON "_results_v" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_results_v_version_version_client_idx" ON "_results_v" USING btree ("version_client_id");
  CREATE INDEX IF NOT EXISTS "_results_v_version_version_updated_at_idx" ON "_results_v" USING btree ("version_updated_at");
  CREATE INDEX IF NOT EXISTS "_results_v_version_version_created_at_idx" ON "_results_v" USING btree ("version_created_at");
  CREATE INDEX IF NOT EXISTS "_results_v_version_version__status_idx" ON "_results_v" USING btree ("version__status");
  CREATE INDEX IF NOT EXISTS "_results_v_created_at_idx" ON "_results_v" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "_results_v_updated_at_idx" ON "_results_v" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "_results_v_latest_idx" ON "_results_v" USING btree ("latest");
  CREATE INDEX IF NOT EXISTS "_results_v_autosave_idx" ON "_results_v" USING btree ("autosave");
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_results_fk" FOREIGN KEY ("results_id") REFERENCES "public"."results"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_results_id_idx" ON "payload_locked_documents_rels" USING btree ("results_id");`)
}
