-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  lun. 17 juin 2019 à 10:46
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
-- Structure de la table `comments`
--

DROP TABLE IF EXISTS `comments`;
CREATE TABLE IF NOT EXISTS `comments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` text NOT NULL,
  `comment` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=20 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `comments`
--

INSERT INTO `comments` (`id`, `title`, `comment`) VALUES
(1, 'Harry Potter and the Philosopher\'s Stone ', 'Best book series if you ask me. I have read this book over 15 times. JK Rowling\'s writing is better than any other writing. I love Hermione Granger. '),
(2, 'Harry Potter and the Philosopher\'s Stone', 'When I started reading harry potter and the philosophers stone I was unable to stop myself by reading and I read it continously  in just one day without getting bored. This is the best book series. I would love to read it again and again.'),
(3, 'Harry Potter and the Half-Blood Prince', 'The first time I read this book I was a kid and I said to myself this writer is boring, then I had to read a book for a class assignment and I had no other book than this so I had to. After I finish reading I asked myself, why waited this long? It was one of the greatest book I ever read and knew that J.K. Rowling is the greatest writer in the world.'),
(4, 'Harry Potter and the Half-Blood Prince', 'Such an awesome book! I could honestly read it over and over again! I love the series, but this book must be my favorite!'),
(5, 'Harry Potter and the Deathly Hallows', 'This book was awesome you should definetly read it. I love everything about it and the idea of the Hallows was great. The only disappointment is that there is no more books.'),
(6, 'Harry Potter and the Deathly Hallows', 'I love this book for some reason when I read it it I get shaky. I\'ve read it at least 7 times for it is the ultimate book! The chapters are always new and exciting bringing on unexpected twists. Characters have great roles and bad turns to good without the simplest knowing. This is the best book ever '),
(8, 'And Then There Were None', 'Even though it was written in 1939, as a serialized newspaper story, it feels modern in its moral complexities. Fans of British mysteries, cozy or edgy, won\'t want to miss it.'),
(9, 'And Then There Were None', 'And Then There Were None is a fantastic psychological portrait of a group of frightened, confused people turning on one another in the face of fear. I love this book.'),
(10, 'Murder on the Orient Express', 'This was my first Agatha Christie novel and it definitely did not disappoint! I was not expecting that ending, which is obviously a good thing in a murder mystery story, but I am proud of myself for picking up on some other clues. I am so impressed by how she was able to weave this intricate of a story in only 200 pages and I can\'t wait to pick up another one of her novels in the future!'),
(11, 'Murder on the Orient Express', 'When all the other little girls wanted to be princesses - do you know what I wanted to be? And no, it wasn\'t a vampire, either... it was... HERCULE POIROT\'S SIDEKICK !!!'),
(12, 'The Little Prince', 'The language is complex and it is hard to understand what is going on at times, but the structure of the book is good and would appeal to adults and children.'),
(13, 'The Little Prince', 'I fell in love with the book. I believe that this is an amazing story,very eye-opening. I would recommend it to everyone!'),
(14, 'Gomorra. Viaggio nell\'impero economico e nel sogno di dominio della camorra', 'Roberto Saviano is so brave to bring out this book with exposes the Camorra - long hidden in the shadows of the crumbling high-rises of the poor neighbourhoods north of Naples - and their hydra-like influence on the Italian (and global) economy. Saviano grew up here and is able to talk to the dealers, the corner boys, the counterfeiters, the hitmen, etc and give us an closeup, unfiltered view of the heart of this organisation.'),
(15, 'Gomorra. Viaggio nell\'impero economico e nel sogno di dominio della camorra', 'This book should be taught in schools. The media tend to forget about the camorra in Campania. They only talk about it when there\'s more than 2 deads a day...\r\nThis book is a great tragical testimony of somebody who does not want to forget and wants to shout to everybody what the truth really is.\r\nRecommended to anyone who doesn\'t want to stop to the surface and wants to go deep into the scum of reality.\r\n'),
(16, 'Don Quixote', 'Whatever else Don Quixote may be, I never found it boring. Parts of it were very funny, others had wonderful similarities with Shakespeare, some bits were more serious: it\'s like a mini library in a single volume. Wonderful.'),
(17, 'Don Quixote', 'Although Don Quixote is a rather hefty novel, it moved very quickly for me. One adventure immediately follows another, and there is humour on almost every page. It is undoubtedly my favorite book; although on the surface it is a fun and amusing book, its depiction of Don Quixote and Sancho also delve into the human condition and forces the reader to question what is really important, what it means to be successful in life, and what exactly is morality. Although most of the novel is quite light-hearted, it does end on a rather sad note with the main character\'s death. The novel is often regarded as one of the greatest ever written, and I would highly recommend it to anyone who is willing to tackle a long book.'),
(18, 'A Game of Thrones', 'This book, and the other books published of the series, are as impressive and amazing piece of literature. The characters in the story are superb. I read these book and absolutely had to recommend them to every book buddy.'),
(19, 'A Game of Thrones', 'I made it to only slightly more than halfway through book. It is the only novel I can ever remember not finishing.');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
