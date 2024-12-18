import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_before_after_slider_background_color" AS ENUM('bg-neutral-950', 'bg-white', 'bg-neutral-100');
  CREATE TYPE "public"."enum__pages_v_blocks_before_after_slider_background_color" AS ENUM('bg-neutral-950', 'bg-white', 'bg-neutral-100');
  CREATE TABLE IF NOT EXISTS "pages_blocks_before_after_slider" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"before_image_id" uuid,
  	"after_image_id" uuid,
  	"background_color" "enum_pages_blocks_before_after_slider_background_color" DEFAULT 'bg-neutral-950',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_before_after_slider" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"before_image_id" uuid,
  	"after_image_id" uuid,
  	"background_color" "enum__pages_v_blocks_before_after_slider_background_color" DEFAULT 'bg-neutral-950',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_before_after_slider" ADD CONSTRAINT "pages_blocks_before_after_slider_before_image_id_media_id_fk" FOREIGN KEY ("before_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_before_after_slider" ADD CONSTRAINT "pages_blocks_before_after_slider_after_image_id_media_id_fk" FOREIGN KEY ("after_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_before_after_slider" ADD CONSTRAINT "pages_blocks_before_after_slider_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_before_after_slider" ADD CONSTRAINT "_pages_v_blocks_before_after_slider_before_image_id_media_id_fk" FOREIGN KEY ("before_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_before_after_slider" ADD CONSTRAINT "_pages_v_blocks_before_after_slider_after_image_id_media_id_fk" FOREIGN KEY ("after_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_before_after_slider" ADD CONSTRAINT "_pages_v_blocks_before_after_slider_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "pages_blocks_before_after_slider_order_idx" ON "pages_blocks_before_after_slider" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_before_after_slider_parent_id_idx" ON "pages_blocks_before_after_slider" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_before_after_slider_path_idx" ON "pages_blocks_before_after_slider" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_before_after_slider_before_image_idx" ON "pages_blocks_before_after_slider" USING btree ("before_image_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_before_after_slider_after_image_idx" ON "pages_blocks_before_after_slider" USING btree ("after_image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_before_after_slider_order_idx" ON "_pages_v_blocks_before_after_slider" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_before_after_slider_parent_id_idx" ON "_pages_v_blocks_before_after_slider" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_before_after_slider_path_idx" ON "_pages_v_blocks_before_after_slider" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_before_after_slider_before_image_idx" ON "_pages_v_blocks_before_after_slider" USING btree ("before_image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_before_after_slider_after_image_idx" ON "_pages_v_blocks_before_after_slider" USING btree ("after_image_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_blocks_before_after_slider" CASCADE;
  DROP TABLE "_pages_v_blocks_before_after_slider" CASCADE;
  DROP TYPE "public"."enum_pages_blocks_before_after_slider_background_color";
  DROP TYPE "public"."enum__pages_v_blocks_before_after_slider_background_color";`)
}
