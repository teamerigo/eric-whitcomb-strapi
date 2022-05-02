module.exports = ({ env }) => ({
  proxy: true,
  url: env("HEROKU_APP_URL"),
  app: {
    keys: env.array("APP_KEYS"),
  },
});
