import { MigrateDownArgs, MigrateUpArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE IF NOT EXISTS "modes" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"color" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  ALTER TABLE "pages_blocks_radd_extension" ADD COLUMN "mode_id" integer;
  ALTER TABLE "_pages_v_blocks_radd_extension" ADD COLUMN "mode_id" integer;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "modes_id" integer;
  CREATE INDEX IF NOT EXISTS "modes_updated_at_idx" ON "modes" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "modes_created_at_idx" ON "modes" USING btree ("created_at");
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_radd_extension" ADD CONSTRAINT "pages_blocks_radd_extension_mode_id_modes_id_fk" FOREIGN KEY ("mode_id") REFERENCES "public"."modes"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_radd_extension" ADD CONSTRAINT "_pages_v_blocks_radd_extension_mode_id_modes_id_fk" FOREIGN KEY ("mode_id") REFERENCES "public"."modes"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_modes_fk" FOREIGN KEY ("modes_id") REFERENCES "public"."modes"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "pages_blocks_radd_extension_mode_idx" ON "pages_blocks_radd_extension" USING btree ("mode_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_radd_extension_mode_idx" ON "_pages_v_blocks_radd_extension" USING btree ("mode_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_modes_id_idx" ON "payload_locked_documents_rels" USING btree ("modes_id");
  ALTER TABLE "pages_blocks_radd_extension" DROP COLUMN IF EXISTS "metro_line";
  ALTER TABLE "_pages_v_blocks_radd_extension" DROP COLUMN IF EXISTS "metro_line";
  DROP TYPE "public"."enum_pages_blocks_radd_extension_metro_line";
  DROP TYPE "public"."enum__pages_v_blocks_radd_extension_metro_line";`)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_radd_extension_metro_line" AS ENUM('#662483', '#8D5E2A');
  CREATE TYPE "public"."enum__pages_v_blocks_radd_extension_metro_line" AS ENUM('#662483', '#8D5E2A');
  ALTER TABLE "modes" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "modes" CASCADE;
  ALTER TABLE "pages_blocks_radd_extension" DROP CONSTRAINT "pages_blocks_radd_extension_mode_id_modes_id_fk";
  
  ALTER TABLE "_pages_v_blocks_radd_extension" DROP CONSTRAINT "_pages_v_blocks_radd_extension_mode_id_modes_id_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_modes_fk";
  
  DROP INDEX IF EXISTS "pages_blocks_radd_extension_mode_idx";
  DROP INDEX IF EXISTS "_pages_v_blocks_radd_extension_mode_idx";
  DROP INDEX IF EXISTS "payload_locked_documents_rels_modes_id_idx";
  ALTER TABLE "pages_blocks_radd_extension" ADD COLUMN "metro_line" "enum_pages_blocks_radd_extension_metro_line";
  ALTER TABLE "_pages_v_blocks_radd_extension" ADD COLUMN "metro_line" "enum__pages_v_blocks_radd_extension_metro_line";
  ALTER TABLE "pages_blocks_radd_extension" DROP COLUMN IF EXISTS "mode_id";
  ALTER TABLE "_pages_v_blocks_radd_extension" DROP COLUMN IF EXISTS "mode_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "modes_id";`)
}
