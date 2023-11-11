CREATE TABLE `users` (
	`id` text(21) PRIMARY KEY NOT NULL,
	`username` text(50) NOT NULL,
	`legalName` text(50) NOT NULL,
	`streetAddress` text(50) NOT NULL,
	`city` text(50) NOT NULL,
	`postCode` integer NOT NULL
);
