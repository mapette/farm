DROP TABLE IF EXISTS needs;
DROP TABLE IF EXISTS productions
DROP TABLE IF EXISTS recipes;
DROP TABLE IF EXISTS prod_places;
DROP TABLE IF EXISTS items;
DROP TABLE IF EXISTS stocks;

CREATE TABLE `stocks` (
   `id` int NOT NULL AUTO_INCREMENT,
   `name` varchar(45) NOT NULL,
   `capacity` int DEFAULT NULL,
   PRIMARY KEY (`id`)
 );

CREATE TABLE `items` (
   `id` int NOT NULL AUTO_INCREMENT,
   `name` varchar(45) NOT NULL,
   `nb` int DEFAULT '0',
   `id_storage` int DEFAULT NULL,
   PRIMARY KEY (`id`),
   KEY `item_storage_idx` (`id_storage`),
   CONSTRAINT `item_storage` FOREIGN KEY (`id_storage`) REFERENCES `stocks` (`id`)
);

CREATE TABLE `prod_places` (
   `id` int NOT NULL AUTO_INCREMENT,
   `name` varchar(45) NOT NULL,
   `recipe_in_progress` int DEFAULT '0',
   PRIMARY KEY (`id`)
 );

CREATE TABLE `recipes` (
   `id` int NOT NULL AUTO_INCREMENT,
   `name` varchar(45) DEFAULT NULL,
   `id_pp` int NOT NULL,
   PRIMARY KEY (`id`),
   KEY `recipe_pp_idx` (`id_pp`),
   CONSTRAINT `recipe_pp` FOREIGN KEY (`id_pp`) REFERENCES `prod_places` (`id`)
 );

CREATE TABLE `productions` (
   `id` int NOT NULL AUTO_INCREMENT,
   `nb` int NOT NULL,
   `recipe` int NOT NULL,
   `item` int NOT NULL,
   PRIMARY KEY (`id`),
   KEY `recipe_idx` (`recipe`),
   KEY `item_idx` (`item`),
   CONSTRAINT `item` FOREIGN KEY (`item`) REFERENCES `items` (`id`),
   CONSTRAINT `recipe` FOREIGN KEY (`recipe`) REFERENCES `recipes` (`id`)
 );

CREATE TABLE `needs` (
   `id` int NOT NULL AUTO_INCREMENT,
   `id_recipe` int NOT NULL,
   `id_item` int NOT NULL,
   `nb` int NOT NULL,
   PRIMARY KEY (`id`),
   KEY `needs_recipe_idx` (`id_recipe`),
   KEY `needs_item_idx` (`id_item`),
   CONSTRAINT `needs_item` FOREIGN KEY (`id_item`) REFERENCES `items` (`id`),
   CONSTRAINT `needs_recipe` FOREIGN KEY (`id_recipe`) REFERENCES `recipes` (`id`)
 );


-- pommmier -> pomme -> pomme
insert into recipes (name, prod_places) values ("pomme", 1);  -- pommier
insert into needs (recipe, item, nb) values (1, 3, 1); -- pommier, eau, 1
insert into productions (recipe, item, nb) values (1, 1, 1); -- pommier, pomme, 1




