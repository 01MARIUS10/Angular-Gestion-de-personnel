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
    `user_id` INT NOT NULL AUTO_INCREMENT ,
    `user_name` VARCHAR(255) NOT NULL , 
    `user_email` VARCHAR(255) NOT NULL ,
    `user_password` VARCHAR(255) NOT NULL ,
    `user_image` INT DEFAULT 0,
    `user_function` INT NOT NULL ,
    `user_createdDate` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP  ,
    PRIMARY KEY (`user_id`),
    UNIQUE (`user_email`),
    UNIQUE (`user_password`),
    FOREIGN KEY (`user_function`) REFERENCES `fonction`(`fonction_id`),
    FOREIGN KEY (`user_image`) REFERENCES `image`(`image_id`)

)ENGINE = InnoDB; 
