import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE IF NOT EXISTS "pages_blocks_landing_work" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"date" varchar DEFAULT '2024',
  	"section_title" varchar DEFAULT 'Work',
  	"description" varchar DEFAULT 'We help brands grow by crafting digital experiences that connect with people.',
  	"view_all_text" varchar DEFAULT 'View All',
  	"view_all_link" varchar DEFAULT '/work',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_landing_work" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"date" varchar DEFAULT '2024',
  	"section_title" varchar DEFAULT 'Work',
  	"description" varchar DEFAULT 'We help brands grow by crafting digital experiences that connect with people.',
  	"view_all_text" varchar DEFAULT 'View All',
  	"view_all_link" varchar DEFAULT '/work',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  ALTER TABLE "pages_rels" ADD COLUMN "projects_id" uuid;
  ALTER TABLE "_pages_v_rels" ADD COLUMN "projects_id" uuid;
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_landing_work" ADD CONSTRAINT "pages_blocks_landing_work_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_landing_work" ADD CONSTRAINT "_pages_v_blocks_landing_work_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "pages_blocks_landing_work_order_idx" ON "pages_blocks_landing_work" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_landing_work_parent_id_idx" ON "pages_blocks_landing_work" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_landing_work_path_idx" ON "pages_blocks_landing_work" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_landing_work_order_idx" ON "_pages_v_blocks_landing_work" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_landing_work_parent_id_idx" ON "_pages_v_blocks_landing_work" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_landing_work_path_idx" ON "_pages_v_blocks_landing_work" USING btree ("_path");
  DO $$ BEGIN
   ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_projects_fk" FOREIGN KEY ("projects_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_projects_fk" FOREIGN KEY ("projects_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "pages_rels_projects_id_idx" ON "pages_rels" USING btree ("projects_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_rels_projects_id_idx" ON "_pages_v_rels" USING btree ("projects_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_landing_work" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_landing_work" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "pages_blocks_landing_work" CASCADE;
  DROP TABLE "_pages_v_blocks_landing_work" CASCADE;
  ALTER TABLE "pages_rels" DROP CONSTRAINT "pages_rels_projects_fk";
  
  ALTER TABLE "_pages_v_rels" DROP CONSTRAINT "_pages_v_rels_projects_fk";
  
  DROP INDEX IF EXISTS "pages_rels_projects_id_idx";
  DROP INDEX IF EXISTS "_pages_v_rels_projects_id_idx";
  ALTER TABLE "pages_rels" DROP COLUMN IF EXISTS "projects_id";
  ALTER TABLE "_pages_v_rels" DROP COLUMN IF EXISTS "projects_id";`)
}
