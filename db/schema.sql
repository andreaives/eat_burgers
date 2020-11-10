DROP DATABASE IF EXISTS burger_db;

CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	devour BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
USE qybfegwq884rvdj0;

INSERT INTO burgers (name, devour) VALUES ('Good Burger', true);
INSERT INTO burgers (name) VALUES ('Cheese Burger'), ('Bacon Burger');