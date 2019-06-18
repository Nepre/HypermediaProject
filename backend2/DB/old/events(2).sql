-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  lun. 17 juin 2019 à 11:53
-- Version du serveur :  5.7.23
-- Version de PHP :  7.2.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `hypermedia`
--

-- --------------------------------------------------------

--
-- Structure de la table `events`
--

DROP TABLE IF EXISTS `events`;
CREATE TABLE IF NOT EXISTS `events` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Name` text NOT NULL,
  `Place` text NOT NULL,
  `Starting_Date` date DEFAULT NULL,
  `End_Date` date DEFAULT NULL,
  `Price` decimal(10,0) NOT NULL,
  `Picture` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `events`
--

INSERT INTO `events` (`id`, `Name`, `Place`, `Starting_Date`, `End_Date`, `Price`, `Picture`) VALUES
(1, 'Salon du Livre\r\n', 'Paris', '2020-03-20', '2020-03-23', '5', 'salon_livre.jpg'),
(2, 'Salone Internazionale del Libro', 'Torino', '2020-05-14', '2020-05-18', '10', 'Logo_salone_libro.png'),
(3, 'Feria internacional del libro', 'Guadalajara', '2019-12-01', '2019-12-08', '15', 'Guadalajara.jpg'),
(4, 'Frankfurt Book Fair', 'Frankfurt', '2019-10-16', '2019-10-20', '22', 'Frankfurter_Buchmesse.png'),
(5, 'Queen’s Park Book Festival', 'Throughout Queen’s Park', '2019-06-29', '2019-06-30', '20', 'Queen_s_Park.jfif'),
(6, 'Theakston Old Peculier Crime Writing Festival', 'Old Swan Hotel, Harrogate', '2019-07-18', '2019-07-21', '5', 'Harrogate.jpg');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
