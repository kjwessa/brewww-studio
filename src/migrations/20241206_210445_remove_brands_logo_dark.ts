import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ payload }: MigrateUpArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
    DO $$ 
    BEGIN
      -- Drop constraints if they exist
      IF EXISTS (
        SELECT 1 
        FROM information_schema.table_constraints 
        WHERE constraint_name = 'brands_logo_dark_id_media_id_fk'
      ) THEN
        ALTER TABLE "brands" DROP CONSTRAINT "brands_logo_dark_id_media_id_fk";
      END IF;

      IF EXISTS (
        SELECT 1 
        FROM information_schema.table_constraints 
        WHERE constraint_name = '_brands_v_version_logo_dark_id_media_id_fk'
      ) THEN
        ALTER TABLE "_brands_v" DROP CONSTRAINT "_brands_v_version_logo_dark_id_media_id_fk";
      END IF;
  
      -- Drop indexes
      DROP INDEX IF EXISTS "brands_logo_dark_idx";
      DROP INDEX IF EXISTS "_brands_v_version_version_logo_dark_idx";
      
      -- Drop columns
      ALTER TABLE "brands" DROP COLUMN IF EXISTS "logo_dark_id";
      ALTER TABLE "_brands_v" DROP COLUMN IF EXISTS "version_logo_dark_id";
    END $$;
  `)
}

export async function down({ payload }: MigrateDownArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
    DO $$ 
    BEGIN
      -- Only add columns if they don't exist
      IF NOT EXISTS (
        SELECT 1 
        FROM information_schema.columns 
        WHERE table_name = 'brands' 
        AND column_name = 'logo_dark_id'
      ) THEN
        ALTER TABLE "brands" ADD COLUMN "logo_dark_id" uuid;
        ALTER TABLE "_brands_v" ADD COLUMN "version_logo_dark_id" uuid;

        -- Add constraints
        ALTER TABLE "brands" 
          ADD CONSTRAINT "brands_logo_dark_id_media_id_fk" 
          FOREIGN KEY ("logo_dark_id") 
          REFERENCES "public"."media"("id") 
          ON DELETE set null 
          ON UPDATE no action;

        ALTER TABLE "_brands_v" 
          ADD CONSTRAINT "_brands_v_version_logo_dark_id_media_id_fk" 
          FOREIGN KEY ("version_logo_dark_id") 
          REFERENCES "public"."media"("id") 
          ON DELETE set null 
          ON UPDATE no action;

        -- Create indexes
        CREATE INDEX "brands_logo_dark_idx" 
          ON "brands" USING btree ("logo_dark_id");
        CREATE INDEX "_brands_v_version_version_logo_dark_idx" 
          ON "_brands_v" USING btree ("version_logo_dark_id");
      END IF;
    END $$;
  `)
}
