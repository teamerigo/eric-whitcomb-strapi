module.exports = ({ env }) => ({
  host: env("HEROKU_APP_URL"),
  port: env.int("PORT"),
  app: {
    keys: env.array("APP_KEYS"),
  },
});
