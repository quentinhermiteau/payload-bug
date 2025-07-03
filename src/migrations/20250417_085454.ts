import { MigrateDownArgs, MigrateUpArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_card_horizontal_primary_color" AS ENUM('bg-primary-500', 'bg-secondary-400', 'bg-white', 'bg-secondary-200', 'bg-secondary-100', 'bg-tertiary-yellow');
  CREATE TYPE "public"."enum_pages_blocks_card_horizontal_secondary_color" AS ENUM('primary-500', 'primary-200', 'secondary-100', 'tertiary-red', 'secondary-500', 'secondary-400', 'tertiary-yellow');
  CREATE TYPE "public"."enum__pages_v_blocks_card_horizontal_primary_color" AS ENUM('bg-primary-500', 'bg-secondary-400', 'bg-white', 'bg-secondary-200', 'bg-secondary-100', 'bg-tertiary-yellow');
  CREATE TYPE "public"."enum__pages_v_blocks_card_horizontal_secondary_color" AS ENUM('primary-500', 'primary-200', 'secondary-100', 'tertiary-red', 'secondary-500', 'secondary-400', 'tertiary-yellow');
  CREATE TABLE IF NOT EXISTS "pages_blocks_card_horizontal" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"primary_color" "enum_pages_blocks_card_horizontal_primary_color" DEFAULT 'bg-primary-500',
  	"secondary_color" "enum_pages_blocks_card_horizontal_secondary_color" DEFAULT 'tertiary-yellow',
  	"image_id" integer,
  	"tag" varchar,
  	"title" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_card_horizontal_locales" (
  	"description" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_card_horizontal" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"primary_color" "enum__pages_v_blocks_card_horizontal_primary_color" DEFAULT 'bg-primary-500',
  	"secondary_color" "enum__pages_v_blocks_card_horizontal_secondary_color" DEFAULT 'tertiary-yellow',
  	"image_id" integer,
  	"tag" varchar,
  	"title" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_card_horizontal_locales" (
  	"description" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_card_horizontal" ADD CONSTRAINT "pages_blocks_card_horizontal_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_card_horizontal" ADD CONSTRAINT "pages_blocks_card_horizontal_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_card_horizontal_locales" ADD CONSTRAINT "pages_blocks_card_horizontal_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_card_horizontal"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_card_horizontal" ADD CONSTRAINT "_pages_v_blocks_card_horizontal_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_card_horizontal" ADD CONSTRAINT "_pages_v_blocks_card_horizontal_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_card_horizontal_locales" ADD CONSTRAINT "_pages_v_blocks_card_horizontal_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_card_horizontal"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "pages_blocks_card_horizontal_order_idx" ON "pages_blocks_card_horizontal" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_card_horizontal_parent_id_idx" ON "pages_blocks_card_horizontal" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_card_horizontal_path_idx" ON "pages_blocks_card_horizontal" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_card_horizontal_image_idx" ON "pages_blocks_card_horizontal" USING btree ("image_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "pages_blocks_card_horizontal_locales_locale_parent_id_unique" ON "pages_blocks_card_horizontal_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_card_horizontal_order_idx" ON "_pages_v_blocks_card_horizontal" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_card_horizontal_parent_id_idx" ON "_pages_v_blocks_card_horizontal" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_card_horizontal_path_idx" ON "_pages_v_blocks_card_horizontal" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_card_horizontal_image_idx" ON "_pages_v_blocks_card_horizontal" USING btree ("image_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "_pages_v_blocks_card_horizontal_locales_locale_parent_id_unique" ON "_pages_v_blocks_card_horizontal_locales" USING btree ("_locale","_parent_id");`)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_blocks_card_horizontal" CASCADE;
  DROP TABLE "pages_blocks_card_horizontal_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_card_horizontal" CASCADE;
  DROP TABLE "_pages_v_blocks_card_horizontal_locales" CASCADE;
  DROP TYPE "public"."enum_pages_blocks_card_horizontal_primary_color";
  DROP TYPE "public"."enum_pages_blocks_card_horizontal_secondary_color";
  DROP TYPE "public"."enum__pages_v_blocks_card_horizontal_primary_color";
  DROP TYPE "public"."enum__pages_v_blocks_card_horizontal_secondary_color";`)
}
