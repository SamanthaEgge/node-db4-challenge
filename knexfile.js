// Update with your config settings.

module.exports = {
  development: {
    client: 'postgres',
    connection: {
      host: 'localhost',
      database: 'webdb3',
      user:     "postgres",

    },
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    },
  }, 
};
git commit -m "Initialized project with npm. Created knexfile, ser