import { text, integer, sqliteTable } from "drizzle-orm/sqlite-core";

const users = sqliteTable("users", {
	id: text("id", {
		length: 21
	}).primaryKey(),
	email: text("username", {
		length: 50,
	}).notNull(),
	legalName: text("legalName", {
		length: 50,
	}).notNull(),
	streetAddress: text("streetAddress", {
		length: 50,
	}).notNull(),
	city: text("city", {
		length: 50,
	}).notNull(),
	postCode: integer("postCode").notNull(),
});

export { users };