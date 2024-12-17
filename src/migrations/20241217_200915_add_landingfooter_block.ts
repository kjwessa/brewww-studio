import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE IF NOT EXISTS "pages_blocks_landing_footer_main_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"href" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_landing_footer_social_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"platform" varchar,
  	"href" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_landing_footer" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"consultation_text" varchar DEFAULT 'Interested in working with us? Schedule a free 30 minute consultation.',
  	"cta_text" varchar DEFAULT 'Let''''s Chat',
  	"cta_link" varchar DEFAULT 'https://go.brewww.studio/discovery',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_landing_footer_main_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"text" varchar,
  	"href" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_landing_footer_social_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"platform" varchar,
  	"href" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_landing_footer" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"consultation_text" varchar DEFAULT 'Interested in working with us? Schedule a free 30 minute consultation.',
  	"cta_text" varchar DEFAULT 'Let''''s Chat',
  	"cta_link" varchar DEFAULT 'https://go.brewww.studio/discovery',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_landing_footer_main_links" ADD CONSTRAINT "pages_blocks_landing_footer_main_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_landing_footer"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_landing_footer_social_links" ADD CONSTRAINT "pages_blocks_landing_footer_social_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_landing_footer"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_landing_footer" ADD CONSTRAINT "pages_blocks_landing_footer_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_landing_footer_main_links" ADD CONSTRAINT "_pages_v_blocks_landing_footer_main_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_landing_footer"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_landing_footer_social_links" ADD CONSTRAINT "_pages_v_blocks_landing_footer_social_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_landing_footer"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_landing_footer" ADD CONSTRAINT "_pages_v_blocks_landing_footer_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "pages_blocks_landing_footer_main_links_order_idx" ON "pages_blocks_landing_footer_main_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_landing_footer_main_links_parent_id_idx" ON "pages_blocks_landing_footer_main_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_landing_footer_social_links_order_idx" ON "pages_blocks_landing_footer_social_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_landing_footer_social_links_parent_id_idx" ON "pages_blocks_landing_footer_social_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_landing_footer_order_idx" ON "pages_blocks_landing_footer" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_landing_footer_parent_id_idx" ON "pages_blocks_landing_footer" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_landing_footer_path_idx" ON "pages_blocks_landing_footer" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_landing_footer_main_links_order_idx" ON "_pages_v_blocks_landing_footer_main_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_landing_footer_main_links_parent_id_idx" ON "_pages_v_blocks_landing_footer_main_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_landing_footer_social_links_order_idx" ON "_pages_v_blocks_landing_footer_social_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_landing_footer_social_links_parent_id_idx" ON "_pages_v_blocks_landing_footer_social_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_landing_footer_order_idx" ON "_pages_v_blocks_landing_footer" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_landing_footer_parent_id_idx" ON "_pages_v_blocks_landing_footer" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_landing_footer_path_idx" ON "_pages_v_blocks_landing_footer" USING btree ("_path");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_blocks_landing_footer_main_links" CASCADE;
  DROP TABLE "pages_blocks_landing_footer_social_links" CASCADE;
  DROP TABLE "pages_blocks_landing_footer" CASCADE;
  DROP TABLE "_pages_v_blocks_landing_footer_main_links" CASCADE;
  DROP TABLE "_pages_v_blocks_landing_footer_social_links" CASCADE;
  DROP TABLE "_pages_v_blocks_landing_footer" CASCADE;`)
}
