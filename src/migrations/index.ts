import * as migration_20241126_204542_add_initial_user from './20241126_204542_add_initial_user';
import * as migration_20241126_214715_add_blogposts_and_categories from './20241126_214715_add_blogposts_and_categories';
import * as migration_20241126_233322_add_forms_and_form_submissions from './20241126_233322_add_forms_and_form_submissions';
import * as migration_20241128_032031_add_location_title from './20241128_032031_add_location_title';
import * as migration_20241128_032621_add_work_title from './20241128_032621_add_work_title';
import * as migration_20241128_032723_add_faq_title from './20241128_032723_add_faq_title';
import * as migration_20241128_032942_add_brand_title_and_technology_title from './20241128_032942_add_brand_title_and_technology_title';
import * as migration_20241128_034215_add_faq_answer from './20241128_034215_add_faq_answer';
import * as migration_20241128_034546_add_callout_and_full_testimonial_fields from './20241128_034546_add_callout_and_full_testimonial_fields';
import * as migration_20241129_170939_add_location_and_logo_fields_to_brands from './20241129_170939_add_location_and_logo_fields_to_brands';
import * as migration_20241129_225216_add from './20241129_225216_add';
import * as migration_20241129_225538_add from './20241129_225538_add';
import * as migration_20241129_225833_add from './20241129_225833_add';
import * as migration_20241129_230030_add_team_image_and_role from './20241129_230030_add_team_image_and_role';
import * as migration_20241129_230133_add_logoLight_to_technologies from './20241129_230133_add_logoLight_to_technologies';
import * as migration_20241129_231156_add_slug_to_work from './20241129_231156_add_slug_to_work';
import * as migration_20241130_002307_add_all_initial_fields from './20241130_002307_add_all_initial_fields';
import * as migration_20241130_154252_update_metatitle_name_in_pages from './20241130_154252_update_metatitle_name_in_pages';
import * as migration_20241130_161414_update_tagline_name_to_run_migrate_test from './20241130_161414_update_tagline_name_to_run_migrate_test';
import * as migration_20241130_162147_revert_pillar_tagline_name from './20241130_162147_revert_pillar_tagline_name';
import * as migration_20241130_163332_add_meta_fields_to_blogposts from './20241130_163332_add_meta_fields_to_blogposts';
import * as migration_20241130_233551_add_hidden_file_hash_to_media from './20241130_233551_add_hidden_file_hash_to_media';
import * as migration_20241201_014900_add_header_and_footer from './20241201_014900_add_header_and_footer';
import * as migration_20241201_234638_update_structure_of_blogposts_meta from './20241201_234638_update_structure_of_blogposts_meta';
import * as migration_20241202_154355_add_meta_fields_to_work from './20241202_154355_add_meta_fields_to_work';
import * as migration_20241203_205917_add_bioimage_to_team from './20241203_205917_add_bioimage_to_team';
import * as migration_20241203_210256_add_meta_fields_to_team from './20241203_210256_add_meta_fields_to_team';
import * as migration_20241203_210836_add_herotitle_and_description_to_team from './20241203_210836_add_herotitle_and_description_to_team';
import * as migration_20241203_211118_add_links_to_team from './20241203_211118_add_links_to_team';

