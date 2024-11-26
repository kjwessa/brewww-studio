import * as migration_20241126_204542_add_initial_user from './20241126_204542_add_initial_user';
import * as migration_20241126_214715_add_blogposts_and_categories from './20241126_214715_add_blogposts_and_categories';
import * as migration_20241126_233322_add_forms_and_form_submissions from './20241126_233322_add_forms_and_form_submissions';

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
    name: '20241126_233322_add_forms_and_form_submissions'
  },
];
