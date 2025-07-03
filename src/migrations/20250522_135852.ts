import { MigrateDownArgs, MigrateUpArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_list_locales" ADD COLUMN IF NOT EXISTS "title" jsonb;
  ALTER TABLE "pages_blocks_list_locales" ADD COLUMN IF NOT EXISTS "description" jsonb;
  ALTER TABLE "_pages_v_blocks_list_locales" ADD COLUMN IF NOT EXISTS "title" jsonb;
  ALTER TABLE "_pages_v_blocks_list_locales" ADD COLUMN IF NOT EXISTS "description" jsonb;
  ALTER TABLE "footer_blocks_list_locales" ADD COLUMN IF NOT EXISTS "title" jsonb;
  ALTER TABLE "footer_blocks_list_locales" ADD COLUMN IF NOT EXISTS "description" jsonb;`)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_list_locales" DROP COLUMN IF EXISTS "title";
  ALTER TABLE "pages_blocks_list_locales" DROP COLUMN IF EXISTS "description";
  ALTER TABLE "_pages_v_blocks_list_locales" DROP COLUMN IF EXISTS "title";
  ALTER TABLE "_pages_v_blocks_list_locales" DROP COLUMN IF EXISTS "description";
  ALTER TABLE "footer_blocks_list_locales" DROP COLUMN IF EXISTS "title";
  ALTER TABLE "footer_blocks_list_locales" DROP COLUMN IF EXISTS "description";`)
}
