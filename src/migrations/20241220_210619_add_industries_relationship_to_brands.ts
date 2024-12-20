import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "brands" ADD COLUMN "industry_id" uuid;
  ALTER TABLE "_brands_v" ADD COLUMN "version_industry_id" uuid;
  DO $$ BEGIN
   ALTER TABLE "brands" ADD CONSTRAINT "brands_industry_id_industries_id_fk" FOREIGN KEY ("industry_id") REFERENCES "public"."industries"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_brands_v" ADD CONSTRAINT "_brands_v_version_industry_id_industries_id_fk" FOREIGN KEY ("version_industry_id") REFERENCES "public"."industries"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "brands_industry_idx" ON "brands" USING btree ("industry_id");
  CREATE INDEX IF NOT EXISTS "_brands_v_version_version_industry_idx" ON "_brands_v" USING btree ("version_industry_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "brands" DROP CONSTRAINT "brands_industry_id_industries_id_fk";
  
  ALTER TABLE "_brands_v" DROP CONSTRAINT "_brands_v_version_industry_id_industries_id_fk";
  
  DROP INDEX IF EXISTS "brands_industry_idx";
  DROP INDEX IF EXISTS "_brands_v_version_version_industry_idx";
  ALTER TABLE "brands" DROP COLUMN IF EXISTS "industry_id";
  ALTER TABLE "_brands_v" DROP COLUMN IF EXISTS "version_industry_id";`)
}
