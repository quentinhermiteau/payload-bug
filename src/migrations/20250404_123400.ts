import { MigrateDownArgs, MigrateUpArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_type" AS ENUM('page', 'press', 'realization', 'entity', 'foundation', 'group', 'refDocuments', 'jobs');
  CREATE TYPE "public"."enum__pages_v_version_type" AS ENUM('page', 'press', 'realization', 'entity', 'foundation', 'group', 'refDocuments', 'jobs');
  ALTER TYPE "public"."enum_users_role" ADD VALUE 'press' BEFORE 'user';
  ALTER TYPE "public"."enum_users_role" ADD VALUE 'foundation' BEFORE 'user';
  ALTER TYPE "public"."enum_users_role" ADD VALUE 'group' BEFORE 'user';
  ALTER TYPE "public"."enum_users_role" ADD VALUE 'global' BEFORE 'user';

  ALTER TABLE "pages_locales" ADD COLUMN "type" "enum_pages_type";
  ALTER TABLE "_pages_v_locales" ADD COLUMN "version_type" "enum__pages_v_version_type";`)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
  ALTER TABLE "pages_locales" DROP COLUMN IF EXISTS "type";
  ALTER TABLE "_pages_v_locales" DROP COLUMN IF EXISTS "version_type";
  ALTER TABLE "public"."users" ALTER COLUMN "role" SET DATA TYPE text;
  DROP TYPE "public"."enum_users_role";
  CREATE TYPE "public"."enum_users_role" AS ENUM('admin', 'user');
  ALTER TABLE "public"."users" ALTER COLUMN "role" SET DATA TYPE "public"."enum_users_role" USING "role"::"public"."enum_users_role";
  DROP TYPE "public"."enum_pages_type";
  DROP TYPE "public"."enum__pages_v_version_type";`)
}
