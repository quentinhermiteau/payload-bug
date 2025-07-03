import { MigrateDownArgs, MigrateUpArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_card_style" AS ENUM('square', 'rounded', 'partial');
  CREATE TYPE "public"."enum_pages_blocks_card_primary_color" AS ENUM('bg-primary-500', 'bg-secondary-400', 'bg-white', 'bg-secondary-200', 'bg-secondary-100', 'bg-tertiary-yellow');
  CREATE TYPE "public"."enum_pages_blocks_card_secondary_color" AS ENUM('primary-500', 'primary-200', 'secondary-100', 'tertiary-red', 'secondary-500', 'secondary-400', 'tertiary-yellow');
  CREATE TYPE "public"."enum_pages_blocks_card_position" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum_pages_blocks_card_list_position" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum__pages_v_blocks_card_style" AS ENUM('square', 'rounded', 'partial');
  CREATE TYPE "public"."enum__pages_v_blocks_card_primary_color" AS ENUM('bg-primary-500', 'bg-secondary-400', 'bg-white', 'bg-secondary-200', 'bg-secondary-100', 'bg-tertiary-yellow');
  CREATE TYPE "public"."enum__pages_v_blocks_card_secondary_color" AS ENUM('primary-500', 'primary-200', 'secondary-100', 'tertiary-red', 'secondary-500', 'secondary-400', 'tertiary-yellow');
  CREATE TYPE "public"."enum__pages_v_blocks_card_position" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum__pages_v_blocks_card_list_position" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum_footer_blocks_card_style" AS ENUM('square', 'rounded', 'partial');
  CREATE TYPE "public"."enum_footer_blocks_card_primary_color" AS ENUM('bg-primary-500', 'bg-secondary-400', 'bg-white', 'bg-secondary-200', 'bg-secondary-100', 'bg-tertiary-yellow');
  CREATE TYPE "public"."enum_footer_blocks_card_secondary_color" AS ENUM('primary-500', 'primary-200', 'secondary-100', 'tertiary-red', 'secondary-500', 'secondary-400', 'tertiary-yellow');
  CREATE TYPE "public"."enum_footer_blocks_card_position" AS ENUM('left', 'center');
  CREATE TABLE IF NOT EXISTS "pages_blocks_card" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"style" "enum_pages_blocks_card_style",
  	"primary_color" "enum_pages_blocks_card_primary_color" DEFAULT 'bg-primary-500',
  	"secondary_color" "enum_pages_blocks_card_secondary_color" DEFAULT 'tertiary-yellow',
  	"position" "enum_pages_blocks_card_position" DEFAULT 'left',
  	"image_id" integer,
  	"location_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_card_locales" (
  	"title" jsonb,
  	"description" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_card_list" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"position" "enum_pages_blocks_card_list_position" DEFAULT 'left',
  	"surtitle" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_card_list_locales" (
  	"title" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_card" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"style" "enum__pages_v_blocks_card_style",
  	"primary_color" "enum__pages_v_blocks_card_primary_color" DEFAULT 'bg-primary-500',
  	"secondary_color" "enum__pages_v_blocks_card_secondary_color" DEFAULT 'tertiary-yellow',
  	"position" "enum__pages_v_blocks_card_position" DEFAULT 'left',
  	"image_id" integer,
  	"location_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_card_locales" (
  	"title" jsonb,
  	"description" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_card_list" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"position" "enum__pages_v_blocks_card_list_position" DEFAULT 'left',
  	"surtitle" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_card_list_locales" (
  	"title" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "footer_blocks_list_list_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "footer_blocks_list_list_items_locales" (
  	"text" jsonb NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "footer_blocks_list" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "footer_blocks_list_locales" (
  	"asterisk" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "footer_blocks_card" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"style" "enum_footer_blocks_card_style" NOT NULL,
  	"primary_color" "enum_footer_blocks_card_primary_color" DEFAULT 'bg-primary-500' NOT NULL,
  	"secondary_color" "enum_footer_blocks_card_secondary_color" DEFAULT 'tertiary-yellow' NOT NULL,
  	"position" "enum_footer_blocks_card_position" DEFAULT 'left' NOT NULL,
  	"image_id" integer,
  	"location_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "footer_blocks_card_locales" (
  	"title" jsonb NOT NULL,
  	"description" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  DROP TABLE "pages_blocks_footer_card" CASCADE;
  DROP TABLE "pages_blocks_footer_card_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_footer_card" CASCADE;
  DROP TABLE "_pages_v_blocks_footer_card_locales" CASCADE;
  DROP TABLE "footer_blocks_footer_card" CASCADE;
  DROP TABLE "footer_blocks_footer_card_locales" CASCADE;
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_card" ADD CONSTRAINT "pages_blocks_card_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_card" ADD CONSTRAINT "pages_blocks_card_location_id_locations_id_fk" FOREIGN KEY ("location_id") REFERENCES "public"."locations"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_card" ADD CONSTRAINT "pages_blocks_card_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_card_locales" ADD CONSTRAINT "pages_blocks_card_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_card"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_card_list" ADD CONSTRAINT "pages_blocks_card_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_card_list_locales" ADD CONSTRAINT "pages_blocks_card_list_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_card_list"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_card" ADD CONSTRAINT "_pages_v_blocks_card_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_card" ADD CONSTRAINT "_pages_v_blocks_card_location_id_locations_id_fk" FOREIGN KEY ("location_id") REFERENCES "public"."locations"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_card" ADD CONSTRAINT "_pages_v_blocks_card_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_card_locales" ADD CONSTRAINT "_pages_v_blocks_card_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_card"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_card_list" ADD CONSTRAINT "_pages_v_blocks_card_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_card_list_locales" ADD CONSTRAINT "_pages_v_blocks_card_list_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_card_list"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "footer_blocks_list_list_items" ADD CONSTRAINT "footer_blocks_list_list_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer_blocks_list"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "footer_blocks_list_list_items_locales" ADD CONSTRAINT "footer_blocks_list_list_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer_blocks_list_list_items"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "footer_blocks_list" ADD CONSTRAINT "footer_blocks_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "footer_blocks_list_locales" ADD CONSTRAINT "footer_blocks_list_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer_blocks_list"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "footer_blocks_card" ADD CONSTRAINT "footer_blocks_card_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "footer_blocks_card" ADD CONSTRAINT "footer_blocks_card_location_id_locations_id_fk" FOREIGN KEY ("location_id") REFERENCES "public"."locations"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "footer_blocks_card" ADD CONSTRAINT "footer_blocks_card_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "footer_blocks_card_locales" ADD CONSTRAINT "footer_blocks_card_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer_blocks_card"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "pages_blocks_card_order_idx" ON "pages_blocks_card" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_card_parent_id_idx" ON "pages_blocks_card" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_card_path_idx" ON "pages_blocks_card" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_card_image_idx" ON "pages_blocks_card" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_card_location_idx" ON "pages_blocks_card" USING btree ("location_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "pages_blocks_card_locales_locale_parent_id_unique" ON "pages_blocks_card_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_card_list_order_idx" ON "pages_blocks_card_list" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_card_list_parent_id_idx" ON "pages_blocks_card_list" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_card_list_path_idx" ON "pages_blocks_card_list" USING btree ("_path");
  CREATE UNIQUE INDEX IF NOT EXISTS "pages_blocks_card_list_locales_locale_parent_id_unique" ON "pages_blocks_card_list_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_card_order_idx" ON "_pages_v_blocks_card" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_card_parent_id_idx" ON "_pages_v_blocks_card" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_card_path_idx" ON "_pages_v_blocks_card" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_card_image_idx" ON "_pages_v_blocks_card" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_card_location_idx" ON "_pages_v_blocks_card" USING btree ("location_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "_pages_v_blocks_card_locales_locale_parent_id_unique" ON "_pages_v_blocks_card_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_card_list_order_idx" ON "_pages_v_blocks_card_list" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_card_list_parent_id_idx" ON "_pages_v_blocks_card_list" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_card_list_path_idx" ON "_pages_v_blocks_card_list" USING btree ("_path");
  CREATE UNIQUE INDEX IF NOT EXISTS "_pages_v_blocks_card_list_locales_locale_parent_id_unique" ON "_pages_v_blocks_card_list_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "footer_blocks_list_list_items_order_idx" ON "footer_blocks_list_list_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "footer_blocks_list_list_items_parent_id_idx" ON "footer_blocks_list_list_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "footer_blocks_list_list_items_locales_locale_parent_id_unique" ON "footer_blocks_list_list_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "footer_blocks_list_order_idx" ON "footer_blocks_list" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "footer_blocks_list_parent_id_idx" ON "footer_blocks_list" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "footer_blocks_list_path_idx" ON "footer_blocks_list" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "footer_blocks_list_icon_idx" ON "footer_blocks_list" USING btree ("icon");
  CREATE UNIQUE INDEX IF NOT EXISTS "footer_blocks_list_locales_locale_parent_id_unique" ON "footer_blocks_list_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "footer_blocks_card_order_idx" ON "footer_blocks_card" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "footer_blocks_card_parent_id_idx" ON "footer_blocks_card" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "footer_blocks_card_path_idx" ON "footer_blocks_card" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "footer_blocks_card_image_idx" ON "footer_blocks_card" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "footer_blocks_card_location_idx" ON "footer_blocks_card" USING btree ("location_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "footer_blocks_card_locales_locale_parent_id_unique" ON "footer_blocks_card_locales" USING btree ("_locale","_parent_id");
  DROP TYPE "public"."enum_pages_blocks_footer_card_style";
  DROP TYPE "public"."enum_pages_blocks_footer_card_primary_color";
  DROP TYPE "public"."enum_pages_blocks_footer_card_secondary_color";
  DROP TYPE "public"."enum__pages_v_blocks_footer_card_style";
  DROP TYPE "public"."enum__pages_v_blocks_footer_card_primary_color";
  DROP TYPE "public"."enum__pages_v_blocks_footer_card_secondary_color";
  DROP TYPE "public"."enum_footer_blocks_footer_card_style";
  DROP TYPE "public"."enum_footer_blocks_footer_card_primary_color";
  DROP TYPE "public"."enum_footer_blocks_footer_card_secondary_color";`)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_footer_card_style" AS ENUM('Carré', 'Arrondi');
  CREATE TYPE "public"."enum_pages_blocks_footer_card_primary_color" AS ENUM('bg-primary-500', 'bg-secondary-400', 'bg-white', 'bg-secondary-200', 'bg-secondary-100');
  CREATE TYPE "public"."enum_pages_blocks_footer_card_secondary_color" AS ENUM('tertiary-yellow', 'primary-500', 'primary-200', 'secondary-100', 'tertiary-red', 'secondary-500', 'secondary-400');
  CREATE TYPE "public"."enum__pages_v_blocks_footer_card_style" AS ENUM('Carré', 'Arrondi');
  CREATE TYPE "public"."enum__pages_v_blocks_footer_card_primary_color" AS ENUM('bg-primary-500', 'bg-secondary-400', 'bg-white', 'bg-secondary-200', 'bg-secondary-100');
  CREATE TYPE "public"."enum__pages_v_blocks_footer_card_secondary_color" AS ENUM('tertiary-yellow', 'primary-500', 'primary-200', 'secondary-100', 'tertiary-red', 'secondary-500', 'secondary-400');
  CREATE TYPE "public"."enum_footer_blocks_footer_card_style" AS ENUM('Carré', 'Arrondi');
  CREATE TYPE "public"."enum_footer_blocks_footer_card_primary_color" AS ENUM('bg-primary-500', 'bg-secondary-400', 'bg-white', 'bg-secondary-200', 'bg-secondary-100');
  CREATE TYPE "public"."enum_footer_blocks_footer_card_secondary_color" AS ENUM('tertiary-yellow', 'primary-500', 'primary-200', 'secondary-100', 'tertiary-red', 'secondary-500', 'secondary-400');
  CREATE TABLE IF NOT EXISTS "pages_blocks_footer_card" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"style" "enum_pages_blocks_footer_card_style",
  	"primary_color" "enum_pages_blocks_footer_card_primary_color" DEFAULT 'bg-primary-500',
  	"secondary_color" "enum_pages_blocks_footer_card_secondary_color" DEFAULT 'tertiary-yellow',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_footer_card_locales" (
  	"title" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_footer_card" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"style" "enum__pages_v_blocks_footer_card_style",
  	"primary_color" "enum__pages_v_blocks_footer_card_primary_color" DEFAULT 'bg-primary-500',
  	"secondary_color" "enum__pages_v_blocks_footer_card_secondary_color" DEFAULT 'tertiary-yellow',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_footer_card_locales" (
  	"title" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "footer_blocks_footer_card" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"style" "enum_footer_blocks_footer_card_style" NOT NULL,
  	"primary_color" "enum_footer_blocks_footer_card_primary_color" DEFAULT 'bg-primary-500' NOT NULL,
  	"secondary_color" "enum_footer_blocks_footer_card_secondary_color" DEFAULT 'tertiary-yellow' NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "footer_blocks_footer_card_locales" (
  	"title" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  DROP TABLE "pages_blocks_card" CASCADE;
  DROP TABLE "pages_blocks_card_locales" CASCADE;
  DROP TABLE "pages_blocks_card_list" CASCADE;
  DROP TABLE "pages_blocks_card_list_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_card" CASCADE;
  DROP TABLE "_pages_v_blocks_card_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_card_list" CASCADE;
  DROP TABLE "_pages_v_blocks_card_list_locales" CASCADE;
  DROP TABLE "footer_blocks_list_list_items" CASCADE;
  DROP TABLE "footer_blocks_list_list_items_locales" CASCADE;
  DROP TABLE "footer_blocks_list" CASCADE;
  DROP TABLE "footer_blocks_list_locales" CASCADE;
  DROP TABLE "footer_blocks_card" CASCADE;
  DROP TABLE "footer_blocks_card_locales" CASCADE;
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_footer_card" ADD CONSTRAINT "pages_blocks_footer_card_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_footer_card_locales" ADD CONSTRAINT "pages_blocks_footer_card_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_footer_card"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_footer_card" ADD CONSTRAINT "_pages_v_blocks_footer_card_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_footer_card_locales" ADD CONSTRAINT "_pages_v_blocks_footer_card_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_footer_card"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "footer_blocks_footer_card" ADD CONSTRAINT "footer_blocks_footer_card_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "footer_blocks_footer_card_locales" ADD CONSTRAINT "footer_blocks_footer_card_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer_blocks_footer_card"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "pages_blocks_footer_card_order_idx" ON "pages_blocks_footer_card" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_footer_card_parent_id_idx" ON "pages_blocks_footer_card" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_footer_card_path_idx" ON "pages_blocks_footer_card" USING btree ("_path");
  CREATE UNIQUE INDEX IF NOT EXISTS "pages_blocks_footer_card_locales_locale_parent_id_unique" ON "pages_blocks_footer_card_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_footer_card_order_idx" ON "_pages_v_blocks_footer_card" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_footer_card_parent_id_idx" ON "_pages_v_blocks_footer_card" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_footer_card_path_idx" ON "_pages_v_blocks_footer_card" USING btree ("_path");
  CREATE UNIQUE INDEX IF NOT EXISTS "_pages_v_blocks_footer_card_locales_locale_parent_id_unique" ON "_pages_v_blocks_footer_card_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "footer_blocks_footer_card_order_idx" ON "footer_blocks_footer_card" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "footer_blocks_footer_card_parent_id_idx" ON "footer_blocks_footer_card" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "footer_blocks_footer_card_path_idx" ON "footer_blocks_footer_card" USING btree ("_path");
  CREATE UNIQUE INDEX IF NOT EXISTS "footer_blocks_footer_card_locales_locale_parent_id_unique" ON "footer_blocks_footer_card_locales" USING btree ("_locale","_parent_id");
  DROP TYPE "public"."enum_pages_blocks_card_style";
  DROP TYPE "public"."enum_pages_blocks_card_primary_color";
  DROP TYPE "public"."enum_pages_blocks_card_secondary_color";
  DROP TYPE "public"."enum_pages_blocks_card_position";
  DROP TYPE "public"."enum_pages_blocks_card_list_position";
  DROP TYPE "public"."enum__pages_v_blocks_card_style";
  DROP TYPE "public"."enum__pages_v_blocks_card_primary_color";
  DROP TYPE "public"."enum__pages_v_blocks_card_secondary_color";
  DROP TYPE "public"."enum__pages_v_blocks_card_position";
  DROP TYPE "public"."enum__pages_v_blocks_card_list_position";
  DROP TYPE "public"."enum_footer_blocks_card_style";
  DROP TYPE "public"."enum_footer_blocks_card_primary_color";
  DROP TYPE "public"."enum_footer_blocks_card_secondary_color";
  DROP TYPE "public"."enum_footer_blocks_card_position";`)
}
