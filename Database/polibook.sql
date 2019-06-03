-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  lun. 03 juin 2019 à 15:49
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
-- Structure de la table `polibook`
--

DROP TABLE IF EXISTS `polibook`;
CREATE TABLE IF NOT EXISTS `polibook` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` text NOT NULL,
  `author` text NOT NULL,
  `genre` text NOT NULL,
  `date` text NOT NULL,
  `price` float(10,0) NOT NULL,
  `description` text NOT NULL,
  `description_author` text NOT NULL,
  `image` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `polibook`
--

INSERT INTO `polibook` (`id`, `title`, `author`, `genre`, `date`, `price`, `description`, `description_author`, `image`) VALUES
(1, 'The Philosopher\'s Stone', 'J. K. Rowling', 'Fantasy', '1997', 10, 'Witches', 'British', 'Harry_Potter.jpg'),
(2, 'The Chamber of Secrets', 'J. K. Rowling', 'Fantasy', '1998', 10, 'Witches', 'British', 'Harry_Potter_and_the_Chamber_of_Secrets.jpg'),
(3, 'The Prisoner of Azkaban', 'J. K. Rowling', 'Fantasy', '1999', 10, 'Witches', 'British', 'Harry_Potter_and_the_Prisoner_of_Azkaban.jpg'),
(4, 'The Goblet of Fire', 'J. K. Rowling', 'Fantasy', '2000', 10, 'Witches', 'British', 'Harry_Potter_and_the_Goblet_of_Fire.jpg'),
(5, 'The Order of the Phoenix', 'J. K. Rowling', 'Fantasy', '2003', 10, 'Witches', 'British', 'Harry_Potter_and_the_Order_of_the_Phoenix.jpg');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
