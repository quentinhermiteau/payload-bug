import { MigrateDownArgs, MigrateUpArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_collection_list_type" AS ENUM('page', 'press', 'realization', 'entity', 'foundation', 'group', 'refDocuments', 'jobs');
  CREATE TYPE "public"."enum_pages_blocks_collection_list_position" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum__pages_v_blocks_collection_list_type" AS ENUM('page', 'press', 'realization', 'entity', 'foundation', 'group', 'refDocuments', 'jobs');
  CREATE TYPE "public"."enum__pages_v_blocks_collection_list_position" AS ENUM('left', 'center');
  CREATE TABLE IF NOT EXISTS "pages_blocks_collection_list_locales" (
  	"position" "enum_pages_blocks_collection_list_position",
  	"surtitle" varchar,
  	"title" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_collection_list_locales" (
  	"position" "enum__pages_v_blocks_collection_list_position",
  	"surtitle" varchar,
  	"title" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  ALTER TABLE "pages_blocks_collection_list" ADD COLUMN "type" "enum_pages_blocks_collection_list_type";
  ALTER TABLE "pages_blocks_collection_list" ADD COLUMN "highlight_pages" boolean;
  ALTER TABLE "_pages_v_blocks_collection_list" ADD COLUMN "type" "enum__pages_v_blocks_collection_list_type";
  ALTER TABLE "_pages_v_blocks_collection_list" ADD COLUMN "highlight_pages" boolean;
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_collection_list_locales" ADD CONSTRAINT "pages_blocks_collection_list_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_collection_list"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_collection_list_locales" ADD CONSTRAINT "_pages_v_blocks_collection_list_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_collection_list"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE UNIQUE INDEX IF NOT EXISTS "pages_blocks_collection_list_locales_locale_parent_id_unique" ON "pages_blocks_collection_list_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "_pages_v_blocks_collection_list_locales_locale_parent_id_unique" ON "_pages_v_blocks_collection_list_locales" USING btree ("_locale","_parent_id");
  
  ALTER TABLE "pages_blocks_collection_list" DROP COLUMN IF EXISTS "collection";
  ALTER TABLE "_pages_v_blocks_collection_list" DROP COLUMN IF EXISTS "collection";
  DROP TYPE "public"."enum_pages_blocks_collection_list_collection";
  DROP TYPE "public"."enum__pages_v_blocks_collection_list_collection";`)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_collection_list_collection" AS ENUM('page', 'press', 'realization', 'entity', 'foundation', 'group', 'refDocuments', 'jobs');
  CREATE TYPE "public"."enum__pages_v_blocks_collection_list_collection" AS ENUM('page', 'press', 'realization', 'entity', 'foundation', 'group', 'refDocuments', 'jobs');
  ALTER TABLE "pages_blocks_collection_list_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_collection_list_locales" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "pages_blocks_collection_list_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_collection_list_locales" CASCADE;
  
  ALTER TABLE "pages_blocks_collection_list" ADD COLUMN "collection" "enum_pages_blocks_collection_list_collection";
  ALTER TABLE "_pages_v_blocks_collection_list" ADD COLUMN "collection" "enum__pages_v_blocks_collection_list_collection";
  ALTER TABLE "pages_blocks_collection_list" DROP COLUMN IF EXISTS "type";
  ALTER TABLE "pages_blocks_collection_list" DROP COLUMN IF EXISTS "highlight_pages";
  ALTER TABLE "_pages_v_blocks_collection_list" DROP COLUMN IF EXISTS "type";
  ALTER TABLE "_pages_v_blocks_collection_list" DROP COLUMN IF EXISTS "highlight_pages";
  DROP TYPE "public"."enum_pages_blocks_collection_list_type";
  DROP TYPE "public"."enum_pages_blocks_collection_list_position";
  DROP TYPE "public"."enum__pages_v_blocks_collection_list_type";
  DROP TYPE "public"."enum__pages_v_blocks_collection_list_position";`)
}
