import { Hono } from "hono";
import seedDb from "./seed";
import template from "./template";
import type { Serve } from "bun";

const app = new Hono();

console.log("Seeding database...");
const orm = await seedDb();

app.get("/", async c => c.html(await template(orm)));

console.log("Port 80, locked and loaded!");
export default <Serve>{
	port: 80,
	fetch: app.fetch,
};