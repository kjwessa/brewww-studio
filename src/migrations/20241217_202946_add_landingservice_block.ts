import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE IF NOT EXISTS "pages_blocks_landing_service_services_tools" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_landing_service_services" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"service_name" varchar,
  	"description" varchar,
  	"main_image_id" uuid,
  	"hover_image_id" uuid
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_landing_service" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_landing_service_services_tools" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"name" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_landing_service_services" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"_uuid" varchar,
  	"service_name" varchar,
  	"description" varchar,
  	"main_image_id" uuid,
  	"hover_image_id" uuid
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_landing_service" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_landing_service_services_tools" ADD CONSTRAINT "pages_blocks_landing_service_services_tools_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_landing_service_services"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_landing_service_services" ADD CONSTRAINT "pages_blocks_landing_service_services_main_image_id_media_id_fk" FOREIGN KEY ("main_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_landing_service_services" ADD CONSTRAINT "pages_blocks_landing_service_services_hover_image_id_media_id_fk" FOREIGN KEY ("hover_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_landing_service_services" ADD CONSTRAINT "pages_blocks_landing_service_services_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_landing_service"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_landing_service" ADD CONSTRAINT "pages_blocks_landing_service_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_landing_service_services_tools" ADD CONSTRAINT "_pages_v_blocks_landing_service_services_tools_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_landing_service_services"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_landing_service_services" ADD CONSTRAINT "_pages_v_blocks_landing_service_services_main_image_id_media_id_fk" FOREIGN KEY ("main_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_landing_service_services" ADD CONSTRAINT "_pages_v_blocks_landing_service_services_hover_image_id_media_id_fk" FOREIGN KEY ("hover_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_landing_service_services" ADD CONSTRAINT "_pages_v_blocks_landing_service_services_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_landing_service"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_landing_service" ADD CONSTRAINT "_pages_v_blocks_landing_service_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "pages_blocks_landing_service_services_tools_order_idx" ON "pages_blocks_landing_service_services_tools" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_landing_service_services_tools_parent_id_idx" ON "pages_blocks_landing_service_services_tools" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_landing_service_services_order_idx" ON "pages_blocks_landing_service_services" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_landing_service_services_parent_id_idx" ON "pages_blocks_landing_service_services" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_landing_service_services_main_image_idx" ON "pages_blocks_landing_service_services" USING btree ("main_image_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_landing_service_services_hover_image_idx" ON "pages_blocks_landing_service_services" USING btree ("hover_image_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_landing_service_order_idx" ON "pages_blocks_landing_service" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_landing_service_parent_id_idx" ON "pages_blocks_landing_service" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_landing_service_path_idx" ON "pages_blocks_landing_service" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_landing_service_services_tools_order_idx" ON "_pages_v_blocks_landing_service_services_tools" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_landing_service_services_tools_parent_id_idx" ON "_pages_v_blocks_landing_service_services_tools" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_landing_service_services_order_idx" ON "_pages_v_blocks_landing_service_services" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_landing_service_services_parent_id_idx" ON "_pages_v_blocks_landing_service_services" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_landing_service_services_main_image_idx" ON "_pages_v_blocks_landing_service_services" USING btree ("main_image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_landing_service_services_hover_image_idx" ON "_pages_v_blocks_landing_service_services" USING btree ("hover_image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_landing_service_order_idx" ON "_pages_v_blocks_landing_service" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_landing_service_parent_id_idx" ON "_pages_v_blocks_landing_service" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_landing_service_path_idx" ON "_pages_v_blocks_landing_service" USING btree ("_path");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_blocks_landing_service_services_tools" CASCADE;
  DROP TABLE "pages_blocks_landing_service_services" CASCADE;
  DROP TABLE "pages_blocks_landing_service" CASCADE;
  DROP TABLE "_pages_v_blocks_landing_service_services_tools" CASCADE;
  DROP TABLE "_pages_v_blocks_landing_service_services" CASCADE;
  DROP TABLE "_pages_v_blocks_landing_service" CASCADE;`)
}
