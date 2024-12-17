import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE IF NOT EXISTS "pages_blocks_landing_image" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" uuid,
  	"alt" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_landing_image" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"image_id" uuid,
  	"alt" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_landing_image" ADD CONSTRAINT "pages_blocks_landing_image_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_landing_image" ADD CONSTRAINT "pages_blocks_landing_image_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_landing_image" ADD CONSTRAINT "_pages_v_blocks_landing_image_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_landing_image" ADD CONSTRAINT "_pages_v_blocks_landing_image_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "pages_blocks_landing_image_order_idx" ON "pages_blocks_landing_image" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_landing_image_parent_id_idx" ON "pages_blocks_landing_image" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_landing_image_path_idx" ON "pages_blocks_landing_image" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_landing_image_image_idx" ON "pages_blocks_landing_image" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_landing_image_order_idx" ON "_pages_v_blocks_landing_image" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_landing_image_parent_id_idx" ON "_pages_v_blocks_landing_image" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_landing_image_path_idx" ON "_pages_v_blocks_landing_image" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_landing_image_image_idx" ON "_pages_v_blocks_landing_image" USING btree ("image_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_blocks_landing_image" CASCADE;
  DROP TABLE "_pages_v_blocks_landing_image" CASCADE;`)
}
