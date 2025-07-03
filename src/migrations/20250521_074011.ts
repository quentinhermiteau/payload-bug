import { MigrateDownArgs, MigrateUpArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_card_horizontal_locales" ADD COLUMN IF NOT EXISTS "tag" varchar;
  ALTER TABLE "pages_blocks_card_horizontal_locales" ADD COLUMN IF NOT EXISTS "title" varchar;
  ALTER TABLE "pages_blocks_image_card_card_content_locales" ADD COLUMN IF NOT EXISTS "title" varchar;
  ALTER TABLE "_pages_v_blocks_card_horizontal_locales" ADD COLUMN IF NOT EXISTS "tag" varchar;
  ALTER TABLE "_pages_v_blocks_card_horizontal_locales" ADD COLUMN IF NOT EXISTS "title" varchar;
  ALTER TABLE "_pages_v_blocks_image_card_card_content_locales" ADD COLUMN IF NOT EXISTS "title" varchar;
  ALTER TABLE "pages_blocks_card_horizontal" DROP COLUMN IF EXISTS "tag";
  ALTER TABLE "pages_blocks_card_horizontal" DROP COLUMN IF EXISTS "title";
  ALTER TABLE "pages_blocks_image_card_card_content" DROP COLUMN IF EXISTS "title";
  ALTER TABLE "_pages_v_blocks_card_horizontal" DROP COLUMN IF EXISTS "tag";
  ALTER TABLE "_pages_v_blocks_card_horizontal" DROP COLUMN IF EXISTS "title";
  ALTER TABLE "_pages_v_blocks_image_card_card_content" DROP COLUMN IF EXISTS "title";`)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_card_horizontal" ADD COLUMN "tag" varchar;
  ALTER TABLE "pages_blocks_card_horizontal" ADD COLUMN "title" varchar;
  ALTER TABLE "pages_blocks_image_card_card_content" ADD COLUMN "title" varchar;
  ALTER TABLE "_pages_v_blocks_card_horizontal" ADD COLUMN "tag" varchar;
  ALTER TABLE "_pages_v_blocks_card_horizontal" ADD COLUMN "title" varchar;
  ALTER TABLE "_pages_v_blocks_image_card_card_content" ADD COLUMN "title" varchar;
  ALTER TABLE "pages_blocks_card_horizontal_locales" DROP COLUMN IF EXISTS "tag";
  ALTER TABLE "pages_blocks_card_horizontal_locales" DROP COLUMN IF EXISTS "title";
  ALTER TABLE "pages_blocks_image_card_card_content_locales" DROP COLUMN IF EXISTS "title";
  ALTER TABLE "_pages_v_blocks_card_horizontal_locales" DROP COLUMN IF EXISTS "tag";
  ALTER TABLE "_pages_v_blocks_card_horizontal_locales" DROP COLUMN IF EXISTS "title";
  ALTER TABLE "_pages_v_blocks_image_card_card_content_locales" DROP COLUMN IF EXISTS "title";`)
}
