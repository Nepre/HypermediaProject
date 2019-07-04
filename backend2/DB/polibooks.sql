-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jul 04, 2019 at 12:57 PM
-- Server version: 5.7.26
-- PHP Version: 7.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `polibooks`
--

-- --------------------------------------------------------

--
-- Table structure for table `authors`
--

DROP TABLE IF EXISTS `authors`;
CREATE TABLE IF NOT EXISTS `authors` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Name` text NOT NULL,
  `Biography` text NOT NULL,
  `Nationality` text NOT NULL,
  `Birthday` date DEFAULT NULL,
  `image` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `authors`
--

INSERT INTO `authors` (`id`, `Name`, `Biography`, `Nationality`, `Birthday`, `image`) VALUES
(1, 'J. K. Rowling', 'J.K. Rowling is the author of the record-breaking, multi-award-winning Harry Potter novels. Loved by fans around the world, the series has sold more than 500 million copies, been translated into 80 languages and made into eight blockbuster films.\r\n\r\nShe has written three companion volumes in aid of charity: Quidditch Through the Ages and Fantastic Beasts and Where to Find Them (in aid of Comic Relief and Lumos), and The Tales of Beedle the Bard (in aid of Lumos). \r\n\r\nAs well as receiving an OBE and Companion of Honour for services to children\'s literature, J.K. Rowling has received many awards and honours, including France\'s Légion d\'Honneur and the Hans Christian Andersen Award. ', 'British', '1965-07-31', 'rowling.jfif'),
(2, 'Agatha Christie', 'Agatha Christie was born in 1890 and created the detective Hercule Poirot in her debut novel, The Mysterious Affair at Styles (1920). She achieved wide popularity with The Murder of Roger Ackroyd (1926) and produced a total of eighty novels and short-story collections over six decades.', 'British', '1890-09-15', 'Agatha_Christie.jpg'),
(3, 'Antoine de Saint-Exupéry', 'Antoine Marie Jean-Baptiste Roger, comte de Saint-Exupéry, simply known as Saint-Exupéry (29 June 1900 – 31 July 1944), was a French writer, poet, aristocrat, journalist and pioneering aviator. He became a laureate of several of France\'s highest literary awards and also won the United States National Book Award He is best remembered for his novella The Little Prince (Le Petit Prince) and for his lyrical aviation writings, including Wind, Sand and Stars and Night Flight. \r\nSaint-Exupéry was a successful commercial pilot before World War II, working airmail routes in Europe, Africa and South America. At the outbreak of war, he joined the French Air Force (Armée de l\'Air), flying reconnaissance missions until France\'s armistice with Germany in 1940. After being demobilised from the French Air Force, he travelled to the United States to help persuade its government to enter the war against Nazi Germany. Following a 27-month hiatus in North America, during which he wrote three of his most important works, he joined the Free French Air Force in North Africa, although he was far past the maximum age for such pilots and in declining health. He disappeared over the Mediterranean on a reconnaissance mission in July 1944; he is believed to have died at that time. \r\nPrior to the war, Saint-Exupéry had achieved fame in France as an aviator. His literary works – among them The Little Prince, translated into 300 languages and dialects – posthumously boosted his stature to national hero status in France. He earned further widespread recognition with international translations of his other works. His 1939 philosophical memoir Terre des hommes (titled Wind, Sand and Stars in English) became the name of an international humanitarian group; it was also used to create the central theme of the most successful world\'s fair of the 20th century, Expo 67 in Montreal, Quebec. Saint-Exupéry\'s birthplace, Lyon, has also named its main airport after him.\r\n', 'French', '1900-06-29', 'saint_exupery.jpeg'),
(4, 'Roberto Saviano', 'Roberto Saviano is an Italian journalist, writer and essayist. He is the author of international bestsellers Gomorra and ZeroZeroZero.\r\n\r\nIn his writings, his articles, his books and his television programs, he uses literature and investigative reporting to tell of the economic reality of the territory and business of the Camorra and of organized crime more generally.\r\n\r\nAfter the first death threats of 2006 made by the Casalese clan, a cartel of the Camorra, which he denounced in his exposé and in the piazza of Casal di Principe during a demonstration in defense of legality, Saviano was put under a strict security protocol. Since October 13, 2006, he has lived under police protection.', 'Italian', '1979-09-22', 'Roberto_Saviano.jpg'),
(5, 'Miguel de Cervantes', 'Miguel de Cervantes was born near Madrid in 1547. He became a soldier in 1570 and was badly wounded in the Battle of Lepanto. Captured by the Turks in 1575, Cervantes spent five years in prison. before he was ransomed and returned home. After less successful earlier efforts, Cervantes finally achieved literary success in his later years, publishing the first part of Don Quixote in 1605. He died in 1616.', 'Spanish', '1547-09-29', 'Miguel_de_Cervantes.jpg'),
(6, 'George R. R. Martin', 'George R.R. Martin is the globally bestselling author of many fine novels, including A Game of Thrones, A Clash of Kings, A Storm of Swords, A Feast for Crows, and A Dance with Dragons, which together make up the series A Song of Ice and Fire, on which HBO based the world\'s most-watched television series, Game of Thrones. Other works set in or about Westeros include The World of Ice and Fire, and A Knight of the Seven Kingdoms. His science fiction novella Nightflyers has also been adapted as a television series; and he is the creator of the shared-world Wild Cards universe, working with the finest writers in the genre. He lives in Santa Fe, New Mexico.', 'American', '1948-09-20', 'George_R._R._Martin.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `books`
--

DROP TABLE IF EXISTS `books`;
CREATE TABLE IF NOT EXISTS `books` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` text NOT NULL,
  `author` text NOT NULL,
  `authorID` int(11) NOT NULL,
  `genre` text NOT NULL,
  `theme` text NOT NULL,
  `date` text NOT NULL,
  `price` decimal(10,0) NOT NULL,
  `description` text NOT NULL,
  `image` text NOT NULL,
  `available` tinyint(1) NOT NULL DEFAULT '0',
  `best-seller` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `books`
