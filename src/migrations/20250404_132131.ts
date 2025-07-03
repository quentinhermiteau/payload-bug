import { MigrateDownArgs, MigrateUpArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
  CREATE TABLE IF NOT EXISTS "pages_blocks_home_key_figures_image" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"map_image_id" integer,
  	"image_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_home_key_figures_image_locales" (
  	"surtitle" varchar,
  	"title" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_home_key_figures_image" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"map_image_id" integer,
  	"image_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_home_key_figures_image_locales" (
  	"surtitle" varchar,
  	"title" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_home_key_figures_image" ADD CONSTRAINT "pages_blocks_home_key_figures_image_map_image_id_media_id_fk" FOREIGN KEY ("map_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_home_key_figures_image" ADD CONSTRAINT "pages_blocks_home_key_figures_image_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_home_key_figures_image" ADD CONSTRAINT "pages_blocks_home_key_figures_image_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_home_key_figures_image_locales" ADD CONSTRAINT "pages_blocks_home_key_figures_image_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_home_key_figures_image"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_home_key_figures_image" ADD CONSTRAINT "_pages_v_blocks_home_key_figures_image_map_image_id_media_id_fk" FOREIGN KEY ("map_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_home_key_figures_image" ADD CONSTRAINT "_pages_v_blocks_home_key_figures_image_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_home_key_figures_image" ADD CONSTRAINT "_pages_v_blocks_home_key_figures_image_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_home_key_figures_image_locales" ADD CONSTRAINT "_pages_v_blocks_home_key_figures_image_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_home_key_figures_image"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "pages_blocks_home_key_figures_image_order_idx" ON "pages_blocks_home_key_figures_image" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_home_key_figures_image_parent_id_idx" ON "pages_blocks_home_key_figures_image" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_home_key_figures_image_path_idx" ON "pages_blocks_home_key_figures_image" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_home_key_figures_image_map_image_idx" ON "pages_blocks_home_key_figures_image" USING btree ("map_image_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_home_key_figures_image_image_idx" ON "pages_blocks_home_key_figures_image" USING btree ("image_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "pages_blocks_home_key_figures_image_locales_locale_parent_id_unique" ON "pages_blocks_home_key_figures_image_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_home_key_figures_image_order_idx" ON "_pages_v_blocks_home_key_figures_image" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_home_key_figures_image_parent_id_idx" ON "_pages_v_blocks_home_key_figures_image" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_home_key_figures_image_path_idx" ON "_pages_v_blocks_home_key_figures_image" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_home_key_figures_image_map_image_idx" ON "_pages_v_blocks_home_key_figures_image" USING btree ("map_image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_home_key_figures_image_image_idx" ON "_pages_v_blocks_home_key_figures_image" USING btree ("image_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "_pages_v_blocks_home_key_figures_image_locales_locale_parent_id_unique" ON "_pages_v_blocks_home_key_figures_image_locales" USING btree ("_locale","_parent_id");`)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
  DROP TABLE "pages_blocks_home_key_figures_image" CASCADE;
  DROP TABLE "pages_blocks_home_key_figures_image_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_home_key_figures_image" CASCADE;
  DROP TABLE "_pages_v_blocks_home_key_figures_image_locales" CASCADE;`)
}
