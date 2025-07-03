import { MigrateDownArgs, MigrateUpArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."_locales" AS ENUM('fr', 'en');
  CREATE TYPE "public"."enum_pages_blocks_button_style" AS ENUM('primary', 'primary-outline', 'secondary', 'secondary-outline');
  CREATE TYPE "public"."enum_pages_blocks_button_position_icon" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum_pages_blocks_button_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_media_shadow_color" AS ENUM('#0A0082', '#F5D750', '#D72870', '#008874');
  CREATE TYPE "public"."enum_pages_blocks_link_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_link_position_icon" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum_pages_blocks_footer_card_style" AS ENUM('Carré', 'Arrondi');
  CREATE TYPE "public"."enum_pages_blocks_footer_card_primary_color" AS ENUM('bg-primary-500', 'bg-secondary-400', 'bg-white', 'bg-secondary-200', 'bg-secondary-100');
  CREATE TYPE "public"."enum_pages_blocks_footer_card_secondary_color" AS ENUM('tertiary-yellow', 'primary-500', 'primary-200', 'secondary-100', 'tertiary-red', 'secondary-500', 'secondary-400');
  CREATE TYPE "public"."enum_pages_blocks_chapo_background_color" AS ENUM('bg-primary-400', 'bg-secondary-200', 'bg-tertiary-yellow');
  CREATE TYPE "public"."enum_pages_blocks_video_transcript_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_radd_citation_image_settings_position" AS ENUM('left', 'top');
  CREATE TYPE "public"."enum_pages_blocks_radd_key_figures_items_background_color" AS ENUM('#FFFFFF-1', '#FFFFFF-2', '#0A0082', '#23AFE5', '#00786A', '#75B726', '#D41764', '#FBB900');
  CREATE TYPE "public"."enum_pages_blocks_radd_title_image_image_border" AS ENUM('bottom-left', 'bottom-right', 'top-left', 'top-right');
  CREATE TYPE "public"."enum_pages_blocks_radd_title_image_size" AS ENUM('1/3', '2/3', '1/2', 'fullImage', 'fullContent');
  CREATE TYPE "public"."enum_pages_blocks_radd_title_image_image_position" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum_pages_blocks_radd_title_image_content_picto_color" AS ENUM('blue', 'light-blue', 'green', 'light-green', 'fluo-green', 'pink');
  CREATE TYPE "public"."enum_pages_blocks_radd_extension_metro_line" AS ENUM('#662483', '#8D5E2A');
  CREATE TYPE "public"."enum_pages_blocks_radd_image_leaf_items_element_position" AS ENUM('left', 'center', 'right');
  CREATE TYPE "public"."enum_pages_blocks_radd_image_leaf_items_color" AS ENUM('#0A0082', '#23AFE5', '#008874', '#75B726', '#D41764');
  CREATE TYPE "public"."enum_pages_blocks_radd_image_leaf_items_leaf_position" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum_pages_blocks_content_columns_size" AS ENUM('oneThird', 'half', 'twoThirds', 'full');
  CREATE TYPE "public"."enum_pages_blocks_content_gap" AS ENUM('gap-1', 'gap-2', 'gap-3', 'gap-4', 'gap-5', 'gap-6', 'gap-7', 'gap-8', 'gap-9', 'gap-10');
  CREATE TYPE "public"."enum_pages_meta_robots" AS ENUM('index,follow', 'noindex,follow', 'index,nofollow', 'noindex,nofollow', '');
  CREATE TYPE "public"."enum_pages_redirect_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__pages_v_blocks_button_style" AS ENUM('primary', 'primary-outline', 'secondary', 'secondary-outline');
  CREATE TYPE "public"."enum__pages_v_blocks_button_position_icon" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum__pages_v_blocks_button_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_media_shadow_color" AS ENUM('#0A0082', '#F5D750', '#D72870', '#008874');
  CREATE TYPE "public"."enum__pages_v_blocks_link_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_link_position_icon" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum__pages_v_blocks_footer_card_style" AS ENUM('Carré', 'Arrondi');
  CREATE TYPE "public"."enum__pages_v_blocks_footer_card_primary_color" AS ENUM('bg-primary-500', 'bg-secondary-400', 'bg-white', 'bg-secondary-200', 'bg-secondary-100');
  CREATE TYPE "public"."enum__pages_v_blocks_footer_card_secondary_color" AS ENUM('tertiary-yellow', 'primary-500', 'primary-200', 'secondary-100', 'tertiary-red', 'secondary-500', 'secondary-400');
  CREATE TYPE "public"."enum__pages_v_blocks_chapo_background_color" AS ENUM('bg-primary-400', 'bg-secondary-200', 'bg-tertiary-yellow');
  CREATE TYPE "public"."enum__pages_v_blocks_video_transcript_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_radd_citation_image_settings_position" AS ENUM('left', 'top');
  CREATE TYPE "public"."enum__pages_v_blocks_radd_key_figures_items_background_color" AS ENUM('#FFFFFF-1', '#FFFFFF-2', '#0A0082', '#23AFE5', '#00786A', '#75B726', '#D41764', '#FBB900');
  CREATE TYPE "public"."enum__pages_v_blocks_radd_title_image_image_border" AS ENUM('bottom-left', 'bottom-right', 'top-left', 'top-right');
  CREATE TYPE "public"."enum__pages_v_blocks_radd_title_image_size" AS ENUM('1/3', '2/3', '1/2', 'fullImage', 'fullContent');
  CREATE TYPE "public"."enum__pages_v_blocks_radd_title_image_image_position" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum__pages_v_blocks_radd_title_image_content_picto_color" AS ENUM('blue', 'light-blue', 'green', 'light-green', 'fluo-green', 'pink');
  CREATE TYPE "public"."enum__pages_v_blocks_radd_extension_metro_line" AS ENUM('#662483', '#8D5E2A');
  CREATE TYPE "public"."enum__pages_v_blocks_radd_image_leaf_items_element_position" AS ENUM('left', 'center', 'right');
  CREATE TYPE "public"."enum__pages_v_blocks_radd_image_leaf_items_color" AS ENUM('#0A0082', '#23AFE5', '#008874', '#75B726', '#D41764');
  CREATE TYPE "public"."enum__pages_v_blocks_radd_image_leaf_items_leaf_position" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum__pages_v_blocks_content_columns_size" AS ENUM('oneThird', 'half', 'twoThirds', 'full');
  CREATE TYPE "public"."enum__pages_v_blocks_content_gap" AS ENUM('gap-1', 'gap-2', 'gap-3', 'gap-4', 'gap-5', 'gap-6', 'gap-7', 'gap-8', 'gap-9', 'gap-10');
  CREATE TYPE "public"."enum__pages_v_version_meta_robots" AS ENUM('index,follow', 'noindex,follow', 'index,nofollow', 'noindex,nofollow', '');
  CREATE TYPE "public"."enum__pages_v_version_redirect_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__pages_v_published_locale" AS ENUM('fr', 'en');
  CREATE TYPE "public"."enum_thematics_collection" AS ENUM('ref-documents', 'group-news', 'foundation-news', 'entities', 'realizations', 'press');
  CREATE TYPE "public"."enum_redirects_to_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_forms_confirmation_type" AS ENUM('message', 'redirect');
  CREATE TYPE "public"."enum_header_blocks_button_style" AS ENUM('primary', 'primary-outline', 'secondary', 'secondary-outline');
  CREATE TYPE "public"."enum_header_blocks_button_position_icon" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum_header_blocks_button_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_header_blocks_link_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_header_blocks_link_position_icon" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum_header_ecoindex_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_footer_blocks_link_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_footer_blocks_link_position_icon" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum_footer_blocks_button_style" AS ENUM('primary', 'primary-outline', 'secondary', 'secondary-outline');
  CREATE TYPE "public"."enum_footer_blocks_button_position_icon" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum_footer_blocks_button_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_footer_blocks_footer_card_style" AS ENUM('Carré', 'Arrondi');
  CREATE TYPE "public"."enum_footer_blocks_footer_card_primary_color" AS ENUM('bg-primary-500', 'bg-secondary-400', 'bg-white', 'bg-secondary-200', 'bg-secondary-100');
  CREATE TYPE "public"."enum_footer_blocks_footer_card_secondary_color" AS ENUM('tertiary-yellow', 'primary-500', 'primary-200', 'secondary-100', 'tertiary-red', 'secondary-500', 'secondary-400');
  CREATE TYPE "public"."enum_footer_bottom_banner_nav_items_link_type" AS ENUM('reference', 'custom');
  CREATE TABLE IF NOT EXISTS "pages_blocks_button" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"style" "enum_pages_blocks_button_style" DEFAULT 'primary',
  	"icon" varchar,
  	"position_icon" "enum_pages_blocks_button_position_icon",
  	"link_type" "enum_pages_blocks_button_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_button_locales" (
  	"label" varchar,
  	"link_url" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_title_image" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"realisation_text" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_title_image_locales" (
  	"title" jsonb,
  	"published_at" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_form_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"form_id" integer,
  	"enable_intro" boolean,
  	"intro_content" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_paragraph" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_paragraph_locales" (
  	"paragraph" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_media" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"media_id" integer,
  	"shadow_color" "enum_pages_blocks_media_shadow_color",
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_link" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_pages_blocks_link_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"icon" varchar,
  	"position_icon" "enum_pages_blocks_link_position_icon",
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_link_locales" (
  	"link_url" varchar,
  	"link_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_footer_card" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"style" "enum_pages_blocks_footer_card_style",
  	"primary_color" "enum_pages_blocks_footer_card_primary_color" DEFAULT 'bg-primary-500',
  	"secondary_color" "enum_pages_blocks_footer_card_secondary_color" DEFAULT 'tertiary-yellow',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_footer_card_locales" (
  	"title" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_separator" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_quote" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_quote_locales" (
  	"quote" jsonb,
  	"author" jsonb,
  	"job_company" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_introduction" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_introduction_locales" (
  	"title" jsonb,
  	"description" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_chapo" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"background_color" "enum_pages_blocks_chapo_background_color",
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_chapo_locales" (
  	"description" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_image_card_card_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_image_card_card_content_locales" (
  	"description" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_image_card" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_image_card_locales" (
  	"card_title" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_list_list_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_list_list_items_locales" (
  	"text" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_list" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_list_locales" (
  	"asterisk" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_key_figures_key_figures_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_key_figures_key_figures_items_locales" (
  	"key_figure" varchar,
  	"key_figure_description" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_key_figures" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_key_figures_locales" (
  	"title" jsonb,
  	"description" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_word_cloud_word_cloud_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_word_cloud_word_cloud_items_locales" (
  	"word" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_word_cloud" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_word_cloud_locales" (
  	"title" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_social_media_social_media_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_social_media" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_social_media_locales" (
  	"title" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_page_highlight" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_video" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"transcript_link_type" "enum_pages_blocks_video_transcript_link_type" DEFAULT 'reference',
  	"transcript_link_new_tab" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_video_locales" (
  	"super_title" varchar,
  	"title" varchar,
  	"description" varchar,
  	"iframe_code" varchar,
  	"legend" jsonb,
  	"transcript_link_url" varchar,
  	"transcript_link_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_radd_citation" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_settings_position" "enum_pages_blocks_radd_citation_image_settings_position",
  	"image_settings_image_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_radd_citation_locales" (
  	"author_name" jsonb,
  	"author_job_company" varchar,
  	"quote_super_title" varchar,
  	"quote_title" jsonb,
  	"quote_description" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_radd_key_figures_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"background_color" "enum_pages_blocks_radd_key_figures_items_background_color",
  	"pictogramme_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_radd_key_figures_items_locales" (
  	"key_figure" jsonb,
  	"description" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_radd_key_figures" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_radd_title_image_image_border" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_pages_blocks_radd_title_image_image_border",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_radd_title_image" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"size" "enum_pages_blocks_radd_title_image_size",
  	"image_show_image" boolean,
  	"image_image_id" integer,
  	"image_position" "enum_pages_blocks_radd_title_image_image_position",
  	"content_show_content" boolean,
  	"content_picto_show_picto" boolean,
  	"content_picto_color" "enum_pages_blocks_radd_title_image_content_picto_color",
  	"content_links_show_links" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_radd_title_image_locales" (
  	"content_title" jsonb,
  	"content_description" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_radd_extension_list_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_radd_extension_list_items_locales" (
  	"key_figure" varchar,
  	"description" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_radd_extension" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"metro_line" "enum_pages_blocks_radd_extension_metro_line",
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_radd_image_leaf_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_radd_image_leaf_items_locales" (
  	"image_id" integer,
  	"element_position" "enum_pages_blocks_radd_image_leaf_items_element_position",
  	"color" "enum_pages_blocks_radd_image_leaf_items_color",
  	"leaf_position" "enum_pages_blocks_radd_image_leaf_items_leaf_position",
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_radd_image_leaf" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_text_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"left_image_id" integer,
  	"bottom_image_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_text_images_locales" (
  	"overline" varchar,
  	"title" jsonb,
  	"description" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_content_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"size" "enum_pages_blocks_content_columns_size" DEFAULT 'oneThird'
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"gap" "enum_pages_blocks_content_gap" DEFAULT 'gap-4',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_breadcrumbs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"doc_id" integer,
  	"url" varchar,
  	"label" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"meta_canonical" varchar,
  	"meta_robots" "enum_pages_meta_robots" DEFAULT 'index,follow',
  	"ecoindex_ecoindex" numeric,
  	"published_at" timestamp(3) with time zone,
  	"unpublished_at" timestamp(3) with time zone,
  	"redirect_link_type" "enum_pages_redirect_link_type" DEFAULT 'reference',
  	"redirect_link_new_tab" boolean,
  	"slug_lock" boolean DEFAULT true,
  	"parent_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_pages_status" DEFAULT 'draft'
  );
  
  CREATE TABLE IF NOT EXISTS "pages_locales" (
  	"title" varchar,
  	"extract" varchar,
  	"meta_title" varchar,
  	"meta_image_id" integer,
  	"meta_description" varchar,
  	"redirect_link_url" varchar,
  	"slug" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "pages_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_button" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"style" "enum__pages_v_blocks_button_style" DEFAULT 'primary',
  	"icon" varchar,
  	"position_icon" "enum__pages_v_blocks_button_position_icon",
  	"link_type" "enum__pages_v_blocks_button_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_button_locales" (
  	"label" varchar,
  	"link_url" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_title_image" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"realisation_text" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_title_image_locales" (
  	"title" jsonb,
  	"published_at" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_form_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"form_id" integer,
  	"enable_intro" boolean,
  	"intro_content" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_paragraph" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_paragraph_locales" (
  	"paragraph" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_media" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"media_id" integer,
  	"shadow_color" "enum__pages_v_blocks_media_shadow_color",
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_link" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__pages_v_blocks_link_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"icon" varchar,
  	"position_icon" "enum__pages_v_blocks_link_position_icon",
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_link_locales" (
  	"link_url" varchar,
  	"link_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_footer_card" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"style" "enum__pages_v_blocks_footer_card_style",
  	"primary_color" "enum__pages_v_blocks_footer_card_primary_color" DEFAULT 'bg-primary-500',
  	"secondary_color" "enum__pages_v_blocks_footer_card_secondary_color" DEFAULT 'tertiary-yellow',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_footer_card_locales" (
  	"title" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_separator" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_quote" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_quote_locales" (
  	"quote" jsonb,
  	"author" jsonb,
  	"job_company" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_introduction" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_introduction_locales" (
  	"title" jsonb,
  	"description" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_chapo" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"background_color" "enum__pages_v_blocks_chapo_background_color",
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_chapo_locales" (
  	"description" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_image_card_card_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_image_card_card_content_locales" (
  	"description" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_image_card" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_image_card_locales" (
  	"card_title" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_list_list_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_list_list_items_locales" (
  	"text" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_list" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_list_locales" (
  	"asterisk" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_key_figures_key_figures_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_key_figures_key_figures_items_locales" (
  	"key_figure" varchar,
  	"key_figure_description" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_key_figures" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_key_figures_locales" (
  	"title" jsonb,
  	"description" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_word_cloud_word_cloud_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_word_cloud_word_cloud_items_locales" (
  	"word" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_word_cloud" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_word_cloud_locales" (
  	"title" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_social_media_social_media_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_social_media" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_social_media_locales" (
  	"title" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_page_highlight" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_video" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"transcript_link_type" "enum__pages_v_blocks_video_transcript_link_type" DEFAULT 'reference',
  	"transcript_link_new_tab" boolean,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_video_locales" (
  	"super_title" varchar,
  	"title" varchar,
  	"description" varchar,
  	"iframe_code" varchar,
  	"legend" jsonb,
  	"transcript_link_url" varchar,
  	"transcript_link_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_radd_citation" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_settings_position" "enum__pages_v_blocks_radd_citation_image_settings_position",
  	"image_settings_image_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_radd_citation_locales" (
  	"author_name" jsonb,
  	"author_job_company" varchar,
  	"quote_super_title" varchar,
  	"quote_title" jsonb,
  	"quote_description" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_radd_key_figures_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"background_color" "enum__pages_v_blocks_radd_key_figures_items_background_color",
  	"pictogramme_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_radd_key_figures_items_locales" (
  	"key_figure" jsonb,
  	"description" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_radd_key_figures" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_radd_title_image_image_border" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__pages_v_blocks_radd_title_image_image_border",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_radd_title_image" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"size" "enum__pages_v_blocks_radd_title_image_size",
  	"image_show_image" boolean,
  	"image_image_id" integer,
  	"image_position" "enum__pages_v_blocks_radd_title_image_image_position",
  	"content_show_content" boolean,
  	"content_picto_show_picto" boolean,
  	"content_picto_color" "enum__pages_v_blocks_radd_title_image_content_picto_color",
  	"content_links_show_links" boolean,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_radd_title_image_locales" (
  	"content_title" jsonb,
  	"content_description" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_radd_extension_list_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_radd_extension_list_items_locales" (
  	"key_figure" varchar,
  	"description" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_radd_extension" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"metro_line" "enum__pages_v_blocks_radd_extension_metro_line",
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_radd_image_leaf_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_radd_image_leaf_items_locales" (
  	"image_id" integer,
  	"element_position" "enum__pages_v_blocks_radd_image_leaf_items_element_position",
  	"color" "enum__pages_v_blocks_radd_image_leaf_items_color",
  	"leaf_position" "enum__pages_v_blocks_radd_image_leaf_items_leaf_position",
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_radd_image_leaf" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_text_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"left_image_id" integer,
  	"bottom_image_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_text_images_locales" (
  	"overline" varchar,
  	"title" jsonb,
  	"description" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_content_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"size" "enum__pages_v_blocks_content_columns_size" DEFAULT 'oneThird',
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"gap" "enum__pages_v_blocks_content_gap" DEFAULT 'gap-4',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_version_breadcrumbs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"doc_id" integer,
  	"url" varchar,
  	"label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_meta_canonical" varchar,
  	"version_meta_robots" "enum__pages_v_version_meta_robots" DEFAULT 'index,follow',
  	"version_ecoindex_ecoindex" numeric,
  	"version_published_at" timestamp(3) with time zone,
  	"version_unpublished_at" timestamp(3) with time zone,
  	"version_redirect_link_type" "enum__pages_v_version_redirect_link_type" DEFAULT 'reference',
  	"version_redirect_link_new_tab" boolean,
  	"version_slug_lock" boolean DEFAULT true,
  	"version_parent_id" integer,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__pages_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"snapshot" boolean,
  	"published_locale" "enum__pages_v_published_locale",
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_locales" (
  	"version_title" varchar,
  	"version_extract" varchar,
  	"version_meta_title" varchar,
  	"version_meta_image_id" integer,
  	"version_meta_description" varchar,
  	"version_redirect_link_url" varchar,
  	"version_slug" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "media" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric,
  	"sizes_thumbnail_url" varchar,
  	"sizes_thumbnail_width" numeric,
  	"sizes_thumbnail_height" numeric,
  	"sizes_thumbnail_mime_type" varchar,
  	"sizes_thumbnail_filesize" numeric,
  	"sizes_thumbnail_filename" varchar,
  	"sizes_square_url" varchar,
  	"sizes_square_width" numeric,
  	"sizes_square_height" numeric,
  	"sizes_square_mime_type" varchar,
  	"sizes_square_filesize" numeric,
  	"sizes_square_filename" varchar,
  	"sizes_small_url" varchar,
  	"sizes_small_width" numeric,
  	"sizes_small_height" numeric,
  	"sizes_small_mime_type" varchar,
  	"sizes_small_filesize" numeric,
  	"sizes_small_filename" varchar,
  	"sizes_medium_url" varchar,
  	"sizes_medium_width" numeric,
  	"sizes_medium_height" numeric,
  	"sizes_medium_mime_type" varchar,
  	"sizes_medium_filesize" numeric,
  	"sizes_medium_filename" varchar,
  	"sizes_large_url" varchar,
  	"sizes_large_width" numeric,
  	"sizes_large_height" numeric,
  	"sizes_large_mime_type" varchar,
  	"sizes_large_filesize" numeric,
  	"sizes_large_filename" varchar,
  	"sizes_xlarge_url" varchar,
  	"sizes_xlarge_width" numeric,
  	"sizes_xlarge_height" numeric,
  	"sizes_xlarge_mime_type" varchar,
  	"sizes_xlarge_filesize" numeric,
  	"sizes_xlarge_filename" varchar,
  	"sizes_og_url" varchar,
  	"sizes_og_width" numeric,
  	"sizes_og_height" numeric,
  	"sizes_og_mime_type" varchar,
  	"sizes_og_filesize" numeric,
  	"sizes_og_filename" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "media_locales" (
  	"alt" varchar NOT NULL,
  	"caption" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "thematics" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"thematic" varchar NOT NULL,
  	"collection" "enum_thematics_collection" NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "locations" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"location" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "users" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"email" varchar NOT NULL,
  	"reset_password_token" varchar,
  	"reset_password_expiration" timestamp(3) with time zone,
  	"salt" varchar,
  	"hash" varchar,
  	"login_attempts" numeric DEFAULT 0,
  	"lock_until" timestamp(3) with time zone
  );
  
  CREATE TABLE IF NOT EXISTS "redirects" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"from" varchar NOT NULL,
  	"to_type" "enum_redirects_to_type" DEFAULT 'reference',
  	"to_url" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "redirects_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_checkbox" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"width" numeric,
  	"required" boolean,
  	"default_value" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_checkbox_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_country" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"width" numeric,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_country_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_email" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"width" numeric,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_email_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_message" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_message_locales" (
  	"message" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_number" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"width" numeric,
  	"default_value" numeric,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_number_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_select_options" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_select_options_locales" (
  	"label" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_select" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"width" numeric,
  	"placeholder" varchar,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_select_locales" (
  	"label" varchar,
  	"default_value" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_state" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"width" numeric,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_state_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"width" numeric,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_text_locales" (
  	"label" varchar,
  	"default_value" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_textarea" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"width" numeric,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_textarea_locales" (
  	"label" varchar,
  	"default_value" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "forms_emails" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"email_to" varchar,
  	"cc" varchar,
  	"bcc" varchar,
  	"reply_to" varchar,
  	"email_from" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "forms_emails_locales" (
  	"subject" varchar DEFAULT 'You''''ve received a new message.' NOT NULL,
  	"message" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "forms" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"confirmation_type" "enum_forms_confirmation_type" DEFAULT 'message',
  	"redirect_url" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "forms_locales" (
  	"submit_button_label" varchar,
  	"confirmation_message" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "form_submissions_submission_data" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"field" varchar NOT NULL,
  	"value" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "form_submissions" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"form_id" integer NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "search_categories" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"relation_to" varchar,
  	"title" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "search" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"priority" numeric,
  	"slug" varchar,
  	"meta_title" varchar,
  	"meta_description" varchar,
  	"meta_image_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "search_locales" (
  	"title" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "search_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "payload_locked_documents" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"global_slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "payload_locked_documents_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"media_id" integer,
  	"thematics_id" integer,
  	"locations_id" integer,
  	"users_id" integer,
  	"redirects_id" integer,
  	"forms_id" integer,
  	"form_submissions_id" integer,
  	"search_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "payload_preferences" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar,
  	"value" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "payload_preferences_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "payload_migrations" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"batch" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "header_languages" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"country_label" varchar NOT NULL,
  	"country_code" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "header_blocks_button" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"style" "enum_header_blocks_button_style" DEFAULT 'primary' NOT NULL,
  	"icon" varchar,
  	"position_icon" "enum_header_blocks_button_position_icon",
  	"link_type" "enum_header_blocks_button_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "header_blocks_button_locales" (
  	"label" varchar NOT NULL,
  	"link_url" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "header_blocks_link" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_header_blocks_link_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"icon" varchar,
  	"position_icon" "enum_header_blocks_link_position_icon",
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "header_blocks_link_locales" (
  	"link_url" varchar,
  	"link_label" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "header_nav_items_sub_nav_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "header_nav_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "header_nav_items_locales" (
  	"label" varchar NOT NULL,
  	"description" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "header" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"ecoindex_link_type" "enum_header_ecoindex_link_type" DEFAULT 'reference',
  	"ecoindex_link_new_tab" boolean,
  	"logo_image_id" integer NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE IF NOT EXISTS "header_locales" (
  	"ecoindex_ecoindex_text" varchar NOT NULL,
  	"ecoindex_link_url" varchar,
  	"ecoindex_rich_text" jsonb NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "header_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "footer_blocks_link" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_footer_blocks_link_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"icon" varchar,
  	"position_icon" "enum_footer_blocks_link_position_icon",
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "footer_blocks_link_locales" (
  	"link_url" varchar,
  	"link_label" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "footer_blocks_button" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"style" "enum_footer_blocks_button_style" DEFAULT 'primary' NOT NULL,
  	"icon" varchar,
  	"position_icon" "enum_footer_blocks_button_position_icon",
  	"link_type" "enum_footer_blocks_button_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "footer_blocks_button_locales" (
  	"label" varchar NOT NULL,
  	"link_url" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "footer_blocks_footer_card" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"style" "enum_footer_blocks_footer_card_style" NOT NULL,
  	"primary_color" "enum_footer_blocks_footer_card_primary_color" DEFAULT 'bg-primary-500' NOT NULL,
  	"secondary_color" "enum_footer_blocks_footer_card_secondary_color" DEFAULT 'tertiary-yellow' NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "footer_blocks_footer_card_locales" (
  	"title" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "footer_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "footer_columns_locales" (
  	"title" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "footer_bottom_banner_nav_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_footer_bottom_banner_nav_items_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean
  );
  
  CREATE TABLE IF NOT EXISTS "footer_bottom_banner_nav_items_locales" (
  	"link_url" varchar,
  	"link_label" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "footer" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"logo_id" integer NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE IF NOT EXISTS "footer_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer
  );
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_button" ADD CONSTRAINT "pages_blocks_button_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_button_locales" ADD CONSTRAINT "pages_blocks_button_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_button"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_title_image" ADD CONSTRAINT "pages_blocks_title_image_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_title_image" ADD CONSTRAINT "pages_blocks_title_image_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_title_image_locales" ADD CONSTRAINT "pages_blocks_title_image_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_title_image"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_form_block" ADD CONSTRAINT "pages_blocks_form_block_form_id_forms_id_fk" FOREIGN KEY ("form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_form_block" ADD CONSTRAINT "pages_blocks_form_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_paragraph" ADD CONSTRAINT "pages_blocks_paragraph_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_paragraph_locales" ADD CONSTRAINT "pages_blocks_paragraph_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_paragraph"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_media" ADD CONSTRAINT "pages_blocks_media_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_media" ADD CONSTRAINT "pages_blocks_media_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_link" ADD CONSTRAINT "pages_blocks_link_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_link_locales" ADD CONSTRAINT "pages_blocks_link_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_link"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_footer_card" ADD CONSTRAINT "pages_blocks_footer_card_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_footer_card_locales" ADD CONSTRAINT "pages_blocks_footer_card_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_footer_card"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_separator" ADD CONSTRAINT "pages_blocks_separator_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_quote" ADD CONSTRAINT "pages_blocks_quote_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_quote" ADD CONSTRAINT "pages_blocks_quote_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_quote_locales" ADD CONSTRAINT "pages_blocks_quote_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_quote"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_introduction" ADD CONSTRAINT "pages_blocks_introduction_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_introduction" ADD CONSTRAINT "pages_blocks_introduction_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_introduction_locales" ADD CONSTRAINT "pages_blocks_introduction_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_introduction"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_chapo" ADD CONSTRAINT "pages_blocks_chapo_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_chapo_locales" ADD CONSTRAINT "pages_blocks_chapo_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_chapo"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_image_card_card_content" ADD CONSTRAINT "pages_blocks_image_card_card_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_image_card"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_image_card_card_content_locales" ADD CONSTRAINT "pages_blocks_image_card_card_content_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_image_card_card_content"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_image_card" ADD CONSTRAINT "pages_blocks_image_card_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_image_card" ADD CONSTRAINT "pages_blocks_image_card_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_image_card_locales" ADD CONSTRAINT "pages_blocks_image_card_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_image_card"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_list_list_items" ADD CONSTRAINT "pages_blocks_list_list_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_list"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_list_list_items_locales" ADD CONSTRAINT "pages_blocks_list_list_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_list_list_items"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_list" ADD CONSTRAINT "pages_blocks_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_list_locales" ADD CONSTRAINT "pages_blocks_list_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_list"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_key_figures_key_figures_items" ADD CONSTRAINT "pages_blocks_key_figures_key_figures_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_key_figures"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_key_figures_key_figures_items_locales" ADD CONSTRAINT "pages_blocks_key_figures_key_figures_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_key_figures_key_figures_items"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_key_figures" ADD CONSTRAINT "pages_blocks_key_figures_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_key_figures_locales" ADD CONSTRAINT "pages_blocks_key_figures_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_key_figures"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_word_cloud_word_cloud_items" ADD CONSTRAINT "pages_blocks_word_cloud_word_cloud_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_word_cloud"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_word_cloud_word_cloud_items_locales" ADD CONSTRAINT "pages_blocks_word_cloud_word_cloud_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_word_cloud_word_cloud_items"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_word_cloud" ADD CONSTRAINT "pages_blocks_word_cloud_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_word_cloud_locales" ADD CONSTRAINT "pages_blocks_word_cloud_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_word_cloud"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_social_media_social_media_items" ADD CONSTRAINT "pages_blocks_social_media_social_media_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_social_media"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_social_media" ADD CONSTRAINT "pages_blocks_social_media_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_social_media_locales" ADD CONSTRAINT "pages_blocks_social_media_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_social_media"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_page_highlight" ADD CONSTRAINT "pages_blocks_page_highlight_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_video" ADD CONSTRAINT "pages_blocks_video_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_video_locales" ADD CONSTRAINT "pages_blocks_video_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_video"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_radd_citation" ADD CONSTRAINT "pages_blocks_radd_citation_image_settings_image_id_media_id_fk" FOREIGN KEY ("image_settings_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_radd_citation" ADD CONSTRAINT "pages_blocks_radd_citation_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_radd_citation_locales" ADD CONSTRAINT "pages_blocks_radd_citation_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_radd_citation"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_radd_key_figures_items" ADD CONSTRAINT "pages_blocks_radd_key_figures_items_pictogramme_id_media_id_fk" FOREIGN KEY ("pictogramme_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_radd_key_figures_items" ADD CONSTRAINT "pages_blocks_radd_key_figures_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_radd_key_figures"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_radd_key_figures_items_locales" ADD CONSTRAINT "pages_blocks_radd_key_figures_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_radd_key_figures_items"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_radd_key_figures" ADD CONSTRAINT "pages_blocks_radd_key_figures_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_radd_title_image_image_border" ADD CONSTRAINT "pages_blocks_radd_title_image_image_border_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages_blocks_radd_title_image"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_radd_title_image" ADD CONSTRAINT "pages_blocks_radd_title_image_image_image_id_media_id_fk" FOREIGN KEY ("image_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_radd_title_image" ADD CONSTRAINT "pages_blocks_radd_title_image_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_radd_title_image_locales" ADD CONSTRAINT "pages_blocks_radd_title_image_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_radd_title_image"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_radd_extension_list_items" ADD CONSTRAINT "pages_blocks_radd_extension_list_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_radd_extension"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_radd_extension_list_items_locales" ADD CONSTRAINT "pages_blocks_radd_extension_list_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_radd_extension_list_items"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_radd_extension" ADD CONSTRAINT "pages_blocks_radd_extension_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_radd_image_leaf_items" ADD CONSTRAINT "pages_blocks_radd_image_leaf_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_radd_image_leaf"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_radd_image_leaf_items_locales" ADD CONSTRAINT "pages_blocks_radd_image_leaf_items_locales_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_radd_image_leaf_items_locales" ADD CONSTRAINT "pages_blocks_radd_image_leaf_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_radd_image_leaf_items"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_radd_image_leaf" ADD CONSTRAINT "pages_blocks_radd_image_leaf_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_text_images" ADD CONSTRAINT "pages_blocks_text_images_left_image_id_media_id_fk" FOREIGN KEY ("left_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_text_images" ADD CONSTRAINT "pages_blocks_text_images_bottom_image_id_media_id_fk" FOREIGN KEY ("bottom_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_text_images" ADD CONSTRAINT "pages_blocks_text_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_text_images_locales" ADD CONSTRAINT "pages_blocks_text_images_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_text_images"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_content_columns" ADD CONSTRAINT "pages_blocks_content_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_content"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_content" ADD CONSTRAINT "pages_blocks_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_breadcrumbs" ADD CONSTRAINT "pages_breadcrumbs_doc_id_pages_id_fk" FOREIGN KEY ("doc_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_breadcrumbs" ADD CONSTRAINT "pages_breadcrumbs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages" ADD CONSTRAINT "pages_parent_id_pages_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_locales" ADD CONSTRAINT "pages_locales_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_locales" ADD CONSTRAINT "pages_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_button" ADD CONSTRAINT "_pages_v_blocks_button_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_button_locales" ADD CONSTRAINT "_pages_v_blocks_button_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_button"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_title_image" ADD CONSTRAINT "_pages_v_blocks_title_image_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_title_image" ADD CONSTRAINT "_pages_v_blocks_title_image_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_title_image_locales" ADD CONSTRAINT "_pages_v_blocks_title_image_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_title_image"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_form_block" ADD CONSTRAINT "_pages_v_blocks_form_block_form_id_forms_id_fk" FOREIGN KEY ("form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_form_block" ADD CONSTRAINT "_pages_v_blocks_form_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_paragraph" ADD CONSTRAINT "_pages_v_blocks_paragraph_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_paragraph_locales" ADD CONSTRAINT "_pages_v_blocks_paragraph_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_paragraph"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_media" ADD CONSTRAINT "_pages_v_blocks_media_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_media" ADD CONSTRAINT "_pages_v_blocks_media_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_link" ADD CONSTRAINT "_pages_v_blocks_link_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_link_locales" ADD CONSTRAINT "_pages_v_blocks_link_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_link"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_footer_card" ADD CONSTRAINT "_pages_v_blocks_footer_card_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_footer_card_locales" ADD CONSTRAINT "_pages_v_blocks_footer_card_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_footer_card"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_separator" ADD CONSTRAINT "_pages_v_blocks_separator_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_quote" ADD CONSTRAINT "_pages_v_blocks_quote_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_quote" ADD CONSTRAINT "_pages_v_blocks_quote_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_quote_locales" ADD CONSTRAINT "_pages_v_blocks_quote_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_quote"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_introduction" ADD CONSTRAINT "_pages_v_blocks_introduction_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_introduction" ADD CONSTRAINT "_pages_v_blocks_introduction_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_introduction_locales" ADD CONSTRAINT "_pages_v_blocks_introduction_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_introduction"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_chapo" ADD CONSTRAINT "_pages_v_blocks_chapo_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_chapo_locales" ADD CONSTRAINT "_pages_v_blocks_chapo_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_chapo"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_image_card_card_content" ADD CONSTRAINT "_pages_v_blocks_image_card_card_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_image_card"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_image_card_card_content_locales" ADD CONSTRAINT "_pages_v_blocks_image_card_card_content_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_image_card_card_content"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_image_card" ADD CONSTRAINT "_pages_v_blocks_image_card_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_image_card" ADD CONSTRAINT "_pages_v_blocks_image_card_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_image_card_locales" ADD CONSTRAINT "_pages_v_blocks_image_card_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_image_card"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_list_list_items" ADD CONSTRAINT "_pages_v_blocks_list_list_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_list"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_list_list_items_locales" ADD CONSTRAINT "_pages_v_blocks_list_list_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_list_list_items"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_list" ADD CONSTRAINT "_pages_v_blocks_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_list_locales" ADD CONSTRAINT "_pages_v_blocks_list_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_list"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_key_figures_key_figures_items" ADD CONSTRAINT "_pages_v_blocks_key_figures_key_figures_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_key_figures"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_key_figures_key_figures_items_locales" ADD CONSTRAINT "_pages_v_blocks_key_figures_key_figures_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_key_figures_key_figures_items"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_key_figures" ADD CONSTRAINT "_pages_v_blocks_key_figures_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_key_figures_locales" ADD CONSTRAINT "_pages_v_blocks_key_figures_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_key_figures"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_word_cloud_word_cloud_items" ADD CONSTRAINT "_pages_v_blocks_word_cloud_word_cloud_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_word_cloud"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_word_cloud_word_cloud_items_locales" ADD CONSTRAINT "_pages_v_blocks_word_cloud_word_cloud_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_word_cloud_word_cloud_items"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_word_cloud" ADD CONSTRAINT "_pages_v_blocks_word_cloud_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_word_cloud_locales" ADD CONSTRAINT "_pages_v_blocks_word_cloud_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_word_cloud"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_social_media_social_media_items" ADD CONSTRAINT "_pages_v_blocks_social_media_social_media_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_social_media"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_social_media" ADD CONSTRAINT "_pages_v_blocks_social_media_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_social_media_locales" ADD CONSTRAINT "_pages_v_blocks_social_media_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_social_media"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_page_highlight" ADD CONSTRAINT "_pages_v_blocks_page_highlight_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_video" ADD CONSTRAINT "_pages_v_blocks_video_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_video_locales" ADD CONSTRAINT "_pages_v_blocks_video_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_video"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_radd_citation" ADD CONSTRAINT "_pages_v_blocks_radd_citation_image_settings_image_id_media_id_fk" FOREIGN KEY ("image_settings_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_radd_citation" ADD CONSTRAINT "_pages_v_blocks_radd_citation_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_radd_citation_locales" ADD CONSTRAINT "_pages_v_blocks_radd_citation_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_radd_citation"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_radd_key_figures_items" ADD CONSTRAINT "_pages_v_blocks_radd_key_figures_items_pictogramme_id_media_id_fk" FOREIGN KEY ("pictogramme_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_radd_key_figures_items" ADD CONSTRAINT "_pages_v_blocks_radd_key_figures_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_radd_key_figures"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_radd_key_figures_items_locales" ADD CONSTRAINT "_pages_v_blocks_radd_key_figures_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_radd_key_figures_items"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_radd_key_figures" ADD CONSTRAINT "_pages_v_blocks_radd_key_figures_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_radd_title_image_image_border" ADD CONSTRAINT "_pages_v_blocks_radd_title_image_image_border_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_pages_v_blocks_radd_title_image"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_radd_title_image" ADD CONSTRAINT "_pages_v_blocks_radd_title_image_image_image_id_media_id_fk" FOREIGN KEY ("image_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_radd_title_image" ADD CONSTRAINT "_pages_v_blocks_radd_title_image_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_radd_title_image_locales" ADD CONSTRAINT "_pages_v_blocks_radd_title_image_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_radd_title_image"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_radd_extension_list_items" ADD CONSTRAINT "_pages_v_blocks_radd_extension_list_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_radd_extension"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_radd_extension_list_items_locales" ADD CONSTRAINT "_pages_v_blocks_radd_extension_list_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_radd_extension_list_items"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_radd_extension" ADD CONSTRAINT "_pages_v_blocks_radd_extension_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_radd_image_leaf_items" ADD CONSTRAINT "_pages_v_blocks_radd_image_leaf_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_radd_image_leaf"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_radd_image_leaf_items_locales" ADD CONSTRAINT "_pages_v_blocks_radd_image_leaf_items_locales_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_radd_image_leaf_items_locales" ADD CONSTRAINT "_pages_v_blocks_radd_image_leaf_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_radd_image_leaf_items"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_radd_image_leaf" ADD CONSTRAINT "_pages_v_blocks_radd_image_leaf_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_text_images" ADD CONSTRAINT "_pages_v_blocks_text_images_left_image_id_media_id_fk" FOREIGN KEY ("left_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_text_images" ADD CONSTRAINT "_pages_v_blocks_text_images_bottom_image_id_media_id_fk" FOREIGN KEY ("bottom_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_text_images" ADD CONSTRAINT "_pages_v_blocks_text_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_text_images_locales" ADD CONSTRAINT "_pages_v_blocks_text_images_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_text_images"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_content_columns" ADD CONSTRAINT "_pages_v_blocks_content_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_content"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_content" ADD CONSTRAINT "_pages_v_blocks_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_version_breadcrumbs" ADD CONSTRAINT "_pages_v_version_breadcrumbs_doc_id_pages_id_fk" FOREIGN KEY ("doc_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_version_breadcrumbs" ADD CONSTRAINT "_pages_v_version_breadcrumbs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_parent_id_pages_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_parent_id_pages_id_fk" FOREIGN KEY ("version_parent_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_locales" ADD CONSTRAINT "_pages_v_locales_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_locales" ADD CONSTRAINT "_pages_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "media_locales" ADD CONSTRAINT "media_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "redirects_rels" ADD CONSTRAINT "redirects_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."redirects"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "redirects_rels" ADD CONSTRAINT "redirects_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_blocks_checkbox" ADD CONSTRAINT "forms_blocks_checkbox_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_blocks_checkbox_locales" ADD CONSTRAINT "forms_blocks_checkbox_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms_blocks_checkbox"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_blocks_country" ADD CONSTRAINT "forms_blocks_country_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_blocks_country_locales" ADD CONSTRAINT "forms_blocks_country_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms_blocks_country"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_blocks_email" ADD CONSTRAINT "forms_blocks_email_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_blocks_email_locales" ADD CONSTRAINT "forms_blocks_email_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms_blocks_email"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_blocks_message" ADD CONSTRAINT "forms_blocks_message_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_blocks_message_locales" ADD CONSTRAINT "forms_blocks_message_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms_blocks_message"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_blocks_number" ADD CONSTRAINT "forms_blocks_number_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_blocks_number_locales" ADD CONSTRAINT "forms_blocks_number_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms_blocks_number"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_blocks_select_options" ADD CONSTRAINT "forms_blocks_select_options_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms_blocks_select"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_blocks_select_options_locales" ADD CONSTRAINT "forms_blocks_select_options_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms_blocks_select_options"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_blocks_select" ADD CONSTRAINT "forms_blocks_select_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_blocks_select_locales" ADD CONSTRAINT "forms_blocks_select_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms_blocks_select"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_blocks_state" ADD CONSTRAINT "forms_blocks_state_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_blocks_state_locales" ADD CONSTRAINT "forms_blocks_state_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms_blocks_state"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_blocks_text" ADD CONSTRAINT "forms_blocks_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_blocks_text_locales" ADD CONSTRAINT "forms_blocks_text_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms_blocks_text"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_blocks_textarea" ADD CONSTRAINT "forms_blocks_textarea_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_blocks_textarea_locales" ADD CONSTRAINT "forms_blocks_textarea_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms_blocks_textarea"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_emails" ADD CONSTRAINT "forms_emails_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_emails_locales" ADD CONSTRAINT "forms_emails_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms_emails"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_locales" ADD CONSTRAINT "forms_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "form_submissions_submission_data" ADD CONSTRAINT "form_submissions_submission_data_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."form_submissions"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "form_submissions" ADD CONSTRAINT "form_submissions_form_id_forms_id_fk" FOREIGN KEY ("form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "search_categories" ADD CONSTRAINT "search_categories_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."search"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "search" ADD CONSTRAINT "search_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "search_locales" ADD CONSTRAINT "search_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."search"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "search_rels" ADD CONSTRAINT "search_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."search"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "search_rels" ADD CONSTRAINT "search_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_locked_documents"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_thematics_fk" FOREIGN KEY ("thematics_id") REFERENCES "public"."thematics"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_locations_fk" FOREIGN KEY ("locations_id") REFERENCES "public"."locations"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_redirects_fk" FOREIGN KEY ("redirects_id") REFERENCES "public"."redirects"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_forms_fk" FOREIGN KEY ("forms_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_form_submissions_fk" FOREIGN KEY ("form_submissions_id") REFERENCES "public"."form_submissions"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_search_fk" FOREIGN KEY ("search_id") REFERENCES "public"."search"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "header_languages" ADD CONSTRAINT "header_languages_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "header_blocks_button" ADD CONSTRAINT "header_blocks_button_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "header_blocks_button_locales" ADD CONSTRAINT "header_blocks_button_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header_blocks_button"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "header_blocks_link" ADD CONSTRAINT "header_blocks_link_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "header_blocks_link_locales" ADD CONSTRAINT "header_blocks_link_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header_blocks_link"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "header_nav_items_sub_nav_items" ADD CONSTRAINT "header_nav_items_sub_nav_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header_nav_items"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "header_nav_items" ADD CONSTRAINT "header_nav_items_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "header_nav_items" ADD CONSTRAINT "header_nav_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "header_nav_items_locales" ADD CONSTRAINT "header_nav_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header_nav_items"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "header" ADD CONSTRAINT "header_logo_image_id_media_id_fk" FOREIGN KEY ("logo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "header_locales" ADD CONSTRAINT "header_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "header_rels" ADD CONSTRAINT "header_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "header_rels" ADD CONSTRAINT "header_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "footer_blocks_link" ADD CONSTRAINT "footer_blocks_link_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "footer_blocks_link_locales" ADD CONSTRAINT "footer_blocks_link_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer_blocks_link"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "footer_blocks_button" ADD CONSTRAINT "footer_blocks_button_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "footer_blocks_button_locales" ADD CONSTRAINT "footer_blocks_button_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer_blocks_button"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "footer_blocks_footer_card" ADD CONSTRAINT "footer_blocks_footer_card_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "footer_blocks_footer_card_locales" ADD CONSTRAINT "footer_blocks_footer_card_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer_blocks_footer_card"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "footer_columns" ADD CONSTRAINT "footer_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "footer_columns_locales" ADD CONSTRAINT "footer_columns_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer_columns"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "footer_bottom_banner_nav_items" ADD CONSTRAINT "footer_bottom_banner_nav_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "footer_bottom_banner_nav_items_locales" ADD CONSTRAINT "footer_bottom_banner_nav_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer_bottom_banner_nav_items"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "footer" ADD CONSTRAINT "footer_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "footer_rels" ADD CONSTRAINT "footer_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "footer_rels" ADD CONSTRAINT "footer_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "pages_blocks_button_order_idx" ON "pages_blocks_button" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_button_parent_id_idx" ON "pages_blocks_button" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_button_path_idx" ON "pages_blocks_button" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_button_icon_idx" ON "pages_blocks_button" USING btree ("icon");
  CREATE UNIQUE INDEX IF NOT EXISTS "pages_blocks_button_locales_locale_parent_id_unique" ON "pages_blocks_button_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_title_image_order_idx" ON "pages_blocks_title_image" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_title_image_parent_id_idx" ON "pages_blocks_title_image" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_title_image_path_idx" ON "pages_blocks_title_image" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_title_image_image_idx" ON "pages_blocks_title_image" USING btree ("image_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "pages_blocks_title_image_locales_locale_parent_id_unique" ON "pages_blocks_title_image_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_form_block_order_idx" ON "pages_blocks_form_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_form_block_parent_id_idx" ON "pages_blocks_form_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_form_block_path_idx" ON "pages_blocks_form_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_form_block_form_idx" ON "pages_blocks_form_block" USING btree ("form_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_paragraph_order_idx" ON "pages_blocks_paragraph" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_paragraph_parent_id_idx" ON "pages_blocks_paragraph" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_paragraph_path_idx" ON "pages_blocks_paragraph" USING btree ("_path");
  CREATE UNIQUE INDEX IF NOT EXISTS "pages_blocks_paragraph_locales_locale_parent_id_unique" ON "pages_blocks_paragraph_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_media_order_idx" ON "pages_blocks_media" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_media_parent_id_idx" ON "pages_blocks_media" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_media_path_idx" ON "pages_blocks_media" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_media_media_idx" ON "pages_blocks_media" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_link_order_idx" ON "pages_blocks_link" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_link_parent_id_idx" ON "pages_blocks_link" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_link_path_idx" ON "pages_blocks_link" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_link_icon_idx" ON "pages_blocks_link" USING btree ("icon");
  CREATE UNIQUE INDEX IF NOT EXISTS "pages_blocks_link_locales_locale_parent_id_unique" ON "pages_blocks_link_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_footer_card_order_idx" ON "pages_blocks_footer_card" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_footer_card_parent_id_idx" ON "pages_blocks_footer_card" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_footer_card_path_idx" ON "pages_blocks_footer_card" USING btree ("_path");
  CREATE UNIQUE INDEX IF NOT EXISTS "pages_blocks_footer_card_locales_locale_parent_id_unique" ON "pages_blocks_footer_card_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_separator_order_idx" ON "pages_blocks_separator" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_separator_parent_id_idx" ON "pages_blocks_separator" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_separator_path_idx" ON "pages_blocks_separator" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_separator_icon_idx" ON "pages_blocks_separator" USING btree ("icon");
  CREATE INDEX IF NOT EXISTS "pages_blocks_quote_order_idx" ON "pages_blocks_quote" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_quote_parent_id_idx" ON "pages_blocks_quote" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_quote_path_idx" ON "pages_blocks_quote" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_quote_image_idx" ON "pages_blocks_quote" USING btree ("image_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "pages_blocks_quote_locales_locale_parent_id_unique" ON "pages_blocks_quote_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_introduction_order_idx" ON "pages_blocks_introduction" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_introduction_parent_id_idx" ON "pages_blocks_introduction" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_introduction_path_idx" ON "pages_blocks_introduction" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_introduction_image_idx" ON "pages_blocks_introduction" USING btree ("image_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "pages_blocks_introduction_locales_locale_parent_id_unique" ON "pages_blocks_introduction_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_chapo_order_idx" ON "pages_blocks_chapo" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_chapo_parent_id_idx" ON "pages_blocks_chapo" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_chapo_path_idx" ON "pages_blocks_chapo" USING btree ("_path");
  CREATE UNIQUE INDEX IF NOT EXISTS "pages_blocks_chapo_locales_locale_parent_id_unique" ON "pages_blocks_chapo_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_image_card_card_content_order_idx" ON "pages_blocks_image_card_card_content" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_image_card_card_content_parent_id_idx" ON "pages_blocks_image_card_card_content" USING btree ("_parent_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "pages_blocks_image_card_card_content_locales_locale_parent_id_unique" ON "pages_blocks_image_card_card_content_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_image_card_order_idx" ON "pages_blocks_image_card" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_image_card_parent_id_idx" ON "pages_blocks_image_card" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_image_card_path_idx" ON "pages_blocks_image_card" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_image_card_image_idx" ON "pages_blocks_image_card" USING btree ("image_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "pages_blocks_image_card_locales_locale_parent_id_unique" ON "pages_blocks_image_card_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_list_list_items_order_idx" ON "pages_blocks_list_list_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_list_list_items_parent_id_idx" ON "pages_blocks_list_list_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "pages_blocks_list_list_items_locales_locale_parent_id_unique" ON "pages_blocks_list_list_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_list_order_idx" ON "pages_blocks_list" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_list_parent_id_idx" ON "pages_blocks_list" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_list_path_idx" ON "pages_blocks_list" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_list_icon_idx" ON "pages_blocks_list" USING btree ("icon");
  CREATE UNIQUE INDEX IF NOT EXISTS "pages_blocks_list_locales_locale_parent_id_unique" ON "pages_blocks_list_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_key_figures_key_figures_items_order_idx" ON "pages_blocks_key_figures_key_figures_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_key_figures_key_figures_items_parent_id_idx" ON "pages_blocks_key_figures_key_figures_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "pages_blocks_key_figures_key_figures_items_locales_locale_parent_id_unique" ON "pages_blocks_key_figures_key_figures_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_key_figures_order_idx" ON "pages_blocks_key_figures" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_key_figures_parent_id_idx" ON "pages_blocks_key_figures" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_key_figures_path_idx" ON "pages_blocks_key_figures" USING btree ("_path");
  CREATE UNIQUE INDEX IF NOT EXISTS "pages_blocks_key_figures_locales_locale_parent_id_unique" ON "pages_blocks_key_figures_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_word_cloud_word_cloud_items_order_idx" ON "pages_blocks_word_cloud_word_cloud_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_word_cloud_word_cloud_items_parent_id_idx" ON "pages_blocks_word_cloud_word_cloud_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "pages_blocks_word_cloud_word_cloud_items_locales_locale_parent_id_unique" ON "pages_blocks_word_cloud_word_cloud_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_word_cloud_order_idx" ON "pages_blocks_word_cloud" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_word_cloud_parent_id_idx" ON "pages_blocks_word_cloud" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_word_cloud_path_idx" ON "pages_blocks_word_cloud" USING btree ("_path");
  CREATE UNIQUE INDEX IF NOT EXISTS "pages_blocks_word_cloud_locales_locale_parent_id_unique" ON "pages_blocks_word_cloud_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_social_media_social_media_items_order_idx" ON "pages_blocks_social_media_social_media_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_social_media_social_media_items_parent_id_idx" ON "pages_blocks_social_media_social_media_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_social_media_order_idx" ON "pages_blocks_social_media" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_social_media_parent_id_idx" ON "pages_blocks_social_media" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_social_media_path_idx" ON "pages_blocks_social_media" USING btree ("_path");
  CREATE UNIQUE INDEX IF NOT EXISTS "pages_blocks_social_media_locales_locale_parent_id_unique" ON "pages_blocks_social_media_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_page_highlight_order_idx" ON "pages_blocks_page_highlight" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_page_highlight_parent_id_idx" ON "pages_blocks_page_highlight" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_page_highlight_path_idx" ON "pages_blocks_page_highlight" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_video_order_idx" ON "pages_blocks_video" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_video_parent_id_idx" ON "pages_blocks_video" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_video_path_idx" ON "pages_blocks_video" USING btree ("_path");
  CREATE UNIQUE INDEX IF NOT EXISTS "pages_blocks_video_locales_locale_parent_id_unique" ON "pages_blocks_video_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_radd_citation_order_idx" ON "pages_blocks_radd_citation" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_radd_citation_parent_id_idx" ON "pages_blocks_radd_citation" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_radd_citation_path_idx" ON "pages_blocks_radd_citation" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_radd_citation_image_settings_image_settings_image_idx" ON "pages_blocks_radd_citation" USING btree ("image_settings_image_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "pages_blocks_radd_citation_locales_locale_parent_id_unique" ON "pages_blocks_radd_citation_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_radd_key_figures_items_order_idx" ON "pages_blocks_radd_key_figures_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_radd_key_figures_items_parent_id_idx" ON "pages_blocks_radd_key_figures_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_radd_key_figures_items_pictogramme_idx" ON "pages_blocks_radd_key_figures_items" USING btree ("pictogramme_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "pages_blocks_radd_key_figures_items_locales_locale_parent_id_unique" ON "pages_blocks_radd_key_figures_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_radd_key_figures_order_idx" ON "pages_blocks_radd_key_figures" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_radd_key_figures_parent_id_idx" ON "pages_blocks_radd_key_figures" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_radd_key_figures_path_idx" ON "pages_blocks_radd_key_figures" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_radd_title_image_image_border_order_idx" ON "pages_blocks_radd_title_image_image_border" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_radd_title_image_image_border_parent_idx" ON "pages_blocks_radd_title_image_image_border" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_radd_title_image_order_idx" ON "pages_blocks_radd_title_image" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_radd_title_image_parent_id_idx" ON "pages_blocks_radd_title_image" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_radd_title_image_path_idx" ON "pages_blocks_radd_title_image" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_radd_title_image_image_image_image_idx" ON "pages_blocks_radd_title_image" USING btree ("image_image_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "pages_blocks_radd_title_image_locales_locale_parent_id_unique" ON "pages_blocks_radd_title_image_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_radd_extension_list_items_order_idx" ON "pages_blocks_radd_extension_list_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_radd_extension_list_items_parent_id_idx" ON "pages_blocks_radd_extension_list_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "pages_blocks_radd_extension_list_items_locales_locale_parent_id_unique" ON "pages_blocks_radd_extension_list_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_radd_extension_order_idx" ON "pages_blocks_radd_extension" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_radd_extension_parent_id_idx" ON "pages_blocks_radd_extension" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_radd_extension_path_idx" ON "pages_blocks_radd_extension" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_radd_image_leaf_items_order_idx" ON "pages_blocks_radd_image_leaf_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_radd_image_leaf_items_parent_id_idx" ON "pages_blocks_radd_image_leaf_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_radd_image_leaf_items_image_idx" ON "pages_blocks_radd_image_leaf_items_locales" USING btree ("image_id","_locale");
  CREATE UNIQUE INDEX IF NOT EXISTS "pages_blocks_radd_image_leaf_items_locales_locale_parent_id_unique" ON "pages_blocks_radd_image_leaf_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_radd_image_leaf_order_idx" ON "pages_blocks_radd_image_leaf" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_radd_image_leaf_parent_id_idx" ON "pages_blocks_radd_image_leaf" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_radd_image_leaf_path_idx" ON "pages_blocks_radd_image_leaf" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_text_images_order_idx" ON "pages_blocks_text_images" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_text_images_parent_id_idx" ON "pages_blocks_text_images" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_text_images_path_idx" ON "pages_blocks_text_images" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_text_images_left_image_idx" ON "pages_blocks_text_images" USING btree ("left_image_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_text_images_bottom_image_idx" ON "pages_blocks_text_images" USING btree ("bottom_image_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "pages_blocks_text_images_locales_locale_parent_id_unique" ON "pages_blocks_text_images_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_content_columns_order_idx" ON "pages_blocks_content_columns" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_content_columns_parent_id_idx" ON "pages_blocks_content_columns" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_content_order_idx" ON "pages_blocks_content" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_content_parent_id_idx" ON "pages_blocks_content" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_content_path_idx" ON "pages_blocks_content" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_breadcrumbs_order_idx" ON "pages_breadcrumbs" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_breadcrumbs_parent_id_idx" ON "pages_breadcrumbs" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_breadcrumbs_locale_idx" ON "pages_breadcrumbs" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "pages_breadcrumbs_doc_idx" ON "pages_breadcrumbs" USING btree ("doc_id");
  CREATE INDEX IF NOT EXISTS "pages_parent_idx" ON "pages" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "pages_updated_at_idx" ON "pages" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "pages_created_at_idx" ON "pages" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "pages__status_idx" ON "pages" USING btree ("_status");
  CREATE UNIQUE INDEX IF NOT EXISTS "pages_title_idx" ON "pages_locales" USING btree ("title","_locale");
  CREATE INDEX IF NOT EXISTS "pages_meta_meta_image_idx" ON "pages_locales" USING btree ("meta_image_id","_locale");
  CREATE INDEX IF NOT EXISTS "pages_slug_idx" ON "pages_locales" USING btree ("slug","_locale");
  CREATE UNIQUE INDEX IF NOT EXISTS "pages_locales_locale_parent_id_unique" ON "pages_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_rels_order_idx" ON "pages_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "pages_rels_parent_idx" ON "pages_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "pages_rels_path_idx" ON "pages_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "pages_rels_pages_id_idx" ON "pages_rels" USING btree ("pages_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_button_order_idx" ON "_pages_v_blocks_button" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_button_parent_id_idx" ON "_pages_v_blocks_button" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_button_path_idx" ON "_pages_v_blocks_button" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_button_icon_idx" ON "_pages_v_blocks_button" USING btree ("icon");
  CREATE UNIQUE INDEX IF NOT EXISTS "_pages_v_blocks_button_locales_locale_parent_id_unique" ON "_pages_v_blocks_button_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_title_image_order_idx" ON "_pages_v_blocks_title_image" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_title_image_parent_id_idx" ON "_pages_v_blocks_title_image" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_title_image_path_idx" ON "_pages_v_blocks_title_image" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_title_image_image_idx" ON "_pages_v_blocks_title_image" USING btree ("image_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "_pages_v_blocks_title_image_locales_locale_parent_id_unique" ON "_pages_v_blocks_title_image_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_form_block_order_idx" ON "_pages_v_blocks_form_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_form_block_parent_id_idx" ON "_pages_v_blocks_form_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_form_block_path_idx" ON "_pages_v_blocks_form_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_form_block_form_idx" ON "_pages_v_blocks_form_block" USING btree ("form_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_paragraph_order_idx" ON "_pages_v_blocks_paragraph" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_paragraph_parent_id_idx" ON "_pages_v_blocks_paragraph" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_paragraph_path_idx" ON "_pages_v_blocks_paragraph" USING btree ("_path");
  CREATE UNIQUE INDEX IF NOT EXISTS "_pages_v_blocks_paragraph_locales_locale_parent_id_unique" ON "_pages_v_blocks_paragraph_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_media_order_idx" ON "_pages_v_blocks_media" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_media_parent_id_idx" ON "_pages_v_blocks_media" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_media_path_idx" ON "_pages_v_blocks_media" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_media_media_idx" ON "_pages_v_blocks_media" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_link_order_idx" ON "_pages_v_blocks_link" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_link_parent_id_idx" ON "_pages_v_blocks_link" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_link_path_idx" ON "_pages_v_blocks_link" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_link_icon_idx" ON "_pages_v_blocks_link" USING btree ("icon");
  CREATE UNIQUE INDEX IF NOT EXISTS "_pages_v_blocks_link_locales_locale_parent_id_unique" ON "_pages_v_blocks_link_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_footer_card_order_idx" ON "_pages_v_blocks_footer_card" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_footer_card_parent_id_idx" ON "_pages_v_blocks_footer_card" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_footer_card_path_idx" ON "_pages_v_blocks_footer_card" USING btree ("_path");
  CREATE UNIQUE INDEX IF NOT EXISTS "_pages_v_blocks_footer_card_locales_locale_parent_id_unique" ON "_pages_v_blocks_footer_card_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_separator_order_idx" ON "_pages_v_blocks_separator" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_separator_parent_id_idx" ON "_pages_v_blocks_separator" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_separator_path_idx" ON "_pages_v_blocks_separator" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_separator_icon_idx" ON "_pages_v_blocks_separator" USING btree ("icon");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_quote_order_idx" ON "_pages_v_blocks_quote" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_quote_parent_id_idx" ON "_pages_v_blocks_quote" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_quote_path_idx" ON "_pages_v_blocks_quote" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_quote_image_idx" ON "_pages_v_blocks_quote" USING btree ("image_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "_pages_v_blocks_quote_locales_locale_parent_id_unique" ON "_pages_v_blocks_quote_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_introduction_order_idx" ON "_pages_v_blocks_introduction" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_introduction_parent_id_idx" ON "_pages_v_blocks_introduction" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_introduction_path_idx" ON "_pages_v_blocks_introduction" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_introduction_image_idx" ON "_pages_v_blocks_introduction" USING btree ("image_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "_pages_v_blocks_introduction_locales_locale_parent_id_unique" ON "_pages_v_blocks_introduction_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_chapo_order_idx" ON "_pages_v_blocks_chapo" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_chapo_parent_id_idx" ON "_pages_v_blocks_chapo" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_chapo_path_idx" ON "_pages_v_blocks_chapo" USING btree ("_path");
  CREATE UNIQUE INDEX IF NOT EXISTS "_pages_v_blocks_chapo_locales_locale_parent_id_unique" ON "_pages_v_blocks_chapo_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_image_card_card_content_order_idx" ON "_pages_v_blocks_image_card_card_content" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_image_card_card_content_parent_id_idx" ON "_pages_v_blocks_image_card_card_content" USING btree ("_parent_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "_pages_v_blocks_image_card_card_content_locales_locale_parent_id_unique" ON "_pages_v_blocks_image_card_card_content_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_image_card_order_idx" ON "_pages_v_blocks_image_card" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_image_card_parent_id_idx" ON "_pages_v_blocks_image_card" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_image_card_path_idx" ON "_pages_v_blocks_image_card" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_image_card_image_idx" ON "_pages_v_blocks_image_card" USING btree ("image_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "_pages_v_blocks_image_card_locales_locale_parent_id_unique" ON "_pages_v_blocks_image_card_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_list_list_items_order_idx" ON "_pages_v_blocks_list_list_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_list_list_items_parent_id_idx" ON "_pages_v_blocks_list_list_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "_pages_v_blocks_list_list_items_locales_locale_parent_id_unique" ON "_pages_v_blocks_list_list_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_list_order_idx" ON "_pages_v_blocks_list" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_list_parent_id_idx" ON "_pages_v_blocks_list" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_list_path_idx" ON "_pages_v_blocks_list" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_list_icon_idx" ON "_pages_v_blocks_list" USING btree ("icon");
  CREATE UNIQUE INDEX IF NOT EXISTS "_pages_v_blocks_list_locales_locale_parent_id_unique" ON "_pages_v_blocks_list_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_key_figures_key_figures_items_order_idx" ON "_pages_v_blocks_key_figures_key_figures_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_key_figures_key_figures_items_parent_id_idx" ON "_pages_v_blocks_key_figures_key_figures_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "_pages_v_blocks_key_figures_key_figures_items_locales_locale_parent_id_unique" ON "_pages_v_blocks_key_figures_key_figures_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_key_figures_order_idx" ON "_pages_v_blocks_key_figures" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_key_figures_parent_id_idx" ON "_pages_v_blocks_key_figures" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_key_figures_path_idx" ON "_pages_v_blocks_key_figures" USING btree ("_path");
  CREATE UNIQUE INDEX IF NOT EXISTS "_pages_v_blocks_key_figures_locales_locale_parent_id_unique" ON "_pages_v_blocks_key_figures_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_word_cloud_word_cloud_items_order_idx" ON "_pages_v_blocks_word_cloud_word_cloud_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_word_cloud_word_cloud_items_parent_id_idx" ON "_pages_v_blocks_word_cloud_word_cloud_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "_pages_v_blocks_word_cloud_word_cloud_items_locales_locale_parent_id_unique" ON "_pages_v_blocks_word_cloud_word_cloud_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_word_cloud_order_idx" ON "_pages_v_blocks_word_cloud" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_word_cloud_parent_id_idx" ON "_pages_v_blocks_word_cloud" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_word_cloud_path_idx" ON "_pages_v_blocks_word_cloud" USING btree ("_path");
  CREATE UNIQUE INDEX IF NOT EXISTS "_pages_v_blocks_word_cloud_locales_locale_parent_id_unique" ON "_pages_v_blocks_word_cloud_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_social_media_social_media_items_order_idx" ON "_pages_v_blocks_social_media_social_media_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_social_media_social_media_items_parent_id_idx" ON "_pages_v_blocks_social_media_social_media_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_social_media_order_idx" ON "_pages_v_blocks_social_media" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_social_media_parent_id_idx" ON "_pages_v_blocks_social_media" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_social_media_path_idx" ON "_pages_v_blocks_social_media" USING btree ("_path");
  CREATE UNIQUE INDEX IF NOT EXISTS "_pages_v_blocks_social_media_locales_locale_parent_id_unique" ON "_pages_v_blocks_social_media_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_page_highlight_order_idx" ON "_pages_v_blocks_page_highlight" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_page_highlight_parent_id_idx" ON "_pages_v_blocks_page_highlight" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_page_highlight_path_idx" ON "_pages_v_blocks_page_highlight" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_video_order_idx" ON "_pages_v_blocks_video" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_video_parent_id_idx" ON "_pages_v_blocks_video" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_video_path_idx" ON "_pages_v_blocks_video" USING btree ("_path");
  CREATE UNIQUE INDEX IF NOT EXISTS "_pages_v_blocks_video_locales_locale_parent_id_unique" ON "_pages_v_blocks_video_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_radd_citation_order_idx" ON "_pages_v_blocks_radd_citation" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_radd_citation_parent_id_idx" ON "_pages_v_blocks_radd_citation" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_radd_citation_path_idx" ON "_pages_v_blocks_radd_citation" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_radd_citation_image_settings_image_settings_image_idx" ON "_pages_v_blocks_radd_citation" USING btree ("image_settings_image_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "_pages_v_blocks_radd_citation_locales_locale_parent_id_unique" ON "_pages_v_blocks_radd_citation_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_radd_key_figures_items_order_idx" ON "_pages_v_blocks_radd_key_figures_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_radd_key_figures_items_parent_id_idx" ON "_pages_v_blocks_radd_key_figures_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_radd_key_figures_items_pictogramme_idx" ON "_pages_v_blocks_radd_key_figures_items" USING btree ("pictogramme_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "_pages_v_blocks_radd_key_figures_items_locales_locale_parent_id_unique" ON "_pages_v_blocks_radd_key_figures_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_radd_key_figures_order_idx" ON "_pages_v_blocks_radd_key_figures" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_radd_key_figures_parent_id_idx" ON "_pages_v_blocks_radd_key_figures" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_radd_key_figures_path_idx" ON "_pages_v_blocks_radd_key_figures" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_radd_title_image_image_border_order_idx" ON "_pages_v_blocks_radd_title_image_image_border" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_radd_title_image_image_border_parent_idx" ON "_pages_v_blocks_radd_title_image_image_border" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_radd_title_image_order_idx" ON "_pages_v_blocks_radd_title_image" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_radd_title_image_parent_id_idx" ON "_pages_v_blocks_radd_title_image" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_radd_title_image_path_idx" ON "_pages_v_blocks_radd_title_image" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_radd_title_image_image_image_image_idx" ON "_pages_v_blocks_radd_title_image" USING btree ("image_image_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "_pages_v_blocks_radd_title_image_locales_locale_parent_id_unique" ON "_pages_v_blocks_radd_title_image_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_radd_extension_list_items_order_idx" ON "_pages_v_blocks_radd_extension_list_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_radd_extension_list_items_parent_id_idx" ON "_pages_v_blocks_radd_extension_list_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "_pages_v_blocks_radd_extension_list_items_locales_locale_parent_id_unique" ON "_pages_v_blocks_radd_extension_list_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_radd_extension_order_idx" ON "_pages_v_blocks_radd_extension" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_radd_extension_parent_id_idx" ON "_pages_v_blocks_radd_extension" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_radd_extension_path_idx" ON "_pages_v_blocks_radd_extension" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_radd_image_leaf_items_order_idx" ON "_pages_v_blocks_radd_image_leaf_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_radd_image_leaf_items_parent_id_idx" ON "_pages_v_blocks_radd_image_leaf_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_radd_image_leaf_items_image_idx" ON "_pages_v_blocks_radd_image_leaf_items_locales" USING btree ("image_id","_locale");
  CREATE UNIQUE INDEX IF NOT EXISTS "_pages_v_blocks_radd_image_leaf_items_locales_locale_parent_id_unique" ON "_pages_v_blocks_radd_image_leaf_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_radd_image_leaf_order_idx" ON "_pages_v_blocks_radd_image_leaf" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_radd_image_leaf_parent_id_idx" ON "_pages_v_blocks_radd_image_leaf" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_radd_image_leaf_path_idx" ON "_pages_v_blocks_radd_image_leaf" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_text_images_order_idx" ON "_pages_v_blocks_text_images" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_text_images_parent_id_idx" ON "_pages_v_blocks_text_images" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_text_images_path_idx" ON "_pages_v_blocks_text_images" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_text_images_left_image_idx" ON "_pages_v_blocks_text_images" USING btree ("left_image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_text_images_bottom_image_idx" ON "_pages_v_blocks_text_images" USING btree ("bottom_image_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "_pages_v_blocks_text_images_locales_locale_parent_id_unique" ON "_pages_v_blocks_text_images_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_content_columns_order_idx" ON "_pages_v_blocks_content_columns" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_content_columns_parent_id_idx" ON "_pages_v_blocks_content_columns" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_content_order_idx" ON "_pages_v_blocks_content" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_content_parent_id_idx" ON "_pages_v_blocks_content" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_content_path_idx" ON "_pages_v_blocks_content" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_breadcrumbs_order_idx" ON "_pages_v_version_breadcrumbs" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_breadcrumbs_parent_id_idx" ON "_pages_v_version_breadcrumbs" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_breadcrumbs_locale_idx" ON "_pages_v_version_breadcrumbs" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_breadcrumbs_doc_idx" ON "_pages_v_version_breadcrumbs" USING btree ("doc_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_parent_idx" ON "_pages_v" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_version_parent_idx" ON "_pages_v" USING btree ("version_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_version_updated_at_idx" ON "_pages_v" USING btree ("version_updated_at");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_version_created_at_idx" ON "_pages_v" USING btree ("version_created_at");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_version__status_idx" ON "_pages_v" USING btree ("version__status");
  CREATE INDEX IF NOT EXISTS "_pages_v_created_at_idx" ON "_pages_v" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "_pages_v_updated_at_idx" ON "_pages_v" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "_pages_v_snapshot_idx" ON "_pages_v" USING btree ("snapshot");
  CREATE INDEX IF NOT EXISTS "_pages_v_published_locale_idx" ON "_pages_v" USING btree ("published_locale");
  CREATE INDEX IF NOT EXISTS "_pages_v_latest_idx" ON "_pages_v" USING btree ("latest");
  CREATE INDEX IF NOT EXISTS "_pages_v_autosave_idx" ON "_pages_v" USING btree ("autosave");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_version_title_idx" ON "_pages_v_locales" USING btree ("version_title","_locale");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_meta_version_meta_image_idx" ON "_pages_v_locales" USING btree ("version_meta_image_id","_locale");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_version_slug_idx" ON "_pages_v_locales" USING btree ("version_slug","_locale");
  CREATE UNIQUE INDEX IF NOT EXISTS "_pages_v_locales_locale_parent_id_unique" ON "_pages_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_rels_order_idx" ON "_pages_v_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "_pages_v_rels_parent_idx" ON "_pages_v_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_rels_path_idx" ON "_pages_v_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "_pages_v_rels_pages_id_idx" ON "_pages_v_rels" USING btree ("pages_id");
  CREATE INDEX IF NOT EXISTS "media_updated_at_idx" ON "media" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "media_created_at_idx" ON "media" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "media_filename_idx" ON "media" USING btree ("filename");
  CREATE INDEX IF NOT EXISTS "media_sizes_thumbnail_sizes_thumbnail_filename_idx" ON "media" USING btree ("sizes_thumbnail_filename");
  CREATE INDEX IF NOT EXISTS "media_sizes_square_sizes_square_filename_idx" ON "media" USING btree ("sizes_square_filename");
  CREATE INDEX IF NOT EXISTS "media_sizes_small_sizes_small_filename_idx" ON "media" USING btree ("sizes_small_filename");
  CREATE INDEX IF NOT EXISTS "media_sizes_medium_sizes_medium_filename_idx" ON "media" USING btree ("sizes_medium_filename");
  CREATE INDEX IF NOT EXISTS "media_sizes_large_sizes_large_filename_idx" ON "media" USING btree ("sizes_large_filename");
  CREATE INDEX IF NOT EXISTS "media_sizes_xlarge_sizes_xlarge_filename_idx" ON "media" USING btree ("sizes_xlarge_filename");
  CREATE INDEX IF NOT EXISTS "media_sizes_og_sizes_og_filename_idx" ON "media" USING btree ("sizes_og_filename");
  CREATE UNIQUE INDEX IF NOT EXISTS "media_locales_locale_parent_id_unique" ON "media_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "thematics_updated_at_idx" ON "thematics" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "thematics_created_at_idx" ON "thematics" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "locations_updated_at_idx" ON "locations" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "locations_created_at_idx" ON "locations" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "users_updated_at_idx" ON "users" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "users_created_at_idx" ON "users" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "users_email_idx" ON "users" USING btree ("email");
  CREATE INDEX IF NOT EXISTS "redirects_from_idx" ON "redirects" USING btree ("from");
  CREATE INDEX IF NOT EXISTS "redirects_updated_at_idx" ON "redirects" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "redirects_created_at_idx" ON "redirects" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "redirects_rels_order_idx" ON "redirects_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "redirects_rels_parent_idx" ON "redirects_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "redirects_rels_path_idx" ON "redirects_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "redirects_rels_pages_id_idx" ON "redirects_rels" USING btree ("pages_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_checkbox_order_idx" ON "forms_blocks_checkbox" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "forms_blocks_checkbox_parent_id_idx" ON "forms_blocks_checkbox" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_checkbox_path_idx" ON "forms_blocks_checkbox" USING btree ("_path");
  CREATE UNIQUE INDEX IF NOT EXISTS "forms_blocks_checkbox_locales_locale_parent_id_unique" ON "forms_blocks_checkbox_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_country_order_idx" ON "forms_blocks_country" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "forms_blocks_country_parent_id_idx" ON "forms_blocks_country" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_country_path_idx" ON "forms_blocks_country" USING btree ("_path");
  CREATE UNIQUE INDEX IF NOT EXISTS "forms_blocks_country_locales_locale_parent_id_unique" ON "forms_blocks_country_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_email_order_idx" ON "forms_blocks_email" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "forms_blocks_email_parent_id_idx" ON "forms_blocks_email" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_email_path_idx" ON "forms_blocks_email" USING btree ("_path");
  CREATE UNIQUE INDEX IF NOT EXISTS "forms_blocks_email_locales_locale_parent_id_unique" ON "forms_blocks_email_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_message_order_idx" ON "forms_blocks_message" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "forms_blocks_message_parent_id_idx" ON "forms_blocks_message" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_message_path_idx" ON "forms_blocks_message" USING btree ("_path");
  CREATE UNIQUE INDEX IF NOT EXISTS "forms_blocks_message_locales_locale_parent_id_unique" ON "forms_blocks_message_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_number_order_idx" ON "forms_blocks_number" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "forms_blocks_number_parent_id_idx" ON "forms_blocks_number" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_number_path_idx" ON "forms_blocks_number" USING btree ("_path");
  CREATE UNIQUE INDEX IF NOT EXISTS "forms_blocks_number_locales_locale_parent_id_unique" ON "forms_blocks_number_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_select_options_order_idx" ON "forms_blocks_select_options" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "forms_blocks_select_options_parent_id_idx" ON "forms_blocks_select_options" USING btree ("_parent_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "forms_blocks_select_options_locales_locale_parent_id_unique" ON "forms_blocks_select_options_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_select_order_idx" ON "forms_blocks_select" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "forms_blocks_select_parent_id_idx" ON "forms_blocks_select" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_select_path_idx" ON "forms_blocks_select" USING btree ("_path");
  CREATE UNIQUE INDEX IF NOT EXISTS "forms_blocks_select_locales_locale_parent_id_unique" ON "forms_blocks_select_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_state_order_idx" ON "forms_blocks_state" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "forms_blocks_state_parent_id_idx" ON "forms_blocks_state" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_state_path_idx" ON "forms_blocks_state" USING btree ("_path");
  CREATE UNIQUE INDEX IF NOT EXISTS "forms_blocks_state_locales_locale_parent_id_unique" ON "forms_blocks_state_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_text_order_idx" ON "forms_blocks_text" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "forms_blocks_text_parent_id_idx" ON "forms_blocks_text" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_text_path_idx" ON "forms_blocks_text" USING btree ("_path");
  CREATE UNIQUE INDEX IF NOT EXISTS "forms_blocks_text_locales_locale_parent_id_unique" ON "forms_blocks_text_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_textarea_order_idx" ON "forms_blocks_textarea" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "forms_blocks_textarea_parent_id_idx" ON "forms_blocks_textarea" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_textarea_path_idx" ON "forms_blocks_textarea" USING btree ("_path");
  CREATE UNIQUE INDEX IF NOT EXISTS "forms_blocks_textarea_locales_locale_parent_id_unique" ON "forms_blocks_textarea_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_emails_order_idx" ON "forms_emails" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "forms_emails_parent_id_idx" ON "forms_emails" USING btree ("_parent_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "forms_emails_locales_locale_parent_id_unique" ON "forms_emails_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_updated_at_idx" ON "forms" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "forms_created_at_idx" ON "forms" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "forms_locales_locale_parent_id_unique" ON "forms_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "form_submissions_submission_data_order_idx" ON "form_submissions_submission_data" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "form_submissions_submission_data_parent_id_idx" ON "form_submissions_submission_data" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "form_submissions_form_idx" ON "form_submissions" USING btree ("form_id");
  CREATE INDEX IF NOT EXISTS "form_submissions_updated_at_idx" ON "form_submissions" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "form_submissions_created_at_idx" ON "form_submissions" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "search_categories_order_idx" ON "search_categories" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "search_categories_parent_id_idx" ON "search_categories" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "search_slug_idx" ON "search" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "search_meta_meta_image_idx" ON "search" USING btree ("meta_image_id");
  CREATE INDEX IF NOT EXISTS "search_updated_at_idx" ON "search" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "search_created_at_idx" ON "search" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "search_locales_locale_parent_id_unique" ON "search_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "search_rels_order_idx" ON "search_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "search_rels_parent_idx" ON "search_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "search_rels_path_idx" ON "search_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "search_rels_pages_id_idx" ON "search_rels" USING btree ("pages_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_global_slug_idx" ON "payload_locked_documents" USING btree ("global_slug");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_updated_at_idx" ON "payload_locked_documents" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_created_at_idx" ON "payload_locked_documents" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_order_idx" ON "payload_locked_documents_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_parent_idx" ON "payload_locked_documents_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_path_idx" ON "payload_locked_documents_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_pages_id_idx" ON "payload_locked_documents_rels" USING btree ("pages_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_media_id_idx" ON "payload_locked_documents_rels" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_thematics_id_idx" ON "payload_locked_documents_rels" USING btree ("thematics_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_locations_id_idx" ON "payload_locked_documents_rels" USING btree ("locations_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_users_id_idx" ON "payload_locked_documents_rels" USING btree ("users_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_redirects_id_idx" ON "payload_locked_documents_rels" USING btree ("redirects_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_forms_id_idx" ON "payload_locked_documents_rels" USING btree ("forms_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_form_submissions_id_idx" ON "payload_locked_documents_rels" USING btree ("form_submissions_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_search_id_idx" ON "payload_locked_documents_rels" USING btree ("search_id");
  CREATE INDEX IF NOT EXISTS "payload_preferences_key_idx" ON "payload_preferences" USING btree ("key");
  CREATE INDEX IF NOT EXISTS "payload_preferences_updated_at_idx" ON "payload_preferences" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "payload_preferences_created_at_idx" ON "payload_preferences" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_order_idx" ON "payload_preferences_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_parent_idx" ON "payload_preferences_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_path_idx" ON "payload_preferences_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_users_id_idx" ON "payload_preferences_rels" USING btree ("users_id");
  CREATE INDEX IF NOT EXISTS "payload_migrations_updated_at_idx" ON "payload_migrations" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "payload_migrations_created_at_idx" ON "payload_migrations" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "header_languages_order_idx" ON "header_languages" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "header_languages_parent_id_idx" ON "header_languages" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "header_blocks_button_order_idx" ON "header_blocks_button" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "header_blocks_button_parent_id_idx" ON "header_blocks_button" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "header_blocks_button_path_idx" ON "header_blocks_button" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "header_blocks_button_icon_idx" ON "header_blocks_button" USING btree ("icon");
  CREATE UNIQUE INDEX IF NOT EXISTS "header_blocks_button_locales_locale_parent_id_unique" ON "header_blocks_button_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "header_blocks_link_order_idx" ON "header_blocks_link" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "header_blocks_link_parent_id_idx" ON "header_blocks_link" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "header_blocks_link_path_idx" ON "header_blocks_link" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "header_blocks_link_icon_idx" ON "header_blocks_link" USING btree ("icon");
  CREATE UNIQUE INDEX IF NOT EXISTS "header_blocks_link_locales_locale_parent_id_unique" ON "header_blocks_link_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "header_nav_items_sub_nav_items_order_idx" ON "header_nav_items_sub_nav_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "header_nav_items_sub_nav_items_parent_id_idx" ON "header_nav_items_sub_nav_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "header_nav_items_order_idx" ON "header_nav_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "header_nav_items_parent_id_idx" ON "header_nav_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "header_nav_items_image_idx" ON "header_nav_items" USING btree ("image_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "header_nav_items_locales_locale_parent_id_unique" ON "header_nav_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "header_logo_logo_image_idx" ON "header" USING btree ("logo_image_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "header_locales_locale_parent_id_unique" ON "header_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "header_rels_order_idx" ON "header_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "header_rels_parent_idx" ON "header_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "header_rels_path_idx" ON "header_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "header_rels_pages_id_idx" ON "header_rels" USING btree ("pages_id");
  CREATE INDEX IF NOT EXISTS "footer_blocks_link_order_idx" ON "footer_blocks_link" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "footer_blocks_link_parent_id_idx" ON "footer_blocks_link" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "footer_blocks_link_path_idx" ON "footer_blocks_link" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "footer_blocks_link_icon_idx" ON "footer_blocks_link" USING btree ("icon");
  CREATE UNIQUE INDEX IF NOT EXISTS "footer_blocks_link_locales_locale_parent_id_unique" ON "footer_blocks_link_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "footer_blocks_button_order_idx" ON "footer_blocks_button" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "footer_blocks_button_parent_id_idx" ON "footer_blocks_button" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "footer_blocks_button_path_idx" ON "footer_blocks_button" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "footer_blocks_button_icon_idx" ON "footer_blocks_button" USING btree ("icon");
  CREATE UNIQUE INDEX IF NOT EXISTS "footer_blocks_button_locales_locale_parent_id_unique" ON "footer_blocks_button_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "footer_blocks_footer_card_order_idx" ON "footer_blocks_footer_card" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "footer_blocks_footer_card_parent_id_idx" ON "footer_blocks_footer_card" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "footer_blocks_footer_card_path_idx" ON "footer_blocks_footer_card" USING btree ("_path");
  CREATE UNIQUE INDEX IF NOT EXISTS "footer_blocks_footer_card_locales_locale_parent_id_unique" ON "footer_blocks_footer_card_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "footer_columns_order_idx" ON "footer_columns" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "footer_columns_parent_id_idx" ON "footer_columns" USING btree ("_parent_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "footer_columns_locales_locale_parent_id_unique" ON "footer_columns_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "footer_bottom_banner_nav_items_order_idx" ON "footer_bottom_banner_nav_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "footer_bottom_banner_nav_items_parent_id_idx" ON "footer_bottom_banner_nav_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "footer_bottom_banner_nav_items_locales_locale_parent_id_unique" ON "footer_bottom_banner_nav_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "footer_logo_idx" ON "footer" USING btree ("logo_id");
  CREATE INDEX IF NOT EXISTS "footer_rels_order_idx" ON "footer_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "footer_rels_parent_idx" ON "footer_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "footer_rels_path_idx" ON "footer_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "footer_rels_pages_id_idx" ON "footer_rels" USING btree ("pages_id");`)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_blocks_button" CASCADE;
  DROP TABLE "pages_blocks_button_locales" CASCADE;
  DROP TABLE "pages_blocks_title_image" CASCADE;
  DROP TABLE "pages_blocks_title_image_locales" CASCADE;
  DROP TABLE "pages_blocks_form_block" CASCADE;
  DROP TABLE "pages_blocks_paragraph" CASCADE;
  DROP TABLE "pages_blocks_paragraph_locales" CASCADE;
  DROP TABLE "pages_blocks_media" CASCADE;
  DROP TABLE "pages_blocks_link" CASCADE;
  DROP TABLE "pages_blocks_link_locales" CASCADE;
  DROP TABLE "pages_blocks_footer_card" CASCADE;
  DROP TABLE "pages_blocks_footer_card_locales" CASCADE;
  DROP TABLE "pages_blocks_separator" CASCADE;
  DROP TABLE "pages_blocks_quote" CASCADE;
  DROP TABLE "pages_blocks_quote_locales" CASCADE;
  DROP TABLE "pages_blocks_introduction" CASCADE;
  DROP TABLE "pages_blocks_introduction_locales" CASCADE;
  DROP TABLE "pages_blocks_chapo" CASCADE;
  DROP TABLE "pages_blocks_chapo_locales" CASCADE;
  DROP TABLE "pages_blocks_image_card_card_content" CASCADE;
  DROP TABLE "pages_blocks_image_card_card_content_locales" CASCADE;
  DROP TABLE "pages_blocks_image_card" CASCADE;
  DROP TABLE "pages_blocks_image_card_locales" CASCADE;
  DROP TABLE "pages_blocks_list_list_items" CASCADE;
  DROP TABLE "pages_blocks_list_list_items_locales" CASCADE;
  DROP TABLE "pages_blocks_list" CASCADE;
  DROP TABLE "pages_blocks_list_locales" CASCADE;
  DROP TABLE "pages_blocks_key_figures_key_figures_items" CASCADE;
  DROP TABLE "pages_blocks_key_figures_key_figures_items_locales" CASCADE;
  DROP TABLE "pages_blocks_key_figures" CASCADE;
  DROP TABLE "pages_blocks_key_figures_locales" CASCADE;
  DROP TABLE "pages_blocks_word_cloud_word_cloud_items" CASCADE;
  DROP TABLE "pages_blocks_word_cloud_word_cloud_items_locales" CASCADE;
  DROP TABLE "pages_blocks_word_cloud" CASCADE;
  DROP TABLE "pages_blocks_word_cloud_locales" CASCADE;
  DROP TABLE "pages_blocks_social_media_social_media_items" CASCADE;
  DROP TABLE "pages_blocks_social_media" CASCADE;
  DROP TABLE "pages_blocks_social_media_locales" CASCADE;
  DROP TABLE "pages_blocks_page_highlight" CASCADE;
  DROP TABLE "pages_blocks_video" CASCADE;
  DROP TABLE "pages_blocks_video_locales" CASCADE;
  DROP TABLE "pages_blocks_radd_citation" CASCADE;
  DROP TABLE "pages_blocks_radd_citation_locales" CASCADE;
  DROP TABLE "pages_blocks_radd_key_figures_items" CASCADE;
  DROP TABLE "pages_blocks_radd_key_figures_items_locales" CASCADE;
  DROP TABLE "pages_blocks_radd_key_figures" CASCADE;
  DROP TABLE "pages_blocks_radd_title_image_image_border" CASCADE;
  DROP TABLE "pages_blocks_radd_title_image" CASCADE;
  DROP TABLE "pages_blocks_radd_title_image_locales" CASCADE;
  DROP TABLE "pages_blocks_radd_extension_list_items" CASCADE;
  DROP TABLE "pages_blocks_radd_extension_list_items_locales" CASCADE;
  DROP TABLE "pages_blocks_radd_extension" CASCADE;
  DROP TABLE "pages_blocks_radd_image_leaf_items" CASCADE;
  DROP TABLE "pages_blocks_radd_image_leaf_items_locales" CASCADE;
  DROP TABLE "pages_blocks_radd_image_leaf" CASCADE;
  DROP TABLE "pages_blocks_text_images" CASCADE;
  DROP TABLE "pages_blocks_text_images_locales" CASCADE;
  DROP TABLE "pages_blocks_content_columns" CASCADE;
  DROP TABLE "pages_blocks_content" CASCADE;
  DROP TABLE "pages_breadcrumbs" CASCADE;
  DROP TABLE "pages" CASCADE;
  DROP TABLE "pages_locales" CASCADE;
  DROP TABLE "pages_rels" CASCADE;
  DROP TABLE "_pages_v_blocks_button" CASCADE;
  DROP TABLE "_pages_v_blocks_button_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_title_image" CASCADE;
  DROP TABLE "_pages_v_blocks_title_image_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_form_block" CASCADE;
  DROP TABLE "_pages_v_blocks_paragraph" CASCADE;
  DROP TABLE "_pages_v_blocks_paragraph_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_media" CASCADE;
  DROP TABLE "_pages_v_blocks_link" CASCADE;
  DROP TABLE "_pages_v_blocks_link_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_footer_card" CASCADE;
  DROP TABLE "_pages_v_blocks_footer_card_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_separator" CASCADE;
  DROP TABLE "_pages_v_blocks_quote" CASCADE;
  DROP TABLE "_pages_v_blocks_quote_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_introduction" CASCADE;
  DROP TABLE "_pages_v_blocks_introduction_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_chapo" CASCADE;
  DROP TABLE "_pages_v_blocks_chapo_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_image_card_card_content" CASCADE;
  DROP TABLE "_pages_v_blocks_image_card_card_content_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_image_card" CASCADE;
  DROP TABLE "_pages_v_blocks_image_card_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_list_list_items" CASCADE;
  DROP TABLE "_pages_v_blocks_list_list_items_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_list" CASCADE;
  DROP TABLE "_pages_v_blocks_list_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_key_figures_key_figures_items" CASCADE;
  DROP TABLE "_pages_v_blocks_key_figures_key_figures_items_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_key_figures" CASCADE;
  DROP TABLE "_pages_v_blocks_key_figures_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_word_cloud_word_cloud_items" CASCADE;
  DROP TABLE "_pages_v_blocks_word_cloud_word_cloud_items_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_word_cloud" CASCADE;
  DROP TABLE "_pages_v_blocks_word_cloud_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_social_media_social_media_items" CASCADE;
  DROP TABLE "_pages_v_blocks_social_media" CASCADE;
  DROP TABLE "_pages_v_blocks_social_media_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_page_highlight" CASCADE;
  DROP TABLE "_pages_v_blocks_video" CASCADE;
  DROP TABLE "_pages_v_blocks_video_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_radd_citation" CASCADE;
  DROP TABLE "_pages_v_blocks_radd_citation_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_radd_key_figures_items" CASCADE;
  DROP TABLE "_pages_v_blocks_radd_key_figures_items_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_radd_key_figures" CASCADE;
  DROP TABLE "_pages_v_blocks_radd_title_image_image_border" CASCADE;
  DROP TABLE "_pages_v_blocks_radd_title_image" CASCADE;
  DROP TABLE "_pages_v_blocks_radd_title_image_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_radd_extension_list_items" CASCADE;
  DROP TABLE "_pages_v_blocks_radd_extension_list_items_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_radd_extension" CASCADE;
  DROP TABLE "_pages_v_blocks_radd_image_leaf_items" CASCADE;
  DROP TABLE "_pages_v_blocks_radd_image_leaf_items_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_radd_image_leaf" CASCADE;
  DROP TABLE "_pages_v_blocks_text_images" CASCADE;
  DROP TABLE "_pages_v_blocks_text_images_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_content_columns" CASCADE;
  DROP TABLE "_pages_v_blocks_content" CASCADE;
  DROP TABLE "_pages_v_version_breadcrumbs" CASCADE;
  DROP TABLE "_pages_v" CASCADE;
  DROP TABLE "_pages_v_locales" CASCADE;
  DROP TABLE "_pages_v_rels" CASCADE;
  DROP TABLE "media" CASCADE;
  DROP TABLE "media_locales" CASCADE;
  DROP TABLE "thematics" CASCADE;
  DROP TABLE "locations" CASCADE;
  DROP TABLE "users" CASCADE;
  DROP TABLE "redirects" CASCADE;
  DROP TABLE "redirects_rels" CASCADE;
  DROP TABLE "forms_blocks_checkbox" CASCADE;
  DROP TABLE "forms_blocks_checkbox_locales" CASCADE;
  DROP TABLE "forms_blocks_country" CASCADE;
  DROP TABLE "forms_blocks_country_locales" CASCADE;
  DROP TABLE "forms_blocks_email" CASCADE;
  DROP TABLE "forms_blocks_email_locales" CASCADE;
  DROP TABLE "forms_blocks_message" CASCADE;
  DROP TABLE "forms_blocks_message_locales" CASCADE;
  DROP TABLE "forms_blocks_number" CASCADE;
  DROP TABLE "forms_blocks_number_locales" CASCADE;
  DROP TABLE "forms_blocks_select_options" CASCADE;
  DROP TABLE "forms_blocks_select_options_locales" CASCADE;
  DROP TABLE "forms_blocks_select" CASCADE;
  DROP TABLE "forms_blocks_select_locales" CASCADE;
  DROP TABLE "forms_blocks_state" CASCADE;
  DROP TABLE "forms_blocks_state_locales" CASCADE;
  DROP TABLE "forms_blocks_text" CASCADE;
  DROP TABLE "forms_blocks_text_locales" CASCADE;
  DROP TABLE "forms_blocks_textarea" CASCADE;
  DROP TABLE "forms_blocks_textarea_locales" CASCADE;
  DROP TABLE "forms_emails" CASCADE;
  DROP TABLE "forms_emails_locales" CASCADE;
  DROP TABLE "forms" CASCADE;
  DROP TABLE "forms_locales" CASCADE;
  DROP TABLE "form_submissions_submission_data" CASCADE;
  DROP TABLE "form_submissions" CASCADE;
  DROP TABLE "search_categories" CASCADE;
  DROP TABLE "search" CASCADE;
  DROP TABLE "search_locales" CASCADE;
  DROP TABLE "search_rels" CASCADE;
  DROP TABLE "payload_locked_documents" CASCADE;
  DROP TABLE "payload_locked_documents_rels" CASCADE;
  DROP TABLE "payload_preferences" CASCADE;
  DROP TABLE "payload_preferences_rels" CASCADE;
  DROP TABLE "payload_migrations" CASCADE;
  DROP TABLE "header_languages" CASCADE;
  DROP TABLE "header_blocks_button" CASCADE;
  DROP TABLE "header_blocks_button_locales" CASCADE;
  DROP TABLE "header_blocks_link" CASCADE;
  DROP TABLE "header_blocks_link_locales" CASCADE;
  DROP TABLE "header_nav_items_sub_nav_items" CASCADE;
  DROP TABLE "header_nav_items" CASCADE;
  DROP TABLE "header_nav_items_locales" CASCADE;
  DROP TABLE "header" CASCADE;
  DROP TABLE "header_locales" CASCADE;
  DROP TABLE "header_rels" CASCADE;
  DROP TABLE "footer_blocks_link" CASCADE;
  DROP TABLE "footer_blocks_link_locales" CASCADE;
  DROP TABLE "footer_blocks_button" CASCADE;
  DROP TABLE "footer_blocks_button_locales" CASCADE;
  DROP TABLE "footer_blocks_footer_card" CASCADE;
  DROP TABLE "footer_blocks_footer_card_locales" CASCADE;
  DROP TABLE "footer_columns" CASCADE;
  DROP TABLE "footer_columns_locales" CASCADE;
  DROP TABLE "footer_bottom_banner_nav_items" CASCADE;
  DROP TABLE "footer_bottom_banner_nav_items_locales" CASCADE;
  DROP TABLE "footer" CASCADE;
  DROP TABLE "footer_rels" CASCADE;
  DROP TYPE "public"."_locales";
  DROP TYPE "public"."enum_pages_blocks_button_style";
  DROP TYPE "public"."enum_pages_blocks_button_position_icon";
  DROP TYPE "public"."enum_pages_blocks_button_link_type";
  DROP TYPE "public"."enum_pages_blocks_media_shadow_color";
  DROP TYPE "public"."enum_pages_blocks_link_link_type";
  DROP TYPE "public"."enum_pages_blocks_link_position_icon";
  DROP TYPE "public"."enum_pages_blocks_footer_card_style";
  DROP TYPE "public"."enum_pages_blocks_footer_card_primary_color";
  DROP TYPE "public"."enum_pages_blocks_footer_card_secondary_color";
  DROP TYPE "public"."enum_pages_blocks_chapo_background_color";
  DROP TYPE "public"."enum_pages_blocks_video_transcript_link_type";
  DROP TYPE "public"."enum_pages_blocks_radd_citation_image_settings_position";
  DROP TYPE "public"."enum_pages_blocks_radd_key_figures_items_background_color";
  DROP TYPE "public"."enum_pages_blocks_radd_title_image_image_border";
  DROP TYPE "public"."enum_pages_blocks_radd_title_image_size";
  DROP TYPE "public"."enum_pages_blocks_radd_title_image_image_position";
  DROP TYPE "public"."enum_pages_blocks_radd_title_image_content_picto_color";
  DROP TYPE "public"."enum_pages_blocks_radd_extension_metro_line";
  DROP TYPE "public"."enum_pages_blocks_radd_image_leaf_items_element_position";
  DROP TYPE "public"."enum_pages_blocks_radd_image_leaf_items_color";
  DROP TYPE "public"."enum_pages_blocks_radd_image_leaf_items_leaf_position";
  DROP TYPE "public"."enum_pages_blocks_content_columns_size";
  DROP TYPE "public"."enum_pages_blocks_content_gap";
  DROP TYPE "public"."enum_pages_meta_robots";
  DROP TYPE "public"."enum_pages_redirect_link_type";
  DROP TYPE "public"."enum_pages_status";
  DROP TYPE "public"."enum__pages_v_blocks_button_style";
  DROP TYPE "public"."enum__pages_v_blocks_button_position_icon";
  DROP TYPE "public"."enum__pages_v_blocks_button_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_media_shadow_color";
  DROP TYPE "public"."enum__pages_v_blocks_link_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_link_position_icon";
  DROP TYPE "public"."enum__pages_v_blocks_footer_card_style";
  DROP TYPE "public"."enum__pages_v_blocks_footer_card_primary_color";
  DROP TYPE "public"."enum__pages_v_blocks_footer_card_secondary_color";
  DROP TYPE "public"."enum__pages_v_blocks_chapo_background_color";
  DROP TYPE "public"."enum__pages_v_blocks_video_transcript_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_radd_citation_image_settings_position";
  DROP TYPE "public"."enum__pages_v_blocks_radd_key_figures_items_background_color";
  DROP TYPE "public"."enum__pages_v_blocks_radd_title_image_image_border";
  DROP TYPE "public"."enum__pages_v_blocks_radd_title_image_size";
  DROP TYPE "public"."enum__pages_v_blocks_radd_title_image_image_position";
  DROP TYPE "public"."enum__pages_v_blocks_radd_title_image_content_picto_color";
  DROP TYPE "public"."enum__pages_v_blocks_radd_extension_metro_line";
  DROP TYPE "public"."enum__pages_v_blocks_radd_image_leaf_items_element_position";
  DROP TYPE "public"."enum__pages_v_blocks_radd_image_leaf_items_color";
  DROP TYPE "public"."enum__pages_v_blocks_radd_image_leaf_items_leaf_position";
  DROP TYPE "public"."enum__pages_v_blocks_content_columns_size";
  DROP TYPE "public"."enum__pages_v_blocks_content_gap";
  DROP TYPE "public"."enum__pages_v_version_meta_robots";
  DROP TYPE "public"."enum__pages_v_version_redirect_link_type";
  DROP TYPE "public"."enum__pages_v_version_status";
  DROP TYPE "public"."enum__pages_v_published_locale";
  DROP TYPE "public"."enum_thematics_collection";
  DROP TYPE "public"."enum_redirects_to_type";
  DROP TYPE "public"."enum_forms_confirmation_type";
  DROP TYPE "public"."enum_header_blocks_button_style";
  DROP TYPE "public"."enum_header_blocks_button_position_icon";
  DROP TYPE "public"."enum_header_blocks_button_link_type";
  DROP TYPE "public"."enum_header_blocks_link_link_type";
  DROP TYPE "public"."enum_header_blocks_link_position_icon";
  DROP TYPE "public"."enum_header_ecoindex_link_type";
  DROP TYPE "public"."enum_footer_blocks_link_link_type";
  DROP TYPE "public"."enum_footer_blocks_link_position_icon";
  DROP TYPE "public"."enum_footer_blocks_button_style";
  DROP TYPE "public"."enum_footer_blocks_button_position_icon";
  DROP TYPE "public"."enum_footer_blocks_button_link_type";
  DROP TYPE "public"."enum_footer_blocks_footer_card_style";
  DROP TYPE "public"."enum_footer_blocks_footer_card_primary_color";
  DROP TYPE "public"."enum_footer_blocks_footer_card_secondary_color";
  DROP TYPE "public"."enum_footer_bottom_banner_nav_items_link_type";`)
}
