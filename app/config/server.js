module.exports = ({ env }) => {
  if (env("NODE_ENV", "development") === "production") {
    url = "https://firstteamphysiotherapy.co.uk/strapi";
  }

  return {
    host: env("HOST", "0.0.0.0"),
    port: env.int("PORT", 1337),
    url,
    proxy: true,
    admin: {
      auth: {
        secret: env("ADMIN_JWT_SECRET", "4ea71792e43ab38d55c65a5e17051681"),
      },
    },
  };
};
