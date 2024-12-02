import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   ALTER TABLE "brands" DROP CONSTRAINT "brands_logo_dark_id_media_id_fk";
  
  ALTER TABLE "_brands_v" DROP CONSTRAINT "_brands_v_version_logo_dark_id_media_id_fk";
  
  DROP INDEX IF EXISTS "brands_logo_dark_idx";
  DROP INDEX IF EXISTS "_brands_v_version_version_logo_dark_idx";
  ALTER TABLE "brands" DROP COLUMN IF EXISTS "logo_dark_id";
  ALTER TABLE "_brands_v" DROP COLUMN IF EXISTS "version_logo_dark_id";`)
}

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   ALTER TABLE "brands" ADD COLUMN "logo_dark_id" uuid;
  ALTER TABLE "_brands_v" ADD COLUMN "version_logo_dark_id" uuid;
  DO $$ BEGIN
   ALTER TABLE "brands" ADD CONSTRAINT "brands_logo_dark_id_media_id_fk" FOREIGN KEY ("logo_dark_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_brands_v" ADD CONSTRAINT "_brands_v_version_logo_dark_id_media_id_fk" FOREIGN KEY ("version_logo_dark_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "brands_logo_dark_idx" ON "brands" USING btree ("logo_dark_id");
  CREATE INDEX IF NOT EXISTS "_brands_v_version_version_logo_dark_idx" ON "_brands_v" USING btree ("version_logo_dark_id");`)
}