--

INSERT INTO `books` (`id`, `title`, `author`, `authorID`, `genre`, `theme`, `date`, `price`, `description`, `image`, `available`, `best-seller`) VALUES
(1, 'Harry Potter and the Philosopher\'s Stone', 'J. K. Rowling', 1, 'Fantasy', '', '1997', '10', 'Harry Potter has never even heard of Hogwarts when the letters start dropping on the doormat at number four, Privet Drive. Addressed in green ink on yellowish parchment with a purple seal, they are swiftly confiscated by his grisly aunt and uncle. Then, on Harry\'s eleventh birthday, a great beetle-eyed giant of a man called Rubeus Hagrid bursts in with some astonishing news: Harry Potter is a wizard, and he has a place at Hogwarts School of Witchcraft and Wizardry. An incredible adventure is about to begin!', 'Harry_Potter_and_the_Philosopher\'s_Stone_Book_Cover.jpg', 1, 1),
(2, 'Harry Potter and the Half-Blood Prince', 'J. K. Rowling', 1, 'Fantasy', '', '2005', '10', 'When Dumbledore arrives at Privet Drive one summer night to collect Harry Potter, his wand hand is blackened and shrivelled, but he does not reveal why. Secrets and suspicion are spreading through the wizarding world, and Hogwarts itself is not safe. Harry is convinced that Malfoy bears the Dark Mark: there is a Death Eater amongst them. Harry will need powerful magic and true friends as he explores Voldemort\'s darkest secrets, and Dumbledore prepares him to face his destiny.', 'Harry_Potter_and_the_Half-Blood_Prince.jpg', 1, 0),
(3, 'Harry Potter and the Deathly Hallows', 'J. K. Rowling', 1, 'Fantasy', '', '2007', '10', 'As he climbs into the sidecar of Hagrid\'s motorbike and takes to the skies, leaving Privet Drive for the last time, Harry Potter knows that Lord Voldemort and the Death Eaters are not far behind. The protective charm that has kept Harry safe until now is broken, but he cannot keep hiding. The Dark Lord is breathing fear into everything Harry loves and to stop him Harry will have to find and destroy the remaining Horcruxes. The final battle must begin - Harry must stand and face his enemy ...', 'Harry_Potter_and_the_Deathly_Hallows.jpg', 1, 0),
(4, 'And Then There Were None', 'Agatha Christie', 2, 'Crime', '', '1940', '9', '\"Ten . . .\"\r\nTen strangers are lured to an isolated island mansion off the Devon coast by a mysterious \"U. N. Owen.\"\r\n\"Nine . . .\"\r\nAt dinner a recorded message accuses each of them in turn of having a guilty secret, and by the end of the night one of the guests is dead.\r\n\"Eight . . .\"\r\nStranded by a violent storm, and haunted by a nursery rhyme counting down one by one . . . as one by one . . . they begin to die.\r\n\"Seven . . .\"\r\nWhich among them is the killer and will any of them survive?', 'And_Then_There_Were_None.jpg', 1, 1),
(5, 'Murder on the Orient Express', 'Agatha Christie', 2, 'Crime', '', '1935', '8', 'Just after midnight, a snowdrift stops the Orient Express in its tracks. The luxurious train is surprisingly full for the time of the year, but by the morning it is one passenger fewer. An American tycoon lies dead in his compartment, stabbed a dozen times, his door locked from the inside.\r\n\r\nIsolated and with a killer in their midst, detective Hercule Poirot must identify the murderer – in case he or she decides to strike again.', 'Murder_on_the_Orient_Express.png', 0, 0),
(6, 'The Little Prince', 'Antoine de Saint-Exupery ', 3, 'Fable', '', '1943', '1', 'Moral allegory and spiritual autobiography, The Little Prince is the most translated book in the French language. With a timeless charm it tells the story of a little boy who leaves the safety of his own tiny planet to travel the universe, learning the vagaries of adult behaviour through a series of extraordinary encounters. His personal odyssey culminates in a voyage to Earth and further adventures.', 'The_Little_Prince.jpg', 0, 1),
(7, 'Gomorra. Viaggio nell\'impero economico e nel sogno di dominio della camorra', 'Roberto Saviano', 4, 'Inquiry', '', '2006', '20', 'A groundbreaking, unprecedented bestseller in Italy, Roberto Saviano\'s insider account traces the decline of the city of Naples under the rule of the Camorra, an organized crime network more powerful and violent than the Mafia. The Camorra is an elaborate, international system dealing in drugs, high fashion, construction, and toxic waste, and its influence has entirely transformed life in Campania, the province surrounding Naples.\r\n\r\nSince seeing his first murder victim, at thirteen, Roberto Saviano has watched the changes in his home city. For Gomorrah, he disappeared into the Camorra and witnessed up close the drug cartel\'s audacious, sophisticated, and far-reaching corruption that has paralyzed his home city and introduced the world to a new breed of organized crime.', 'Gomorra.jpg', 1, 0),
(8, 'Don Quixote', 'Miguel de Cervantes', 5, 'Novel', '', '1605', '9', 'Widely regarded as one of the funniest and most tragic books ever written, Don Quixote chronicles the adventures of the self-created knight-errant Don Quixote of La Mancha and his faithful squire, Sancho Panza, as they travel through sixteenth-century Spain.', 'Don_Quixote.jpg', 1, 0),
(9, 'A Game of Thrones', 'George R. R. Martin ', 6, 'Fantasy', '', '1996', '8', 'Winter is coming. Such is the stern motto of House Stark, the northernmost of the fiefdoms that owe allegiance to King Robert Baratheon in far-off King’s Landing. There Eddard Stark of Winterfell rules in Robert’s name. There his family dwells in peace and comfort: his proud wife, Catelyn; his sons Robb, Brandon, and Rickon; his daughters Sansa and Arya; and his bastard son, Jon Snow. Far to the north, behind the towering Wall, lie savage Wildings and worse—unnatural things relegated to myth during the centuries-long summer, but proving all too real and all too deadly in the turning of the season.', 'A_Game_Of_Thrones.jpg', 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `booksnevents`
--

DROP TABLE IF EXISTS `booksnevents`;
CREATE TABLE IF NOT EXISTS `booksnevents` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_book` int(11) NOT NULL,
  `id_event` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

--
-- Dumping data for table `booksnevents`
--

INSERT INTO `booksnevents` (`id`, `id_book`, `id_event`) VALUES
(1, 6, 2),
(2, 1, 1),
(3, 8, 3),
(4, 9, 5);

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
CREATE TABLE IF NOT EXISTS `comments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userID` int(11) NOT NULL,
  `bookID` int(11) NOT NULL,
  `comment` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=23 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`id`, `userID`, `bookID`, `comment`) VALUES
(1, 2, 1, 'Best book series if you ask me. I have read this book over 15 times. JK Rowling\'s writing is better than any other writing. I love Hermione Granger. '),
(2, 3, 1, 'When I started reading harry potter and the philosophers stone I was unable to stop myself by reading and I read it continously  in just one day without getting bored. This is the best book series. I would love to read it again and again.'),
(3, 4, 2, 'The first time I read this book I was a kid and I said to myself this writer is boring, then I had to read a book for a class assignment and I had no other book than this so I had to. After I finish reading I asked myself, why waited this long? It was one of the greatest book I ever read and knew that J.K. Rowling is the greatest writer in the world.'),
(4, 2, 2, 'Such an awesome book! I could honestly read it over and over again! I love the series, but this book must be my favorite!'),
(5, 3, 3, 'This book was awesome you should definetly read it. I love everything about it and the idea of the Hallows was great. The only disappointment is that there is no more books.'),
(6, 4, 3, 'I love this book for some reason when I read it it I get shaky. I\'ve read it at least 7 times for it is the ultimate book! The chapters are always new and exciting bringing on unexpected twists. Characters have great roles and bad turns to good without the simplest knowing. This is the best book ever '),
(8, 2, 4, 'Even though it was written in 1939, as a serialized newspaper story, it feels modern in its moral complexities. Fans of British mysteries, cozy or edgy, won\'t want to miss it.'),
(9, 3, 4, 'And Then There Were None is a fantastic psychological portrait of a group of frightened, confused people turning on one another in the face of fear. I love this book.'),
(10, 4, 5, 'This was my first Agatha Christie novel and it definitely did not disappoint! I was not expecting that ending, which is obviously a good thing in a murder mystery story, but I am proud of myself for picking up on some other clues. I am so impressed by how she was able to weave this intricate of a story in only 200 pages and I can\'t wait to pick up another one of her novels in the future!'),
(11, 2, 5, 'When all the other little girls wanted to be princesses - do you know what I wanted to be? And no, it wasn\'t a vampire, either... it was... HERCULE POIROT\'S SIDEKICK !!!'),
(12, 3, 6, 'The language is complex and it is hard to understand what is going on at times, but the structure of the book is good and would appeal to adults and children.'),
(13, 4, 6, 'I fell in love with the book. I believe that this is an amazing story,very eye-opening. I would recommend it to everyone!'),
(14, 2, 7, 'Roberto Saviano is so brave to bring out this book with exposes the Camorra - long hidden in the shadows of the crumbling high-rises of the poor neighbourhoods north of Naples - and their hydra-like influence on the Italian (and global) economy. Saviano grew up here and is able to talk to the dealers, the corner boys, the counterfeiters, the hitmen, etc and give us an closeup, unfiltered view of the heart of this organisation.'),
(15, 3, 7, 'This book should be taught in schools. The media tend to forget about the camorra in Campania. They only talk about it when there\'s more than 2 deads a day...\r\nThis book is a great tragical testimony of somebody who does not want to forget and wants to shout to everybody what the truth really is.\r\nRecommended to anyone who doesn\'t want to stop to the surface and wants to go deep into the scum of reality.\r\n'),
(16, 4, 8, 'Whatever else Don Quixote may be, I never found it boring. Parts of it were very funny, others had wonderful similarities with Shakespeare, some bits were more serious: it\'s like a mini library in a single volume. Wonderful.'),
(17, 2, 8, 'Although Don Quixote is a rather hefty novel, it moved very quickly for me. One adventure immediately follows another, and there is humour on almost every page. It is undoubtedly my favorite book; although on the surface it is a fun and amusing book, its depiction of Don Quixote and Sancho also delve into the human condition and forces the reader to question what is really important, what it means to be successful in life, and what exactly is morality. Although most of the novel is quite light-hearted, it does end on a rather sad note with the main character\'s death. The novel is often regarded as one of the greatest ever written, and I would highly recommend it to anyone who is willing to tackle a long book.'),
(18, 3, 9, 'This book, and the other books published of the series, are as impressive and amazing piece of literature. The characters in the story are superb. I read these book and absolutely had to recommend them to every book buddy.'),
(19, 4, 9, 'I made it to only slightly more than halfway through book. It is the only novel I can ever remember not finishing.'),
(22, 3, 3, 'This book is really good.');

-- --------------------------------------------------------

--
-- Table structure for table `events`
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
-- Dumping data for table `events`
--

INSERT INTO `events` (`id`, `Name`, `Place`, `Starting_Date`, `End_Date`, `Price`, `Picture`) VALUES
(1, 'Salon du Livre\r\n', 'Paris', '2020-03-20', '2020-03-23', '5', 'salon_livre.jpg'),
(2, 'Salone Internazionale del Libro', 'Torino', '2020-05-14', '2020-05-18', '10', 'Logo_salone_libro.png'),
(3, 'Feria internacional del libro', 'Guadalajara', '2019-12-01', '2019-12-08', '15', 'Guadalajara.png'),
(4, 'Frankfurt Book Fair', 'Frankfurt', '2019-10-16', '2019-10-20', '22', 'Frankfurter_Buchmesse.png'),
(5, 'Queen’s Park Book Festival', 'Throughout Queen’s Park', '2019-06-29', '2019-06-30', '20', 'Queen_s_Park.jfif'),
(6, 'Theakston Old Peculier Crime Writing Festival', 'Old Swan Hotel, Harrogate', '2019-07-18', '2019-07-21', '5', 'Harrogate.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Name` text NOT NULL,
  `Surname` text NOT NULL,
  `Email` varchar(60) NOT NULL,
  `Password` text NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Email` (`Email`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `Name`, `Surname`, `Email`, `Password`) VALUES
(2, 'Francesco', 'Lo Muzio', 'fra.lomuzio@gmail.com', 'Italy'),
(3, 'Eduardo', 'Gómez', 'egm119@alu.ua.es', 'Spain'),
(4, 'Mathieu', 'Verdun--Roscini', 'mathieu.verdun-roscini@imt-atlantique.net', 'France'),
(6, 'Test1', 'Test1', 'test1@gmail.com', 'Test1');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
