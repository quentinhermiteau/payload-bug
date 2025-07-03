import { MigrateDownArgs, MigrateUpArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
  ALTER TABLE "pages" ADD COLUMN "type" "enum_pages_type";
  ALTER TABLE "_pages_v" ADD COLUMN "version_type" "enum__pages_v_version_type";`)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages" DROP COLUMN IF EXISTS "type";
  ALTER TABLE "_pages_v" DROP COLUMN IF EXISTS "version_type";`)
}