export const migrations = [
  {
    up: migration_20241126_204542_add_initial_user.up,
    down: migration_20241126_204542_add_initial_user.down,
    name: '20241126_204542_add_initial_user',
  },
  {
    up: migration_20241126_214715_add_blogposts_and_categories.up,
    down: migration_20241126_214715_add_blogposts_and_categories.down,
    name: '20241126_214715_add_blogposts_and_categories',
  },
  {
    up: migration_20241126_233322_add_forms_and_form_submissions.up,
    down: migration_20241126_233322_add_forms_and_form_submissions.down,
    name: '20241126_233322_add_forms_and_form_submissions',
  },
  {
    up: migration_20241128_032031_add_location_title.up,
    down: migration_20241128_032031_add_location_title.down,
    name: '20241128_032031_add_location_title',
  },
  {
    up: migration_20241128_032621_add_work_title.up,
    down: migration_20241128_032621_add_work_title.down,
    name: '20241128_032621_add_work_title',
  },
  {
    up: migration_20241128_032723_add_faq_title.up,
    down: migration_20241128_032723_add_faq_title.down,
    name: '20241128_032723_add_faq_title',
  },
  {
    up: migration_20241128_032942_add_brand_title_and_technology_title.up,
    down: migration_20241128_032942_add_brand_title_and_technology_title.down,
    name: '20241128_032942_add_brand_title_and_technology_title',
  },
  {
    up: migration_20241128_034215_add_faq_answer.up,
    down: migration_20241128_034215_add_faq_answer.down,
    name: '20241128_034215_add_faq_answer',
  },
  {
    up: migration_20241128_034546_add_callout_and_full_testimonial_fields.up,
    down: migration_20241128_034546_add_callout_and_full_testimonial_fields.down,
    name: '20241128_034546_add_callout_and_full_testimonial_fields',
  },
  {
    up: migration_20241129_170939_add_location_and_logo_fields_to_brands.up,
    down: migration_20241129_170939_add_location_and_logo_fields_to_brands.down,
    name: '20241129_170939_add_location_and_logo_fields_to_brands',
  },
  {
    up: migration_20241129_225216_add.up,
    down: migration_20241129_225216_add.down,
    name: '20241129_225216_add',
  },
  {
    up: migration_20241129_225538_add.up,
    down: migration_20241129_225538_add.down,
    name: '20241129_225538_add',
  },
  {
    up: migration_20241129_225833_add.up,
    down: migration_20241129_225833_add.down,
    name: '20241129_225833_add',
  },
  {
    up: migration_20241129_230030_add_team_image_and_role.up,
    down: migration_20241129_230030_add_team_image_and_role.down,
    name: '20241129_230030_add_team_image_and_role',
  },
  {
    up: migration_20241129_230133_add_logoLight_to_technologies.up,
    down: migration_20241129_230133_add_logoLight_to_technologies.down,
    name: '20241129_230133_add_logoLight_to_technologies',
  },
  {
    up: migration_20241129_231156_add_slug_to_work.up,
    down: migration_20241129_231156_add_slug_to_work.down,
    name: '20241129_231156_add_slug_to_work',
  },
  {
    up: migration_20241130_002307_add_all_initial_fields.up,
    down: migration_20241130_002307_add_all_initial_fields.down,
    name: '20241130_002307_add_all_initial_fields',
  },
  {
    up: migration_20241130_154252_update_metatitle_name_in_pages.up,
    down: migration_20241130_154252_update_metatitle_name_in_pages.down,
    name: '20241130_154252_update_metatitle_name_in_pages',
  },
  {
    up: migration_20241130_161414_update_tagline_name_to_run_migrate_test.up,
    down: migration_20241130_161414_update_tagline_name_to_run_migrate_test.down,
    name: '20241130_161414_update_tagline_name_to_run_migrate_test',
  },
  {
    up: migration_20241130_162147_revert_pillar_tagline_name.up,
    down: migration_20241130_162147_revert_pillar_tagline_name.down,
    name: '20241130_162147_revert_pillar_tagline_name',
  },
  {
    up: migration_20241130_163332_add_meta_fields_to_blogposts.up,
    down: migration_20241130_163332_add_meta_fields_to_blogposts.down,
    name: '20241130_163332_add_meta_fields_to_blogposts',
  },
  {
    up: migration_20241130_233551_add_hidden_file_hash_to_media.up,
    down: migration_20241130_233551_add_hidden_file_hash_to_media.down,
    name: '20241130_233551_add_hidden_file_hash_to_media',
  },
  {
    up: migration_20241201_014900_add_header_and_footer.up,
    down: migration_20241201_014900_add_header_and_footer.down,
    name: '20241201_014900_add_header_and_footer',
  },
  {
    up: migration_20241201_234638_update_structure_of_blogposts_meta.up,
    down: migration_20241201_234638_update_structure_of_blogposts_meta.down,
    name: '20241201_234638_update_structure_of_blogposts_meta',
  },
  {
    up: migration_20241202_154355_add_meta_fields_to_work.up,
    down: migration_20241202_154355_add_meta_fields_to_work.down,
    name: '20241202_154355_add_meta_fields_to_work',
  },
  {
    up: migration_20241203_205917_add_bioimage_to_team.up,
    down: migration_20241203_205917_add_bioimage_to_team.down,
    name: '20241203_205917_add_bioimage_to_team',
  },
  {
    up: migration_20241203_210256_add_meta_fields_to_team.up,
    down: migration_20241203_210256_add_meta_fields_to_team.down,
    name: '20241203_210256_add_meta_fields_to_team',
  },
  {
    up: migration_20241203_210836_add_herotitle_and_description_to_team.up,
    down: migration_20241203_210836_add_herotitle_and_description_to_team.down,
    name: '20241203_210836_add_herotitle_and_description_to_team',
  },
  {
    up: migration_20241203_211118_add_links_to_team.up,
    down: migration_20241203_211118_add_links_to_team.down,
    name: '20241203_211118_add_links_to_team'
  },
];
