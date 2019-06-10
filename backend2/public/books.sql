-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  lun. 10 juin 2019 à 13:45
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
-- Structure de la table `books`
--

DROP TABLE IF EXISTS `books`;
CREATE TABLE IF NOT EXISTS `books` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` text NOT NULL,
  `author` text NOT NULL,
  `genre` text NOT NULL,
  `date` text NOT NULL,
  `price` decimal(10,0) NOT NULL,
  `description` text NOT NULL,
  `image` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `books`
--

INSERT INTO `books` (`id`, `title`, `author`, `genre`, `date`, `price`, `description`, `image`) VALUES
(1, 'Harry Potter and the Philosopher\'s Stone', 'J. K. Rowling', 'Fantasy', '1997', '10', 'Harry Potter has never even heard of Hogwarts when the letters start dropping on the doormat at number four, Privet Drive. Addressed in green ink on yellowish parchment with a purple seal, they are swiftly confiscated by his grisly aunt and uncle. Then, on Harry\'s eleventh birthday, a great beetle-eyed giant of a man called Rubeus Hagrid bursts in with some astonishing news: Harry Potter is a wizard, and he has a place at Hogwarts School of Witchcraft and Wizardry. An incredible adventure is about to begin!', 'Harry_Potter_and_the_Philosopher\'s_Stone_Book_Cover.jpg'),
(2, 'Harry Potter and the Half-Blood Prince', 'J. K. Rowling', 'Fantasy', '2005', '10', 'When Dumbledore arrives at Privet Drive one summer night to collect Harry Potter, his wand hand is blackened and shrivelled, but he does not reveal why. Secrets and suspicion are spreading through the wizarding world, and Hogwarts itself is not safe. Harry is convinced that Malfoy bears the Dark Mark: there is a Death Eater amongst them. Harry will need powerful magic and true friends as he explores Voldemort\'s darkest secrets, and Dumbledore prepares him to face his destiny.', 'Harry_Potter_and_the_Half-Blood_Prince'),
(3, 'Harry Potter and the Deathly Hallows', 'J. K. Rowling', 'Fantasy', '2007', '10', 'As he climbs into the sidecar of Hagrid\'s motorbike and takes to the skies, leaving Privet Drive for the last time, Harry Potter knows that Lord Voldemort and the Death Eaters are not far behind. The protective charm that has kept Harry safe until now is broken, but he cannot keep hiding. The Dark Lord is breathing fear into everything Harry loves and to stop him Harry will have to find and destroy the remaining Horcruxes. The final battle must begin - Harry must stand and face his enemy ...', 'Harry_Potter_and_the_Deathly_Hallows.jpg'),
(4, 'And Then There Were None', 'Agatha Christie', 'Crime', '1940', '9', '\"Ten . . .\"\r\nTen strangers are lured to an isolated island mansion off the Devon coast by a mysterious \"U. N. Owen.\"\r\n\"Nine . . .\"\r\nAt dinner a recorded message accuses each of them in turn of having a guilty secret, and by the end of the night one of the guests is dead.\r\n\"Eight . . .\"\r\nStranded by a violent storm, and haunted by a nursery rhyme counting down one by one . . . as one by one . . . they begin to die.\r\n\"Seven . . .\"\r\nWhich among them is the killer and will any of them survive?', 'And_Then_There_Were_None.jpg'),
(5, 'Murder on the Orient Express', 'Agatha Christie', 'Crime', '1935', '8', 'Just after midnight, a snowdrift stops the Orient Express in its tracks. The luxurious train is surprisingly full for the time of the year, but by the morning it is one passenger fewer. An American tycoon lies dead in his compartment, stabbed a dozen times, his door locked from the inside.\r\n\r\nIsolated and with a killer in their midst, detective Hercule Poirot must identify the murderer – in case he or she decides to strike again.', 'Murder_on_the_Orient_Express.png'),
(6, 'The Little Prince', 'Antoine de Saint-Exupery ', 'Fable', '1943', '1', 'Moral allegory and spiritual autobiography, The Little Prince is the most translated book in the French language. With a timeless charm it tells the story of a little boy who leaves the safety of his own tiny planet to travel the universe, learning the vagaries of adult behaviour through a series of extraordinary encounters. His personal odyssey culminates in a voyage to Earth and further adventures.', 'The_Little_Prince.jpg'),
(7, 'Gomorra. Viaggio nell\'impero economico e nel sogno di dominio della camorra', 'Roberto Saviano', 'Inquiry', '2006', '20', 'A groundbreaking, unprecedented bestseller in Italy, Roberto Saviano\'s insider account traces the decline of the city of Naples under the rule of the Camorra, an organized crime network more powerful and violent than the Mafia. The Camorra is an elaborate, international system dealing in drugs, high fashion, construction, and toxic waste, and its influence has entirely transformed life in Campania, the province surrounding Naples.\r\n\r\nSince seeing his first murder victim, at thirteen, Roberto Saviano has watched the changes in his home city. For Gomorrah, he disappeared into the Camorra and witnessed up close the drug cartel\'s audacious, sophisticated, and far-reaching corruption that has paralyzed his home city and introduced the world to a new breed of organized crime.', 'Gomorra.jpg'),
(8, 'Don Quixote', 'Miguel de Cervantes', 'Novel', '1605', '9', 'Widely regarded as one of the funniest and most tragic books ever written, Don Quixote chronicles the adventures of the self-created knight-errant Don Quixote of La Mancha and his faithful squire, Sancho Panza, as they travel through sixteenth-century Spain.', 'Don_Quixote.jpg'),
(9, 'A Game of Thrones', 'George R. R. Martin ', 'Epic Fantasy', '1996', '8', 'Winter is coming. Such is the stern motto of House Stark, the northernmost of the fiefdoms that owe allegiance to King Robert Baratheon in far-off King’s Landing. There Eddard Stark of Winterfell rules in Robert’s name. There his family dwells in peace and comfort: his proud wife, Catelyn; his sons Robb, Brandon, and Rickon; his daughters Sansa and Arya; and his bastard son, Jon Snow. Far to the north, behind the towering Wall, lie savage Wildings and worse—unnatural things relegated to myth during the centuries-long summer, but proving all too real and all too deadly in the turning of the season.', 'A_Game_Of_Thrones.jpg');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
