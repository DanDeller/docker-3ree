/**
* Application config
* Don't set dev defaults here, all parameters should come from enviroment variables, and fail if not present
* Non-sensitive data is ok to be hardcoded, provided it's equal across all environments
*/
module.exports = {
  db: {
    host: process.env.DB_HOST || 'rethinkdb',
    port: process.env.DB_PORT || '28015',
    name: process.env.DB_NAME || 'pulse'
  },
  url: 'webapp.docker',
  redis: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT
  },
  secrets: {
      session: process.env.SESSION_SECRET
  },
  port: parseInt(process.env.PORT, 10) || 3000
};
