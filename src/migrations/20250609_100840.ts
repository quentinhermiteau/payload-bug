import { MigrateDownArgs, MigrateUpArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_footer_blocks_link_2_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_footer_blocks_link_2_position_icon" AS ENUM('left', 'right');
  CREATE TABLE IF NOT EXISTS "footer_blocks_link_2" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_footer_blocks_link_2_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar NOT NULL,
  	"icon" varchar,
  	"position_icon" "enum_footer_blocks_link_2_position_icon",
  	"block_name" varchar
  );
  
  DO $$ BEGIN
   ALTER TABLE "footer_blocks_link_2" ADD CONSTRAINT "footer_blocks_link_2_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "footer_blocks_link_2_order_idx" ON "footer_blocks_link_2" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "footer_blocks_link_2_parent_id_idx" ON "footer_blocks_link_2" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "footer_blocks_link_2_path_idx" ON "footer_blocks_link_2" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "footer_blocks_link_2_locale_idx" ON "footer_blocks_link_2" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "footer_blocks_link_2_icon_idx" ON "footer_blocks_link_2" USING btree ("icon");`)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "footer_blocks_link_2" CASCADE;
  DROP TYPE "public"."enum_footer_blocks_link_2_link_type";
  DROP TYPE "public"."enum_footer_blocks_link_2_position_icon";`)
}
