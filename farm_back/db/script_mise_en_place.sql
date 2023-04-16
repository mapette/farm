DROP TABLE IF EXISTS needs;
DROP TABLE IF EXISTS productions;
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
   `id_stock` int DEFAULT NULL,
   PRIMARY KEY (`id`),
   KEY `item_stock_idx` (`id_stock`),
   CONSTRAINT `item_storage` FOREIGN KEY (`id_stock`) REFERENCES `stocks` (`id`)
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
   `id_recipe` int NOT NULL,
   `id_item` int NOT NULL,
   `nb` int NOT NULL,
   PRIMARY KEY (`id`),
   KEY `production_recipe_idx` (`id_recipe`),
   KEY `production_item_idx` (`id_item`),
   CONSTRAINT `production_item` FOREIGN KEY (`id_item`) REFERENCES `items` (`id`),
   CONSTRAINT `production_recipe` FOREIGN KEY (`id_recipe`) REFERENCES `recipes` (`id`)
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

-- stocks
insert into stocks (name, capacity) values ("néant", null);  -- pas de storage place
insert into stocks (name, capacity) values ("grange", 20);  -- grange
-- items
insert into items (name, id_stock) values ("eau", 1);  -- eau -> néant	id 1
insert into items (name, id_stock) values ("pomme", 2);  -- pomme -> grange		id 2
insert into items (name, id_stock) values ("blé", 2);  -- blé -> grange		id 3
-- production places
insert into prod_places (name) values ("puit");			-- id 1
insert into prod_places (name) values ("pommier");		-- id 2
insert into prod_places (name) values ("champs de blé");	-- id 3
-- recipe
insert into recipes (name, id_pp) values ("eau", 1); 	-- recette 1 : eau - via puit			
insert into productions (id_recipe, id_item, nb) values (1, 1, 4); -- puit a besoin de rien - produit de 4 eau
insert into recipes (name, id_pp) values ("pomme", 2); 	-- recette 2 : pomme - via pommier
insert into needs (id_recipe, id_item, nb) values (2, 1, 1); -- pommier a besoin 1 eau
insert into productions (id_recipe, id_item, nb) values (2, 2, 1); -- pommier produit 1 pomme
insert into recipes (name, id_pp) values ("blé", 2); 	-- recette 3 : blé - via champs
insert into needs (id_recipe, id_item, nb) values (3, 1, 1); -- champs de blé a besoin 1 eau
insert into productions (id_recipe, id_item, nb) values (3, 3, 1); -- pommier de blé produit 1 blé






-- show create table stocks;
