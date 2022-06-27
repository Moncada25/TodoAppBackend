CREATE DATABASE ng_todoapp_db;

USE ng_todoapp_db;

CREATE TABLE games(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(180),
    description VARCHAR(255),
    image VARCHAR(200),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE tasks(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    assignment VARCHAR(30),
    title VARCHAR(50),
    description TEXT,
    points INT(11),
    completed int(11),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE users(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(30),
    password VARCHAR(150),
    email VARCHAR(50),
    name VARCHAR(30),
    last_name VARCHAR(30),
    age INT(11),
    description TEXT,
    registered_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE skills(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30),
    level_name VARCHAR(30),
    level_value VARCHAR(30),
    declared_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

ALTER TABLE `games` ADD `id_user` INT(11) NOT NULL AFTER `created_at`;
ALTER TABLE `games` ADD FOREIGN KEY (`id_user`) REFERENCES `users`(`id`);

ALTER TABLE `tasks` ADD `id_user` INT(11) NOT NULL AFTER `created_at`;
ALTER TABLE `tasks` ADD FOREIGN KEY (`id_user`) REFERENCES `users`(`id`);

ALTER TABLE `skills` ADD `id_user` INT(11) NOT NULL AFTER `declared_at`;
ALTER TABLE `skills` ADD FOREIGN KEY (`id_user`) REFERENCES `users`(`id`);