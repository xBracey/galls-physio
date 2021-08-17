module.exports = ({ env }) => {
  let url = "http://localhost";
  let adminUrl = "http://localhost/admin";

  if (env("NODE_ENV", "development") === "production") {
    url = "https://firstteamphysiotherapy.co.uk/api/";
  }

  if (env("NODE_ENV", "development") === "production") {
    adminUrl = "https://firstteamphysiotherapy.co.uk/admin/";
  }

  return {
    host: env("HOST", "0.0.0.0"),
    port: env.int("PORT", 1337),
    url,
    proxy: true,
    admin: {
      url: adminUrl,
      auth: {
        secret: env("ADMIN_JWT_SECRET", "4ea71792e43ab38d55c65a5e17051681"),
      },
    },
  };
};
