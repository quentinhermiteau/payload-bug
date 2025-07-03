import { MigrateDownArgs, MigrateUpArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
  ALTER TYPE enum_pages_blocks_content_gap ADD VALUE IF NOT EXISTS 'gap-x-2';
  ALTER TYPE enum_pages_blocks_content_gap ADD VALUE IF NOT EXISTS 'gap-x-4';
  ALTER TYPE enum_pages_blocks_content_gap ADD VALUE IF NOT EXISTS 'gap-x-6';
  ALTER TYPE enum_pages_blocks_content_gap ADD VALUE IF NOT EXISTS 'gap-x-8';
  ALTER TYPE enum_pages_blocks_content_gap ADD VALUE IF NOT EXISTS 'gap-x-10';
  ALTER TYPE enum_pages_blocks_content_gap ADD VALUE IF NOT EXISTS 'gap-x-12';
  ALTER TYPE enum_pages_blocks_content_gap ADD VALUE IF NOT EXISTS 'gap-x-14';
  ALTER TYPE enum_pages_blocks_content_gap ADD VALUE IF NOT EXISTS 'gap-x-16';
  ALTER TYPE enum_pages_blocks_content_gap ADD VALUE IF NOT EXISTS 'gap-x-18';
  ALTER TYPE enum_pages_blocks_content_gap ADD VALUE IF NOT EXISTS 'gap-x-20';
  ALTER TYPE enum_pages_blocks_content_gap ADD VALUE IF NOT EXISTS 'gap-x-22';
  ALTER TYPE enum_pages_blocks_content_gap ADD VALUE IF NOT EXISTS 'gap-x-24';

  ALTER TYPE enum__pages_v_blocks_content_gap ADD VALUE IF NOT EXISTS 'gap-x-2';
  ALTER TYPE enum__pages_v_blocks_content_gap ADD VALUE IF NOT EXISTS 'gap-x-4';
  ALTER TYPE enum__pages_v_blocks_content_gap ADD VALUE IF NOT EXISTS 'gap-x-6';
  ALTER TYPE enum__pages_v_blocks_content_gap ADD VALUE IF NOT EXISTS 'gap-x-8';
  ALTER TYPE enum__pages_v_blocks_content_gap ADD VALUE IF NOT EXISTS 'gap-x-10';
  ALTER TYPE enum__pages_v_blocks_content_gap ADD VALUE IF NOT EXISTS 'gap-x-12';
  ALTER TYPE enum__pages_v_blocks_content_gap ADD VALUE IF NOT EXISTS 'gap-x-14';
  ALTER TYPE enum__pages_v_blocks_content_gap ADD VALUE IF NOT EXISTS 'gap-x-16';
  ALTER TYPE enum__pages_v_blocks_content_gap ADD VALUE IF NOT EXISTS 'gap-x-18';
  ALTER TYPE enum__pages_v_blocks_content_gap ADD VALUE IF NOT EXISTS 'gap-x-20';
  ALTER TYPE enum__pages_v_blocks_content_gap ADD VALUE IF NOT EXISTS 'gap-x-22';
  ALTER TYPE enum__pages_v_blocks_content_gap ADD VALUE IF NOT EXISTS 'gap-x-24';
  `)
}

export async function down({}: MigrateDownArgs): Promise<void> {}
