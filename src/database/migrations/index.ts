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
    name: '20241129_230030_add_team_image_and_role'
  },
];
