import { MigrateDownArgs, MigrateUpArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_users_role" AS ENUM('admin', 'user');
  DROP INDEX IF EXISTS "users_email_idx";
  ALTER TABLE "users" ADD COLUMN "role" "enum_users_role" DEFAULT 'user';
  ALTER TABLE "users" DROP COLUMN IF EXISTS "email";
  ALTER TABLE "users" DROP COLUMN IF EXISTS "reset_password_token";
  ALTER TABLE "users" DROP COLUMN IF EXISTS "reset_password_expiration";
  ALTER TABLE "users" DROP COLUMN IF EXISTS "salt";
  ALTER TABLE "users" DROP COLUMN IF EXISTS "hash";
  ALTER TABLE "users" DROP COLUMN IF EXISTS "login_attempts";
  ALTER TABLE "users" DROP COLUMN IF EXISTS "lock_until";`)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "users" ADD COLUMN "email" varchar NOT NULL;
  ALTER TABLE "users" ADD COLUMN "reset_password_token" varchar;
  ALTER TABLE "users" ADD COLUMN "reset_password_expiration" timestamp(3) with time zone;
  ALTER TABLE "users" ADD COLUMN "salt" varchar;
  ALTER TABLE "users" ADD COLUMN "hash" varchar;
  ALTER TABLE "users" ADD COLUMN "login_attempts" numeric DEFAULT 0;
  ALTER TABLE "users" ADD COLUMN "lock_until" timestamp(3) with time zone;
  CREATE UNIQUE INDEX IF NOT EXISTS "users_email_idx" ON "users" USING btree ("email");
  ALTER TABLE "users" DROP COLUMN IF EXISTS "role";
  DROP TYPE "public"."enum_users_role";`)
}
