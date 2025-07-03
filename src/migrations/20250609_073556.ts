import { MigrateDownArgs, MigrateUpArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "header_blocks_button_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "header_blocks_link_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "header_nav_items_locales" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "header_blocks_button_locales" CASCADE;
  DROP TABLE "header_blocks_link_locales" CASCADE;
  DROP TABLE "header_nav_items_locales" CASCADE;
  DROP INDEX IF EXISTS "header_rels_pages_id_idx";
  ALTER TABLE "header_blocks_button" ADD COLUMN "_locale" "_locales";
  ALTER TABLE "header_blocks_button" ADD COLUMN "label" varchar;
  ALTER TABLE "header_blocks_button" ADD COLUMN "link_url" varchar;
  ALTER TABLE "header_blocks_link" ADD COLUMN "_locale" "_locales";
  ALTER TABLE "header_blocks_link" ADD COLUMN "link_url" varchar;
  ALTER TABLE "header_blocks_link" ADD COLUMN "link_label" varchar;
  ALTER TABLE "header_nav_items_sub_nav_items" ADD COLUMN "_locale" "_locales";
  ALTER TABLE "header_nav_items" ADD COLUMN "_locale" "_locales";
  ALTER TABLE "header_nav_items" ADD COLUMN "label" varchar;
  ALTER TABLE "header_nav_items" ADD COLUMN "description" varchar;
  ALTER TABLE "header_rels" ADD COLUMN "locale" "_locales";
  CREATE INDEX IF NOT EXISTS "header_blocks_button_locale_idx" ON "header_blocks_button" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "header_blocks_link_locale_idx" ON "header_blocks_link" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "header_nav_items_sub_nav_items_locale_idx" ON "header_nav_items_sub_nav_items" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "header_nav_items_locale_idx" ON "header_nav_items" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "header_rels_locale_idx" ON "header_rels" USING btree ("locale");
  CREATE INDEX IF NOT EXISTS "header_rels_pages_id_idx" ON "header_rels" USING btree ("pages_id","locale");`)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE IF NOT EXISTS "header_blocks_button_locales" (
  	"label" varchar NOT NULL,
  	"link_url" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "header_blocks_link_locales" (
  	"link_url" varchar,
  	"link_label" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "header_nav_items_locales" (
  	"label" varchar NOT NULL,
  	"description" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  DROP INDEX IF EXISTS "header_blocks_button_locale_idx";
  DROP INDEX IF EXISTS "header_blocks_link_locale_idx";
  DROP INDEX IF EXISTS "header_nav_items_sub_nav_items_locale_idx";
  DROP INDEX IF EXISTS "header_nav_items_locale_idx";
  DROP INDEX IF EXISTS "header_rels_locale_idx";
  DROP INDEX IF EXISTS "header_rels_pages_id_idx";
  DO $$ BEGIN
   ALTER TABLE "header_blocks_button_locales" ADD CONSTRAINT "header_blocks_button_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header_blocks_button"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "header_blocks_link_locales" ADD CONSTRAINT "header_blocks_link_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header_blocks_link"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "header_nav_items_locales" ADD CONSTRAINT "header_nav_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header_nav_items"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE UNIQUE INDEX IF NOT EXISTS "header_blocks_button_locales_locale_parent_id_unique" ON "header_blocks_button_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "header_blocks_link_locales_locale_parent_id_unique" ON "header_blocks_link_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "header_nav_items_locales_locale_parent_id_unique" ON "header_nav_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "header_rels_pages_id_idx" ON "header_rels" USING btree ("pages_id");
  ALTER TABLE "header_blocks_button" DROP COLUMN IF EXISTS "_locale";
  ALTER TABLE "header_blocks_button" DROP COLUMN IF EXISTS "label";
  ALTER TABLE "header_blocks_button" DROP COLUMN IF EXISTS "link_url";
  ALTER TABLE "header_blocks_link" DROP COLUMN IF EXISTS "_locale";
  ALTER TABLE "header_blocks_link" DROP COLUMN IF EXISTS "link_url";
  ALTER TABLE "header_blocks_link" DROP COLUMN IF EXISTS "link_label";
  ALTER TABLE "header_nav_items_sub_nav_items" DROP COLUMN IF EXISTS "_locale";
  ALTER TABLE "header_nav_items" DROP COLUMN IF EXISTS "_locale";
  ALTER TABLE "header_nav_items" DROP COLUMN IF EXISTS "label";
  ALTER TABLE "header_nav_items" DROP COLUMN IF EXISTS "description";
  ALTER TABLE "header_rels" DROP COLUMN IF EXISTS "locale";`)
}
