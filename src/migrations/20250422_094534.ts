import { MigrateDownArgs, MigrateUpArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
  CREATE TABLE IF NOT EXISTS "pages_blocks_blue_card_list_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_blue_card_list_cards_locales" (
  	"title" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_blue_card_list" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_blue_card_list_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_blue_card_list_cards_locales" (
  	"title" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_blue_card_list" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_blue_card_list_cards" ADD CONSTRAINT "pages_blocks_blue_card_list_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_blue_card_list"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_blue_card_list_cards_locales" ADD CONSTRAINT "pages_blocks_blue_card_list_cards_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_blue_card_list_cards"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_blue_card_list" ADD CONSTRAINT "pages_blocks_blue_card_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_blue_card_list_cards" ADD CONSTRAINT "_pages_v_blocks_blue_card_list_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_blue_card_list"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_blue_card_list_cards_locales" ADD CONSTRAINT "_pages_v_blocks_blue_card_list_cards_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_blue_card_list_cards"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_blue_card_list" ADD CONSTRAINT "_pages_v_blocks_blue_card_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  CREATE INDEX IF NOT EXISTS "pages_blocks_blue_card_list_cards_order_idx" ON "pages_blocks_blue_card_list_cards" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_blue_card_list_cards_parent_id_idx" ON "pages_blocks_blue_card_list_cards" USING btree ("_parent_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "pages_blocks_blue_card_list_cards_locales_locale_parent_id_unique" ON "pages_blocks_blue_card_list_cards_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_blue_card_list_order_idx" ON "pages_blocks_blue_card_list" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_blue_card_list_parent_id_idx" ON "pages_blocks_blue_card_list" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_blue_card_list_path_idx" ON "pages_blocks_blue_card_list" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_blue_card_list_cards_order_idx" ON "_pages_v_blocks_blue_card_list_cards" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_blue_card_list_cards_parent_id_idx" ON "_pages_v_blocks_blue_card_list_cards" USING btree ("_parent_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "_pages_v_blocks_blue_card_list_cards_locales_locale_parent_id_unique" ON "_pages_v_blocks_blue_card_list_cards_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_blue_card_list_order_idx" ON "_pages_v_blocks_blue_card_list" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_blue_card_list_parent_id_idx" ON "_pages_v_blocks_blue_card_list" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_blue_card_list_path_idx" ON "_pages_v_blocks_blue_card_list" USING btree ("_path");`)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
  DROP TABLE "pages_blocks_blue_card_list_cards" CASCADE;
  DROP TABLE "pages_blocks_blue_card_list_cards_locales" CASCADE;
  DROP TABLE "pages_blocks_blue_card_list" CASCADE;
  DROP TABLE "_pages_v_blocks_blue_card_list_cards" CASCADE;
  DROP TABLE "_pages_v_blocks_blue_card_list_cards_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_blue_card_list" CASCADE;
`)
}
