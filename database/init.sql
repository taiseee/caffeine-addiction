-- init.sql
-- This file is used to initialize the database.

CREATE DATABASE caffeine_addiction;

use caffeine_addiction;

CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255),
    PRIMARY KEY (id)
);

