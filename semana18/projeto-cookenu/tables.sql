CREATE TABLE `Users_Cookenu` (
  `id` varchar(64) NOT NULL UNIQUE,
  `name` varchar(64) NOT NULL UNIQUE,
  `email` varchar(64) NOT NULL UNIQUE ,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


CREATE TABLE `Recipes_Cookenu` (
  `id` varchar(64) NOT NULL UNIQUE,
  `title` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `cratedAt` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;