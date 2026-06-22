-- creation de la Bdd "trouveTonArtisan" avec Mysql

SET default_storage_engine = InnoDB;

CREATE DATABASE IF NOT EXISTS `trouveTonArtisan` collate utf8mb4_general_ci;
USE `trouveTonArtisan`;

--creation de la table "artisan"
DROP TABLE IF EXISTS `artisan`;
CREATE TABLE IF NOT EXISTS `artisan` (
  `id_artisan` int NOT NULL AUTO_INCREMENT,
  `nom_artisan` varchar(50) NOT NULL,
  `id_specialite` int NOT NULL,
  `note_artisan` decimal(2,1) NOT NULL,
  `rue_artisan` varchar(50) NOT NULL,
  `codepostal_artisan` varchar(10) NOT NULL,
  `ville_artisan` varchar(50) NOT NULL,
  `apropos_artisan` text NOT NULL,
  `email_artisan` varchar(50) DEFAULT NULL,
  `site_artisan` varchar(50) DEFAULT NULL,
  `photo_artisan` varchar(300) NOT NULL,
  `top_artisan` tinyint(1) NOT NULL,
  PRIMARY KEY (`id_artisan`),
  UNIQUE KEY `email_artisan` (`email_artisan`),
  UNIQUE KEY `site_artisan` (`site_artisan`),
  KEY `id_specialité` (`id_specialite`)
);

ALTER TABLE `artisan`
  ADD CONSTRAINT `artisan_ibfk_1` FOREIGN KEY (`id_specialite`) REFERENCES `specialite` (`id_specialite`);


--creation de la table "categorie"
DROP TABLE IF EXISTS `categorie`;
CREATE TABLE IF NOT EXISTS `categorie` (
  `id_categorie` int NOT NULL AUTO_INCREMENT,
  `nom_categorie` varchar(50) NOT NULL,
  PRIMARY KEY (`id_categorie`)
);

--creation de la table "specialité"
DROP TABLE IF EXISTS `specialite`;
CREATE TABLE IF NOT EXISTS `specialite` (
  `id_specialite` int NOT NULL AUTO_INCREMENT,
  `nom_specialite` varchar(50) NOT NULL,
  `id_categorie` int NOT NULL,
  PRIMARY KEY (`id_specialite`),
  KEY `id_categorie` (`id_categorie`)
);


 ALTER TABLE `specialite`
  ADD CONSTRAINT `specialite_ibfk_1` FOREIGN KEY (`id_categorie`) REFERENCES `categorie` (`id_categorie`); 