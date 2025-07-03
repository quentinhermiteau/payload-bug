import { MigrateDownArgs, MigrateUpArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_collection_list_collection" AS ENUM('page', 'press', 'realization', 'entity', 'foundation', 'group', 'refDocuments', 'jobs');
  CREATE TYPE "public"."enum__pages_v_blocks_collection_list_collection" AS ENUM('page', 'press', 'realization', 'entity', 'foundation', 'group', 'refDocuments', 'jobs');
  CREATE TYPE "public"."enum_thematics_page_type" AS ENUM('refDocuments', 'group', 'foundation', 'realization', 'press');
  CREATE TABLE IF NOT EXISTS "pages_blocks_home_text_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"left_image_id" integer,
  	"bottom_image_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_home_text_images_locales" (
  	"overline" varchar,
  	"title" jsonb,
  	"description" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_collection_list" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"collection" "enum_pages_blocks_collection_list_collection",
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_home_text_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"left_image_id" integer,
  	"bottom_image_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_home_text_images_locales" (
  	"overline" varchar,
  	"title" jsonb,
  	"description" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_collection_list" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"collection" "enum__pages_v_blocks_collection_list_collection",
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "thematics_locales" (
  	"thematic" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "locations_locales" (
  	"location" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  ALTER TABLE "pages_blocks_text_images" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_text_images_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_text_images" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_text_images_locales" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "pages_blocks_text_images" CASCADE;
  DROP TABLE "pages_blocks_text_images_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_text_images" CASCADE;
  DROP TABLE "_pages_v_blocks_text_images_locales" CASCADE;
  ALTER TABLE "pages" ADD COLUMN "ref_document_id" integer;
  ALTER TABLE "pages_rels" ADD COLUMN "thematics_id" integer;
  ALTER TABLE "pages_rels" ADD COLUMN "locations_id" integer;
  ALTER TABLE "_pages_v" ADD COLUMN "version_ref_document_id" integer;
  ALTER TABLE "_pages_v_rels" ADD COLUMN "thematics_id" integer;
  ALTER TABLE "_pages_v_rels" ADD COLUMN "locations_id" integer;
  ALTER TABLE "thematics" ADD COLUMN "page_type" "enum_thematics_page_type" DEFAULT 'press' NOT NULL;
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_home_text_images" ADD CONSTRAINT "pages_blocks_home_text_images_left_image_id_media_id_fk" FOREIGN KEY ("left_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_home_text_images" ADD CONSTRAINT "pages_blocks_home_text_images_bottom_image_id_media_id_fk" FOREIGN KEY ("bottom_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_home_text_images" ADD CONSTRAINT "pages_blocks_home_text_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_home_text_images_locales" ADD CONSTRAINT "pages_blocks_home_text_images_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_home_text_images"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_collection_list" ADD CONSTRAINT "pages_blocks_collection_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_home_text_images" ADD CONSTRAINT "_pages_v_blocks_home_text_images_left_image_id_media_id_fk" FOREIGN KEY ("left_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_home_text_images" ADD CONSTRAINT "_pages_v_blocks_home_text_images_bottom_image_id_media_id_fk" FOREIGN KEY ("bottom_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_home_text_images" ADD CONSTRAINT "_pages_v_blocks_home_text_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_home_text_images_locales" ADD CONSTRAINT "_pages_v_blocks_home_text_images_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_home_text_images"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_collection_list" ADD CONSTRAINT "_pages_v_blocks_collection_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "thematics_locales" ADD CONSTRAINT "thematics_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."thematics"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "locations_locales" ADD CONSTRAINT "locations_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."locations"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "pages_blocks_home_text_images_order_idx" ON "pages_blocks_home_text_images" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_home_text_images_parent_id_idx" ON "pages_blocks_home_text_images" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_home_text_images_path_idx" ON "pages_blocks_home_text_images" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_home_text_images_left_image_idx" ON "pages_blocks_home_text_images" USING btree ("left_image_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_home_text_images_bottom_image_idx" ON "pages_blocks_home_text_images" USING btree ("bottom_image_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "pages_blocks_home_text_images_locales_locale_parent_id_unique" ON "pages_blocks_home_text_images_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_collection_list_order_idx" ON "pages_blocks_collection_list" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_collection_list_parent_id_idx" ON "pages_blocks_collection_list" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_collection_list_path_idx" ON "pages_blocks_collection_list" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_home_text_images_order_idx" ON "_pages_v_blocks_home_text_images" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_home_text_images_parent_id_idx" ON "_pages_v_blocks_home_text_images" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_home_text_images_path_idx" ON "_pages_v_blocks_home_text_images" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_home_text_images_left_image_idx" ON "_pages_v_blocks_home_text_images" USING btree ("left_image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_home_text_images_bottom_image_idx" ON "_pages_v_blocks_home_text_images" USING btree ("bottom_image_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "_pages_v_blocks_home_text_images_locales_locale_parent_id_unique" ON "_pages_v_blocks_home_text_images_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_collection_list_order_idx" ON "_pages_v_blocks_collection_list" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_collection_list_parent_id_idx" ON "_pages_v_blocks_collection_list" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_collection_list_path_idx" ON "_pages_v_blocks_collection_list" USING btree ("_path");
  CREATE UNIQUE INDEX IF NOT EXISTS "thematics_locales_locale_parent_id_unique" ON "thematics_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "locations_locales_locale_parent_id_unique" ON "locations_locales" USING btree ("_locale","_parent_id");
  DO $$ BEGIN
   ALTER TABLE "pages" ADD CONSTRAINT "pages_ref_document_id_media_id_fk" FOREIGN KEY ("ref_document_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_thematics_fk" FOREIGN KEY ("thematics_id") REFERENCES "public"."thematics"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_locations_fk" FOREIGN KEY ("locations_id") REFERENCES "public"."locations"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_ref_document_id_media_id_fk" FOREIGN KEY ("version_ref_document_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_thematics_fk" FOREIGN KEY ("thematics_id") REFERENCES "public"."thematics"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_locations_fk" FOREIGN KEY ("locations_id") REFERENCES "public"."locations"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "pages_ref_document_idx" ON "pages" USING btree ("ref_document_id");
  CREATE INDEX IF NOT EXISTS "pages_rels_thematics_id_idx" ON "pages_rels" USING btree ("thematics_id");
  CREATE INDEX IF NOT EXISTS "pages_rels_locations_id_idx" ON "pages_rels" USING btree ("locations_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_version_ref_document_idx" ON "_pages_v" USING btree ("version_ref_document_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_rels_thematics_id_idx" ON "_pages_v_rels" USING btree ("thematics_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_rels_locations_id_idx" ON "_pages_v_rels" USING btree ("locations_id");
  ALTER TABLE "thematics" DROP COLUMN IF EXISTS "thematic";
  ALTER TABLE "thematics" DROP COLUMN IF EXISTS "collection";
  ALTER TABLE "locations" DROP COLUMN IF EXISTS "location";
  DROP TYPE "public"."enum_thematics_collection";`)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_thematics_collection" AS ENUM('ref-documents', 'group-news', 'foundation-news', 'entities', 'realizations', 'press');
  CREATE TABLE IF NOT EXISTS "pages_blocks_text_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"left_image_id" integer,
  	"bottom_image_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_text_images_locales" (
  	"overline" varchar,
  	"title" jsonb,
  	"description" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_text_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"left_image_id" integer,
  	"bottom_image_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_text_images_locales" (
  	"overline" varchar,
  	"title" jsonb,
  	"description" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  ALTER TABLE "pages_blocks_home_text_images" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_home_text_images_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_collection_list" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_home_text_images" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_home_text_images_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_collection_list" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "thematics_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "locations_locales" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "pages_blocks_home_text_images" CASCADE;
  DROP TABLE "pages_blocks_home_text_images_locales" CASCADE;
  DROP TABLE "pages_blocks_collection_list" CASCADE;
  DROP TABLE "_pages_v_blocks_home_text_images" CASCADE;
  DROP TABLE "_pages_v_blocks_home_text_images_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_collection_list" CASCADE;
  DROP TABLE "thematics_locales" CASCADE;
  DROP TABLE "locations_locales" CASCADE;
  ALTER TABLE "pages" DROP CONSTRAINT "pages_ref_document_id_media_id_fk";
  
  ALTER TABLE "pages_rels" DROP CONSTRAINT "pages_rels_thematics_fk";
  
  ALTER TABLE "pages_rels" DROP CONSTRAINT "pages_rels_locations_fk";
  
  ALTER TABLE "_pages_v" DROP CONSTRAINT "_pages_v_version_ref_document_id_media_id_fk";
  
  ALTER TABLE "_pages_v_rels" DROP CONSTRAINT "_pages_v_rels_thematics_fk";
  
  ALTER TABLE "_pages_v_rels" DROP CONSTRAINT "_pages_v_rels_locations_fk";
  
  DROP INDEX IF EXISTS "pages_ref_document_idx";
  DROP INDEX IF EXISTS "pages_rels_thematics_id_idx";
  DROP INDEX IF EXISTS "pages_rels_locations_id_idx";
  DROP INDEX IF EXISTS "_pages_v_version_version_ref_document_idx";
  DROP INDEX IF EXISTS "_pages_v_rels_thematics_id_idx";
  DROP INDEX IF EXISTS "_pages_v_rels_locations_id_idx";
  ALTER TABLE "thematics" ADD COLUMN "thematic" varchar NOT NULL;
  ALTER TABLE "thematics" ADD COLUMN "collection" "enum_thematics_collection" NOT NULL;
  ALTER TABLE "locations" ADD COLUMN "location" varchar NOT NULL;
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_text_images" ADD CONSTRAINT "pages_blocks_text_images_left_image_id_media_id_fk" FOREIGN KEY ("left_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_text_images" ADD CONSTRAINT "pages_blocks_text_images_bottom_image_id_media_id_fk" FOREIGN KEY ("bottom_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_text_images" ADD CONSTRAINT "pages_blocks_text_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_text_images_locales" ADD CONSTRAINT "pages_blocks_text_images_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_text_images"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_text_images" ADD CONSTRAINT "_pages_v_blocks_text_images_left_image_id_media_id_fk" FOREIGN KEY ("left_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_text_images" ADD CONSTRAINT "_pages_v_blocks_text_images_bottom_image_id_media_id_fk" FOREIGN KEY ("bottom_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_text_images" ADD CONSTRAINT "_pages_v_blocks_text_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_text_images_locales" ADD CONSTRAINT "_pages_v_blocks_text_images_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_text_images"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "pages_blocks_text_images_order_idx" ON "pages_blocks_text_images" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_text_images_parent_id_idx" ON "pages_blocks_text_images" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_text_images_path_idx" ON "pages_blocks_text_images" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_text_images_left_image_idx" ON "pages_blocks_text_images" USING btree ("left_image_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_text_images_bottom_image_idx" ON "pages_blocks_text_images" USING btree ("bottom_image_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "pages_blocks_text_images_locales_locale_parent_id_unique" ON "pages_blocks_text_images_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_text_images_order_idx" ON "_pages_v_blocks_text_images" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_text_images_parent_id_idx" ON "_pages_v_blocks_text_images" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_text_images_path_idx" ON "_pages_v_blocks_text_images" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_text_images_left_image_idx" ON "_pages_v_blocks_text_images" USING btree ("left_image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_text_images_bottom_image_idx" ON "_pages_v_blocks_text_images" USING btree ("bottom_image_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "_pages_v_blocks_text_images_locales_locale_parent_id_unique" ON "_pages_v_blocks_text_images_locales" USING btree ("_locale","_parent_id");
  ALTER TABLE "pages" DROP COLUMN IF EXISTS "ref_document_id";
  ALTER TABLE "pages_rels" DROP COLUMN IF EXISTS "thematics_id";
  ALTER TABLE "pages_rels" DROP COLUMN IF EXISTS "locations_id";
  ALTER TABLE "_pages_v" DROP COLUMN IF EXISTS "version_ref_document_id";
  ALTER TABLE "_pages_v_rels" DROP COLUMN IF EXISTS "thematics_id";
  ALTER TABLE "_pages_v_rels" DROP COLUMN IF EXISTS "locations_id";
  ALTER TABLE "thematics" DROP COLUMN IF EXISTS "page_type";
  DROP TYPE "public"."enum_pages_blocks_collection_list_collection";
  DROP TYPE "public"."enum__pages_v_blocks_collection_list_collection";
  DROP TYPE "public"."enum_thematics_page_type";`)
}
