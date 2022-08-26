DROP DATABASE `gestionPersonel`;
CREATE DATABASE `gestionPersonel`;

USE `gestionPersonel`;

CREATE TABLE `fonction`
(
    `fonction_id` INT NOT NULL AUTO_INCREMENT ,
    `fonction_name` VARCHAR(255) NOT NULL ,
    PRIMARY KEY (`fonction_id`),
    UNIQUE (`fonction_name`)
)ENGINE = InnoDB;
INSERT INTO `fonction`(`fonction_name`)
VALUES ("Admin"),("Communication"),("Logistique"),("Archive"),("Evenement"),("Sport"),("President"),("Coordo");


CREATE TABLE `image`(
    `image_id` INT NOT NULL AUTO_INCREMENT ,
    `image_file` VARCHAR(255) NOT NULL ,
    PRIMARY KEY (`image_id`)
)ENGINE = InnoDB;

CREATE TABLE `user` 
(   
    `id` INT NOT NULL AUTO_INCREMENT ,
    `name` VARCHAR(255) NOT NULL , 
    `email` VARCHAR(255) NOT NULL ,
    `password` VARCHAR(255) NOT NULL ,
    `image` INT DEFAULT 0,
    `function` INT NOT NULL ,
    `createdDate` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP  ,
    PRIMARY KEY (`id`),
    UNIQUE (`email`),
    UNIQUE (`password`),
    FOREIGN KEY (`function`) REFERENCES `fonction`(`fonction_id`),
    FOREIGN KEY (`image`) REFERENCES `image`(`image_id`)

)ENGINE = InnoDB; 
