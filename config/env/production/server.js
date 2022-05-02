module.exports = ({ env }) => ({
  proxy: true,
  host: env("HEROKU_APP_URL"),
  port: env.int("PORT", 1337),
  app: {
    keys: env.array("APP_KEYS"),
  },
});
