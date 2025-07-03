import { MigrateDownArgs, MigrateUpArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
  ALTER TYPE enum_pages_blocks_content_gap ADD VALUE IF NOT EXISTS 'gap-x-1';
  ALTER TYPE enum_pages_blocks_content_gap ADD VALUE IF NOT EXISTS 'gap-x-2';
  ALTER TYPE enum_pages_blocks_content_gap ADD VALUE IF NOT EXISTS 'gap-x-3';
  ALTER TYPE enum_pages_blocks_content_gap ADD VALUE IF NOT EXISTS 'gap-x-4';
  ALTER TYPE enum_pages_blocks_content_gap ADD VALUE IF NOT EXISTS 'gap-x-5';
  ALTER TYPE enum_pages_blocks_content_gap ADD VALUE IF NOT EXISTS 'gap-x-6';
  ALTER TYPE enum_pages_blocks_content_gap ADD VALUE IF NOT EXISTS 'gap-x-7';
  ALTER TYPE enum_pages_blocks_content_gap ADD VALUE IF NOT EXISTS 'gap-x-8';
  ALTER TYPE enum_pages_blocks_content_gap ADD VALUE IF NOT EXISTS 'gap-x-9';
  ALTER TYPE enum_pages_blocks_content_gap ADD VALUE IF NOT EXISTS 'gap-x-10';
  
  ALTER TYPE enum__pages_v_blocks_content_gap ADD VALUE IF NOT EXISTS 'gap-x-1';
  ALTER TYPE enum__pages_v_blocks_content_gap ADD VALUE IF NOT EXISTS 'gap-x-2';
  ALTER TYPE enum__pages_v_blocks_content_gap ADD VALUE IF NOT EXISTS 'gap-x-3';
  ALTER TYPE enum__pages_v_blocks_content_gap ADD VALUE IF NOT EXISTS 'gap-x-4';
  ALTER TYPE enum__pages_v_blocks_content_gap ADD VALUE IF NOT EXISTS 'gap-x-5';
  ALTER TYPE enum__pages_v_blocks_content_gap ADD VALUE IF NOT EXISTS 'gap-x-6';
  ALTER TYPE enum__pages_v_blocks_content_gap ADD VALUE IF NOT EXISTS 'gap-x-7';
  ALTER TYPE enum__pages_v_blocks_content_gap ADD VALUE IF NOT EXISTS 'gap-x-8';
  ALTER TYPE enum__pages_v_blocks_content_gap ADD VALUE IF NOT EXISTS 'gap-x-9';
  ALTER TYPE enum__pages_v_blocks_content_gap ADD VALUE IF NOT EXISTS 'gap-x-10';
  `)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
}
