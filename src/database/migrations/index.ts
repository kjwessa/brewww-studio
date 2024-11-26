import * as migration_20241126_204542_add_initial_user from './20241126_204542_add_initial_user';

export const migrations = [
  {
    up: migration_20241126_204542_add_initial_user.up,
    down: migration_20241126_204542_add_initial_user.down,
    name: '20241126_204542_add_initial_user'
  },
];
