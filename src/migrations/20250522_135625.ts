import { MigrateDownArgs, MigrateUpArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_card_list_locales" ADD COLUMN IF NOT EXISTS "surtitle" varchar;
  ALTER TABLE "_pages_v_blocks_card_list_locales" ADD COLUMN IF NOT EXISTS "surtitle" varchar;
  ALTER TABLE "pages_blocks_card_list" DROP COLUMN IF EXISTS "surtitle";
  ALTER TABLE "_pages_v_blocks_card_list" DROP COLUMN IF EXISTS "surtitle";`)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_card_list" ADD COLUMN "surtitle" varchar;
  ALTER TABLE "_pages_v_blocks_card_list" ADD COLUMN "surtitle" varchar;
  ALTER TABLE "pages_blocks_card_list_locales" DROP COLUMN IF EXISTS "surtitle";
  ALTER TABLE "_pages_v_blocks_card_list_locales" DROP COLUMN IF EXISTS "surtitle";`)
}
