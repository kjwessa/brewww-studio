import * as migration_20241126_204542_add_initial_user from './20241126_204542_add_initial_user';
import * as migration_20241126_214715_add_blogposts_and_categories from './20241126_214715_add_blogposts_and_categories';

export const migrations = [
  {
    up: migration_20241126_204542_add_initial_user.up,
    down: migration_20241126_204542_add_initial_user.down,
    name: '20241126_204542_add_initial_user',
  },
  {
    up: migration_20241126_214715_add_blogposts_and_categories.up,
    down: migration_20241126_214715_add_blogposts_and_categories.down,
    name: '20241126_214715_add_blogposts_and_categories'
  },
];
