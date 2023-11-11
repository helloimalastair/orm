import { nanoid } from "nanoid";
import { users } from "./schema";
import { Database } from "bun:sqlite";
import { fakerDA } from "@faker-js/faker";
import { drizzle } from "drizzle-orm/bun-sqlite";
import { migrate } from "drizzle-orm/bun-sqlite/migrator";

export default async function seedDb() {
	const orm = drizzle(new Database(":memory:"));
	migrate(orm, { migrationsFolder: "./drizzle" });
	// Seed Users
	for (let a = 0; a < 100; a++) {
		const id = nanoid();
		const firstName = fakerDA.person.firstName();
		const lastName = fakerDA.person.lastName();
		orm.insert(users).values({
			id,
			email: fakerDA.internet.email({
				firstName,
				lastName,
			}).toLowerCase(),
			legalName: firstName + " " + lastName,
			streetAddress: fakerDA.location.streetAddress(),
			city: fakerDA.location.city(),
			postCode: Number(fakerDA.location.zipCode()),
		}).execute();
	}
	return orm;
}