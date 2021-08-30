const http = require("http");
const next = require("next");
const express = require("express");
const path = require("path");

const dev = process.env.NODE_ENV !== "production";
const port = process.env.PORT || 8000;
const app = next({ dev });
const handle = app.getRequestHandler();

(async () => {
  await app.prepare();
  const server = express();

  server.get("/zohoverify/verifyforzoho.html", (req, res) => {
    return res.sendFile(path.join(__dirname, "verifyforzoho.html"));
  });

  server.get("*", (req, res) => handle(req, res));

  server.post("*", (req, res) => {
    return handle(req, res);
  });

  server.put("*", (req, res) => {
    return handle(req, res);
  });

  const httpServer = http.createServer(server);

  httpServer.listen(port);

  console.info(`> Ready on http://localhost:${port}`); // eslint-disable-line no-console
})();
