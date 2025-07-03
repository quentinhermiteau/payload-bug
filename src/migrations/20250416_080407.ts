import { MigrateDownArgs, MigrateUpArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TYPE "public"."enum_pages_blocks_radd_title_image_content_picto_color" ADD VALUE 'orange';
  ALTER TYPE "public"."enum__pages_v_blocks_radd_title_image_content_picto_color" ADD VALUE 'orange';`)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "public"."pages_blocks_radd_title_image" ALTER COLUMN "content_picto_color" SET DATA TYPE text;
  DROP TYPE "public"."enum_pages_blocks_radd_title_image_content_picto_color";
  CREATE TYPE "public"."enum_pages_blocks_radd_title_image_content_picto_color" AS ENUM('blue', 'light-blue', 'green', 'light-green', 'fluo-green', 'pink');
  ALTER TABLE "public"."pages_blocks_radd_title_image" ALTER COLUMN "content_picto_color" SET DATA TYPE "public"."enum_pages_blocks_radd_title_image_content_picto_color" USING "content_picto_color"::"public"."enum_pages_blocks_radd_title_image_content_picto_color";
  ALTER TABLE "public"."_pages_v_blocks_radd_title_image" ALTER COLUMN "content_picto_color" SET DATA TYPE text;
  DROP TYPE "public"."enum__pages_v_blocks_radd_title_image_content_picto_color";
  CREATE TYPE "public"."enum__pages_v_blocks_radd_title_image_content_picto_color" AS ENUM('blue', 'light-blue', 'green', 'light-green', 'fluo-green', 'pink');
  ALTER TABLE "public"."_pages_v_blocks_radd_title_image" ALTER COLUMN "content_picto_color" SET DATA TYPE "public"."enum__pages_v_blocks_radd_title_image_content_picto_color" USING "content_picto_color"::"public"."enum__pages_v_blocks_radd_title_image_content_picto_color";`)
}
