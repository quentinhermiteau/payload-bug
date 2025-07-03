import { MigrateDownArgs, MigrateUpArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TYPE "public"."enum_pages_blocks_radd_image_leaf_items_color" ADD VALUE IF NOT EXISTS '#FBB900';
  ALTER TYPE "public"."enum__pages_v_blocks_radd_image_leaf_items_color" ADD VALUE IF NOT EXISTS '#FBB900';`)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
  ALTER TABLE "public"."pages_blocks_radd_image_leaf_items_locales" ALTER COLUMN "color" SET DATA TYPE text;
  DROP TYPE "public"."enum_pages_blocks_radd_image_leaf_items_color";
  CREATE TYPE "public"."enum_pages_blocks_radd_image_leaf_items_color" AS ENUM('#0A0082', '#23AFE5', '#008874', '#75B726', '#D41764');
  ALTER TABLE "public"."pages_blocks_radd_image_leaf_items_locales" ALTER COLUMN "color" SET DATA TYPE "public"."enum_pages_blocks_radd_image_leaf_items_color" USING "color"::"public"."enum_pages_blocks_radd_image_leaf_items_color";
  ALTER TABLE "public"."_pages_v_blocks_radd_image_leaf_items_locales" ALTER COLUMN "color" SET DATA TYPE text;
  DROP TYPE "public"."enum__pages_v_blocks_radd_image_leaf_items_color";
  CREATE TYPE "public"."enum__pages_v_blocks_radd_image_leaf_items_color" AS ENUM('#0A0082', '#23AFE5', '#008874', '#75B726', '#D41764');
  ALTER TABLE "public"."_pages_v_blocks_radd_image_leaf_items_locales" ALTER COLUMN "color" SET DATA TYPE "public"."enum__pages_v_blocks_radd_image_leaf_items_color" USING "color"::"public"."enum__pages_v_blocks_radd_image_leaf_items_color";`)
}
