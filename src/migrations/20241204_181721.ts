import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   ALTER TABLE "locations" RENAME COLUMN "location" TO "location_city";
  ALTER TABLE "_locations_v" RENAME COLUMN "version_location" TO "version_location_city";
  ALTER TABLE "locations" ADD COLUMN "location_state" varchar;
  ALTER TABLE "_locations_v" ADD COLUMN "version_location_state" varchar;`)
}

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   ALTER TABLE "locations" RENAME COLUMN "location_city" TO "location";
  ALTER TABLE "_locations_v" RENAME COLUMN "version_location_city" TO "version_location";
  ALTER TABLE "locations" DROP COLUMN IF EXISTS "location_state";
  ALTER TABLE "_locations_v" DROP COLUMN IF EXISTS "version_location_state";`)
}
