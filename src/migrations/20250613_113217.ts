import { MigrateDownArgs, MigrateUpArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_button_position" AS ENUM('left', 'center', 'right');
  CREATE TYPE "public"."enum__pages_v_blocks_button_position" AS ENUM('left', 'center', 'right');
  CREATE TYPE "public"."enum_header_blocks_button_position" AS ENUM('left', 'center', 'right');
  CREATE TYPE "public"."enum_footer_blocks_button_position" AS ENUM('left', 'center', 'right');
  ALTER TABLE "pages_blocks_button" ADD COLUMN "position" "enum_pages_blocks_button_position" DEFAULT 'left';
  ALTER TABLE "_pages_v_blocks_button" ADD COLUMN "position" "enum__pages_v_blocks_button_position" DEFAULT 'left';
  ALTER TABLE "header_blocks_button" ADD COLUMN "position" "enum_header_blocks_button_position" DEFAULT 'left' NOT NULL;
  ALTER TABLE "footer_blocks_button" ADD COLUMN "position" "enum_footer_blocks_button_position" DEFAULT 'left' NOT NULL;`)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_button" DROP COLUMN IF EXISTS "position";
  ALTER TABLE "_pages_v_blocks_button" DROP COLUMN IF EXISTS "position";
  ALTER TABLE "header_blocks_button" DROP COLUMN IF EXISTS "position";
  ALTER TABLE "footer_blocks_button" DROP COLUMN IF EXISTS "position";
  DROP TYPE "public"."enum_pages_blocks_button_position";
  DROP TYPE "public"."enum__pages_v_blocks_button_position";
  DROP TYPE "public"."enum_header_blocks_button_position";
  DROP TYPE "public"."enum_footer_blocks_button_position";`)
}
