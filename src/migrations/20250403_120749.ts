import { MigrateDownArgs, MigrateUpArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE IF NOT EXISTS "pages_blocks_pdf_highlight" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"thematic_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_pdf_highlight_locales" (
  	"tag" varchar,
  	"title" varchar,
  	"pdf_options_image_id" integer,
  	"pdf_options_pdf_id" integer,
  	"pdf_options_link" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_pdf_highlight" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"thematic_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_pdf_highlight_locales" (
  	"tag" varchar,
  	"title" varchar,
  	"pdf_options_image_id" integer,
  	"pdf_options_pdf_id" integer,
  	"pdf_options_link" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_pdf_highlight" ADD CONSTRAINT "pages_blocks_pdf_highlight_thematic_id_thematics_id_fk" FOREIGN KEY ("thematic_id") REFERENCES "public"."thematics"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_pdf_highlight" ADD CONSTRAINT "pages_blocks_pdf_highlight_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_pdf_highlight_locales" ADD CONSTRAINT "pages_blocks_pdf_highlight_locales_pdf_options_image_id_media_id_fk" FOREIGN KEY ("pdf_options_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_pdf_highlight_locales" ADD CONSTRAINT "pages_blocks_pdf_highlight_locales_pdf_options_pdf_id_media_id_fk" FOREIGN KEY ("pdf_options_pdf_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_pdf_highlight_locales" ADD CONSTRAINT "pages_blocks_pdf_highlight_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_pdf_highlight"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_pdf_highlight" ADD CONSTRAINT "_pages_v_blocks_pdf_highlight_thematic_id_thematics_id_fk" FOREIGN KEY ("thematic_id") REFERENCES "public"."thematics"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_pdf_highlight" ADD CONSTRAINT "_pages_v_blocks_pdf_highlight_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_pdf_highlight_locales" ADD CONSTRAINT "_pages_v_blocks_pdf_highlight_locales_pdf_options_image_id_media_id_fk" FOREIGN KEY ("pdf_options_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_pdf_highlight_locales" ADD CONSTRAINT "_pages_v_blocks_pdf_highlight_locales_pdf_options_pdf_id_media_id_fk" FOREIGN KEY ("pdf_options_pdf_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_pdf_highlight_locales" ADD CONSTRAINT "_pages_v_blocks_pdf_highlight_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_pdf_highlight"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "pages_blocks_pdf_highlight_order_idx" ON "pages_blocks_pdf_highlight" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_pdf_highlight_parent_id_idx" ON "pages_blocks_pdf_highlight" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_pdf_highlight_path_idx" ON "pages_blocks_pdf_highlight" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_pdf_highlight_thematic_idx" ON "pages_blocks_pdf_highlight" USING btree ("thematic_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_pdf_highlight_pdf_options_pdf_options_image_idx" ON "pages_blocks_pdf_highlight_locales" USING btree ("pdf_options_image_id","_locale");
  CREATE INDEX IF NOT EXISTS "pages_blocks_pdf_highlight_pdf_options_pdf_options_pdf_idx" ON "pages_blocks_pdf_highlight_locales" USING btree ("pdf_options_pdf_id","_locale");
  CREATE UNIQUE INDEX IF NOT EXISTS "pages_blocks_pdf_highlight_locales_locale_parent_id_unique" ON "pages_blocks_pdf_highlight_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_pdf_highlight_order_idx" ON "_pages_v_blocks_pdf_highlight" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_pdf_highlight_parent_id_idx" ON "_pages_v_blocks_pdf_highlight" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_pdf_highlight_path_idx" ON "_pages_v_blocks_pdf_highlight" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_pdf_highlight_thematic_idx" ON "_pages_v_blocks_pdf_highlight" USING btree ("thematic_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_pdf_highlight_pdf_options_pdf_options_image_idx" ON "_pages_v_blocks_pdf_highlight_locales" USING btree ("pdf_options_image_id","_locale");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_pdf_highlight_pdf_options_pdf_options_pdf_idx" ON "_pages_v_blocks_pdf_highlight_locales" USING btree ("pdf_options_pdf_id","_locale");
  CREATE UNIQUE INDEX IF NOT EXISTS "_pages_v_blocks_pdf_highlight_locales_locale_parent_id_unique" ON "_pages_v_blocks_pdf_highlight_locales" USING btree ("_locale","_parent_id");`)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_blocks_pdf_highlight" CASCADE;
  DROP TABLE "pages_blocks_pdf_highlight_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_pdf_highlight" CASCADE;
  DROP TABLE "_pages_v_blocks_pdf_highlight_locales" CASCADE;`)
}
