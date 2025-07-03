import { MigrateDownArgs, MigrateUpArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
  DROP TABLE IF EXISTS "footer_blocks_link" CASCADE;
  CREATE TABLE IF NOT EXISTS "footer_blocks_link" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_footer_blocks_link_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar NOT NULL,
  	"icon" varchar,
  	"position_icon" "enum_footer_blocks_link_position_icon",
  	"block_name" varchar
  );
  
  ALTER TABLE "footer_blocks_link_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "footer_blocks_list_list_items_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "footer_blocks_list_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "footer_blocks_button_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "footer_blocks_card_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "footer_columns_locales" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "footer_blocks_link_locales" CASCADE;
  DROP TABLE "footer_blocks_list_list_items_locales" CASCADE;
  DROP TABLE "footer_blocks_list_locales" CASCADE;
  DROP TABLE "footer_blocks_button_locales" CASCADE;
  DROP TABLE "footer_blocks_card_locales" CASCADE;
  DROP TABLE "footer_columns_locales" CASCADE;
  DROP INDEX IF EXISTS "footer_rels_pages_id_idx";
  ALTER TABLE "footer_blocks_list_list_items" ADD COLUMN "_locale" "_locales" NOT NULL;
  ALTER TABLE "footer_blocks_list_list_items" ADD COLUMN "text" jsonb NOT NULL;
  ALTER TABLE "footer_blocks_list" ADD COLUMN "_locale" "_locales" NOT NULL;
  ALTER TABLE "footer_blocks_list" ADD COLUMN "title" jsonb;
  ALTER TABLE "footer_blocks_list" ADD COLUMN "description" jsonb;
  ALTER TABLE "footer_blocks_list" ADD COLUMN "asterisk" jsonb;
  ALTER TABLE "footer_blocks_button" ADD COLUMN "_locale" "_locales";
  ALTER TABLE "footer_blocks_button" ADD COLUMN "label" varchar;
  ALTER TABLE "footer_blocks_button" ADD COLUMN "link_url" varchar;
  ALTER TABLE "footer_blocks_card" ADD COLUMN "_locale" "_locales" ;
  ALTER TABLE "footer_blocks_card" ADD COLUMN "title" jsonb ;
  ALTER TABLE "footer_blocks_card" ADD COLUMN "description" jsonb;
  ALTER TABLE "footer_columns" ADD COLUMN "_locale" "_locales" ;
  ALTER TABLE "footer_columns" ADD COLUMN "title" varchar;
  ALTER TABLE "footer_rels" ADD COLUMN "locale" "_locales";
  DO $$ BEGIN
   ALTER TABLE "footer_blocks_link" ADD CONSTRAINT "footer_blocks_link_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "footer_blocks_link_order_idx" ON "footer_blocks_link" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "footer_blocks_link_parent_id_idx" ON "footer_blocks_link" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "footer_blocks_link_path_idx" ON "footer_blocks_link" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "footer_blocks_link_locale_idx" ON "footer_blocks_link" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "footer_blocks_link_icon_idx" ON "footer_blocks_link" USING btree ("icon");
  CREATE INDEX IF NOT EXISTS "footer_blocks_link_locale_idx" ON "footer_blocks_link" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "footer_blocks_list_list_items_locale_idx" ON "footer_blocks_list_list_items" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "footer_blocks_list_locale_idx" ON "footer_blocks_list" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "footer_blocks_button_locale_idx" ON "footer_blocks_button" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "footer_blocks_card_locale_idx" ON "footer_blocks_card" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "footer_columns_locale_idx" ON "footer_columns" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "footer_rels_locale_idx" ON "footer_rels" USING btree ("locale");
  CREATE INDEX IF NOT EXISTS "footer_rels_pages_id_idx" ON "footer_rels" USING btree ("pages_id","locale");`)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE IF NOT EXISTS "footer_blocks_link_locales" (
  	"link_url" varchar,
  	"link_label" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "footer_blocks_list_list_items_locales" (
  	"text" jsonb NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "footer_blocks_list_locales" (
  	"title" jsonb,
  	"description" jsonb,
  	"asterisk" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "footer_blocks_button_locales" (
  	"label" varchar NOT NULL,
  	"link_url" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "footer_blocks_card_locales" (
  	"title" jsonb NOT NULL,
  	"description" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "footer_columns_locales" (
  	"title" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  ALTER TABLE "footer_blocks_link" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "footer_blocks_link" CASCADE;
  DROP INDEX IF EXISTS "footer_blocks_link_locale_idx";
  DROP INDEX IF EXISTS "footer_blocks_list_list_items_locale_idx";
  DROP INDEX IF EXISTS "footer_blocks_list_locale_idx";
  DROP INDEX IF EXISTS "footer_blocks_button_locale_idx";
  DROP INDEX IF EXISTS "footer_blocks_card_locale_idx";
  DROP INDEX IF EXISTS "footer_columns_locale_idx";
  DROP INDEX IF EXISTS "footer_rels_locale_idx";
  DROP INDEX IF EXISTS "footer_rels_pages_id_idx";
  DO $$ BEGIN
   ALTER TABLE "footer_blocks_link_locales" ADD CONSTRAINT "footer_blocks_link_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer_blocks_link"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "footer_blocks_list_list_items_locales" ADD CONSTRAINT "footer_blocks_list_list_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer_blocks_list_list_items"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "footer_blocks_list_locales" ADD CONSTRAINT "footer_blocks_list_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer_blocks_list"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "footer_blocks_button_locales" ADD CONSTRAINT "footer_blocks_button_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer_blocks_button"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "footer_blocks_card_locales" ADD CONSTRAINT "footer_blocks_card_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer_blocks_card"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "footer_columns_locales" ADD CONSTRAINT "footer_columns_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer_columns"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE UNIQUE INDEX IF NOT EXISTS "footer_blocks_link_locales_locale_parent_id_unique" ON "footer_blocks_link_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "footer_blocks_list_list_items_locales_locale_parent_id_unique" ON "footer_blocks_list_list_items_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "footer_blocks_list_locales_locale_parent_id_unique" ON "footer_blocks_list_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "footer_blocks_button_locales_locale_parent_id_unique" ON "footer_blocks_button_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "footer_blocks_card_locales_locale_parent_id_unique" ON "footer_blocks_card_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "footer_columns_locales_locale_parent_id_unique" ON "footer_columns_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "footer_rels_pages_id_idx" ON "footer_rels" USING btree ("pages_id");
  ALTER TABLE "footer_blocks_link" DROP COLUMN IF EXISTS "_locale";
  ALTER TABLE "footer_blocks_link" DROP COLUMN IF EXISTS "link_url";
  ALTER TABLE "footer_blocks_link" DROP COLUMN IF EXISTS "link_label";
  ALTER TABLE "footer_blocks_list_list_items" DROP COLUMN IF EXISTS "_locale";
  ALTER TABLE "footer_blocks_list_list_items" DROP COLUMN IF EXISTS "text";
  ALTER TABLE "footer_blocks_list" DROP COLUMN IF EXISTS "_locale";
  ALTER TABLE "footer_blocks_list" DROP COLUMN IF EXISTS "title";
  ALTER TABLE "footer_blocks_list" DROP COLUMN IF EXISTS "description";
  ALTER TABLE "footer_blocks_list" DROP COLUMN IF EXISTS "asterisk";
  ALTER TABLE "footer_blocks_button" DROP COLUMN IF EXISTS "_locale";
  ALTER TABLE "footer_blocks_button" DROP COLUMN IF EXISTS "label";
  ALTER TABLE "footer_blocks_button" DROP COLUMN IF EXISTS "link_url";
  ALTER TABLE "footer_blocks_card" DROP COLUMN IF EXISTS "_locale";
  ALTER TABLE "footer_blocks_card" DROP COLUMN IF EXISTS "title";
  ALTER TABLE "footer_blocks_card" DROP COLUMN IF EXISTS "description";
  ALTER TABLE "footer_columns" DROP COLUMN IF EXISTS "_locale";
  ALTER TABLE "footer_columns" DROP COLUMN IF EXISTS "title";
  ALTER TABLE "footer_rels" DROP COLUMN IF EXISTS "locale";`)
}
