module.exports = ({ env }) => ({
  host: env("HEROKU_APP_URL"),
  proxy: true,
  app: {
    keys: env.array("APP_KEYS"),
  },
});
