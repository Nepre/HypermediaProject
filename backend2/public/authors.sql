-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  lun. 10 juin 2019 à 13:46
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
-- Structure de la table `authors`
--

DROP TABLE IF EXISTS `authors`;
CREATE TABLE IF NOT EXISTS `authors` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Name` text NOT NULL,
  `Biography` text NOT NULL,
  `Birthday` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `authors`
--

INSERT INTO `authors` (`id`, `Name`, `Biography`, `Birthday`) VALUES
(1, 'J. K. Rowling', 'J.K. Rowling is the author of the record-breaking, multi-award-winning Harry Potter novels. Loved by fans around the world, the series has sold more than 500 million copies, been translated into 80 languages and made into eight blockbuster films.\r\n\r\nShe has written three companion volumes in aid of charity: Quidditch Through the Ages and Fantastic Beasts and Where to Find Them (in aid of Comic Relief and Lumos), and The Tales of Beedle the Bard (in aid of Lumos). \r\n\r\nAs well as receiving an OBE and Companion of Honour for services to children\'s literature, J.K. Rowling has received many awards and honours, including France\'s Légion d\'Honneur and the Hans Christian Andersen Award. ', 'July 31, 1965'),
(2, 'Agatha Christie', 'Agatha Christie was born in 1890 and created the detective Hercule Poirot in her debut novel, The Mysterious Affair at Styles (1920). She achieved wide popularity with The Murder of Roger Ackroyd (1926) and produced a total of eighty novels and short-story collections over six decades.', 'September 15, 1890'),
(3, 'Antoine de Saint-Exupéry', 'Antoine Marie Jean-Baptiste Roger, comte de Saint-Exupéry, simply known as Saint-Exupéry (29 June 1900 – 31 July 1944), was a French writer, poet, aristocrat, journalist and pioneering aviator. He became a laureate of several of France\'s highest literary awards and also won the United States National Book Award He is best remembered for his novella The Little Prince (Le Petit Prince) and for his lyrical aviation writings, including Wind, Sand and Stars and Night Flight. \r\nSaint-Exupéry was a successful commercial pilot before World War II, working airmail routes in Europe, Africa and South America. At the outbreak of war, he joined the French Air Force (Armée de l\'Air), flying reconnaissance missions until France\'s armistice with Germany in 1940. After being demobilised from the French Air Force, he travelled to the United States to help persuade its government to enter the war against Nazi Germany. Following a 27-month hiatus in North America, during which he wrote three of his most important works, he joined the Free French Air Force in North Africa, although he was far past the maximum age for such pilots and in declining health. He disappeared over the Mediterranean on a reconnaissance mission in July 1944; he is believed to have died at that time. \r\nPrior to the war, Saint-Exupéry had achieved fame in France as an aviator. His literary works – among them The Little Prince, translated into 300 languages and dialects – posthumously boosted his stature to national hero status in France. He earned further widespread recognition with international translations of his other works. His 1939 philosophical memoir Terre des hommes (titled Wind, Sand and Stars in English) became the name of an international humanitarian group; it was also used to create the central theme of the most successful world\'s fair of the 20th century, Expo 67 in Montreal, Quebec. Saint-Exupéry\'s birthplace, Lyon, has also named its main airport after him.\r\n', 'June 29, 1900'),
(4, 'Roberto Saviano', 'Roberto Saviano is an Italian journalist, writer and essayist. He is the author of international bestsellers Gomorra and ZeroZeroZero.\r\n\r\nIn his writings, his articles, his books and his television programs, he uses literature and investigative reporting to tell of the economic reality of the territory and business of the Camorra and of organized crime more generally.\r\n\r\nAfter the first death threats of 2006 made by the Casalese clan, a cartel of the Camorra, which he denounced in his exposé and in the piazza of Casal di Principe during a demonstration in defense of legality, Saviano was put under a strict security protocol. Since October 13, 2006, he has lived under police protection.', 'September 22, 1979'),
(5, 'Miguel de Cervantes', 'Miguel de Cervantes was born near Madrid in 1547. He became a soldier in 1570 and was badly wounded in the Battle of Lepanto. Captured by the Turks in 1575, Cervantes spent five years in prison. before he was ransomed and returned home. After less successful earlier efforts, Cervantes finally achieved literary success in his later years, publishing the first part of Don Quixote in 1605. He died in 1616.', 'September 29, 1547'),
(6, 'George R. R. Martin', 'George R.R. Martin is the globally bestselling author of many fine novels, including A Game of Thrones, A Clash of Kings, A Storm of Swords, A Feast for Crows, and A Dance with Dragons, which together make up the series A Song of Ice and Fire, on which HBO based the world\'s most-watched television series, Game of Thrones. Other works set in or about Westeros include The World of Ice and Fire, and A Knight of the Seven Kingdoms. His science fiction novella Nightflyers has also been adapted as a television series; and he is the creator of the shared-world Wild Cards universe, working with the finest writers in the genre. He lives in Santa Fe, New Mexico.', 'September 20, 1948');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
