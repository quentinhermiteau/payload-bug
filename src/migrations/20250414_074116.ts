import { MigrateDownArgs, MigrateUpArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages" ADD COLUMN "created_by_id" integer;
  ALTER TABLE "_pages_v" ADD COLUMN "version_created_by_id" integer;
  DO $$ BEGIN
   ALTER TABLE "pages" ADD CONSTRAINT "pages_created_by_id_users_id_fk" FOREIGN KEY ("created_by_id") REFERENCES "public"."users"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_created_by_id_users_id_fk" FOREIGN KEY ("version_created_by_id") REFERENCES "public"."users"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "pages_created_by_idx" ON "pages" USING btree ("created_by_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_version_created_by_idx" ON "_pages_v" USING btree ("version_created_by_id");`)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages" DROP CONSTRAINT "pages_created_by_id_users_id_fk";
  
  ALTER TABLE "_pages_v" DROP CONSTRAINT "_pages_v_version_created_by_id_users_id_fk";
  
  DROP INDEX IF EXISTS "pages_created_by_idx";
  DROP INDEX IF EXISTS "_pages_v_version_version_created_by_idx";
  ALTER TABLE "pages" DROP COLUMN IF EXISTS "created_by_id";
  ALTER TABLE "_pages_v" DROP COLUMN IF EXISTS "version_created_by_id";`)
}
