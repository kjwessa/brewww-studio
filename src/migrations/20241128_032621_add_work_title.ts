import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   CREATE TYPE "public"."enum_work_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__work_v_version_status" AS ENUM('draft', 'published');
  CREATE TABLE IF NOT EXISTS "work" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"title" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_work_status" DEFAULT 'draft'
  );
  
  CREATE TABLE IF NOT EXISTS "_work_v" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"parent_id" uuid,
  	"version_title" varchar,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__work_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "work_id" uuid;
  DO $$ BEGIN
   ALTER TABLE "_work_v" ADD CONSTRAINT "_work_v_parent_id_work_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."work"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE UNIQUE INDEX IF NOT EXISTS "work_title_idx" ON "work" USING btree ("title");
  CREATE INDEX IF NOT EXISTS "work_updated_at_idx" ON "work" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "work_created_at_idx" ON "work" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "work__status_idx" ON "work" USING btree ("_status");
  CREATE INDEX IF NOT EXISTS "_work_v_parent_idx" ON "_work_v" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_work_v_version_version_title_idx" ON "_work_v" USING btree ("version_title");
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
  
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_work_id_idx" ON "payload_locked_documents_rels" USING btree ("work_id");`)
}

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   ALTER TABLE "work" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_work_v" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "work" CASCADE;
  DROP TABLE "_work_v" CASCADE;
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_work_fk";
  
  DROP INDEX IF EXISTS "payload_locked_documents_rels_work_id_idx";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "work_id";
  DROP TYPE "public"."enum_work_status";
  DROP TYPE "public"."enum__work_v_version_status";`)
}
