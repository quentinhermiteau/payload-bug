import { MigrateDownArgs, MigrateUpArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_title_image_locales" ADD COLUMN IF NOT EXISTS "realisation_text" varchar;
  ALTER TABLE "_pages_v_blocks_title_image_locales" ADD COLUMN IF NOT EXISTS "realisation_text" varchar;
  ALTER TABLE "pages_blocks_title_image" DROP COLUMN IF EXISTS "realisation_text";
  ALTER TABLE "_pages_v_blocks_title_image" DROP COLUMN IF EXISTS "realisation_text";`)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_title_image" ADD COLUMN "realisation_text" varchar;
  ALTER TABLE "_pages_v_blocks_title_image" ADD COLUMN "realisation_text" varchar;
  ALTER TABLE "pages_blocks_title_image_locales" DROP COLUMN IF EXISTS "realisation_text";
  ALTER TABLE "_pages_v_blocks_title_image_locales" DROP COLUMN IF EXISTS "realisation_text";`)
}
