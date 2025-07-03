import { MigrateDownArgs, MigrateUpArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
  ALTER TABLE "pages_blocks_content" ALTER COLUMN "gap" SET DEFAULT 'gap-x-4';
  ALTER TABLE "_pages_v_blocks_content" ALTER COLUMN "gap" SET DEFAULT 'gap-x-4';
  `)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
  ALTER TABLE "pages_blocks_content" ALTER COLUMN "gap" SET DEFAULT 'gap-4';
  ALTER TABLE "_pages_v_blocks_content" ALTER COLUMN "gap" SET DEFAULT 'gap-4';
  `)
}
