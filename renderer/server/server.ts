import { createServer } from "http";
import next from "next";
import { createConnection } from "typeorm";
import { parse } from "url";

const port = 8888;
const app = next({
  dev: true,
  dir: "./renderer"
});
const handle = app.getRequestHandler();

(async () => {
  try {
    await createConnection({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "postgres",
      database: "postgres",
      synchronize: true,
      logging: true,
      entities: ["renderer/server/entities/**/*.ts"],
      migrations: ["renderer/server/migrations/**/*.ts"]
    });

    await app.prepare();

    createServer((req, res) => {
      handle(req, res, parse(req.url as string, true));
    }).listen(port, () => {
      console.log(`> Ready on http://localhost:${port}`);
    });
  } catch (err) {
    console.error(err);
  }
})();
