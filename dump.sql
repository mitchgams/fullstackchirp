-- MySQL dump 10.13  Distrib 8.0.22, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: chirpr
-- ------------------------------------------------------
-- Server version	5.7.32-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `chirps`
--

DROP TABLE IF EXISTS `chirps`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `chirps` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userid` int(11) NOT NULL,
  `content` text NOT NULL,
  `location` varchar(50) DEFAULT NULL,
  `_created` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `userid` (`userid`),
  CONSTRAINT `chirps_ibfk_1` FOREIGN KEY (`userid`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=138 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chirps`
--

LOCK TABLES `chirps` WRITE;
/*!40000 ALTER TABLE `chirps` DISABLE KEYS */;
INSERT INTO `chirps` VALUES (1,1,'this is contenct','A','2020-12-08 14:39:32'),(7,1,'this is contenct','A','2020-12-08 14:39:59'),(8,1,'this is contenct','A','2020-12-08 14:39:59'),(9,1,'this is contenct','A','2020-12-08 14:39:59'),(10,1,'this is contenct','A','2020-12-08 14:39:59'),(11,1,'the apple is orange','A','2020-12-08 14:39:59'),(12,2,'this is contenct','A','2020-12-08 14:40:28'),(13,2,'this is contenct','A','2020-12-08 14:40:28'),(14,2,'this is contenct','A','2020-12-08 14:40:28'),(15,2,'this is contenct','A','2020-12-08 14:40:28'),(16,2,'this is contenct','A','2020-12-08 14:40:28'),(17,2,'this is contenct','A','2020-12-08 14:40:28'),(18,2,'this is contenct','A','2020-12-08 14:40:28'),(19,2,'this is contenct','A','2020-12-08 14:40:28'),(20,2,'this is contenct','A','2020-12-08 14:40:28'),(21,2,'this is contenct','A','2020-12-08 14:40:28'),(22,3,'this is contenct','A','2020-12-08 14:40:45'),(23,3,'this is contenct','A','2020-12-08 14:40:45'),(24,3,'this is contenct','A','2020-12-08 14:40:45'),(26,3,'this is contenct','A','2020-12-08 14:40:45'),(27,3,'this is contenct','A','2020-12-08 14:40:45'),(28,3,'this is contenct','A','2020-12-08 14:40:45'),(29,3,'this is contenct','A','2020-12-08 14:40:45'),(30,3,'this is contenct','A','2020-12-08 14:40:45'),(31,3,'this is contenct','A','2020-12-08 14:40:45'),(35,4,'this is contenct','A','2020-12-08 14:41:01'),(36,4,'this is contenct','A','2020-12-08 14:41:01'),(37,4,'this is contenct','A','2020-12-08 14:41:01'),(38,4,'this is contenct','A','2020-12-08 14:41:01'),(39,4,'this is contenct','A','2020-12-08 14:41:01'),(41,4,'this is contenct','A','2020-12-08 14:41:01'),(42,5,'this is contenct','A','2020-12-08 14:41:15'),(43,5,'this is contenct','A','2020-12-08 14:41:15'),(44,5,'this is contenct','A','2020-12-08 14:41:15'),(45,5,'this is contenct','A','2020-12-08 14:41:15'),(46,5,'this is contenct','A','2020-12-08 14:41:15'),(47,5,'this is contenct','A','2020-12-08 14:41:15'),(48,5,'this is contenct','A','2020-12-08 14:41:15'),(49,5,'this is contenct','A','2020-12-08 14:41:15'),(50,5,'this is contenct','A','2020-12-08 14:41:15'),(51,5,'this is contenct','A','2020-12-08 14:41:15'),(52,6,'this is contenct','A','2020-12-08 14:41:27'),(53,6,'this is contenct','A','2020-12-08 14:41:27'),(54,6,'this is contenct','A','2020-12-08 14:41:27'),(55,6,'this is contenct','A','2020-12-08 14:41:27'),(56,6,'this is contenct','A','2020-12-08 14:41:27'),(57,6,'this is contenct','A','2020-12-08 14:41:27'),(58,6,'this is contenct','A','2020-12-08 14:41:27'),(59,6,'this is contenct','A','2020-12-08 14:41:27'),(60,6,'this is contenct','A','2020-12-08 14:41:27'),(61,6,'this is contenct','A','2020-12-08 14:41:27'),(62,7,'this is contenct','A','2020-12-08 14:41:40'),(63,7,'this is contenct','A','2020-12-08 14:41:40'),(64,7,'this is contenct','A','2020-12-08 14:41:40'),(65,7,'this is contenct','A','2020-12-08 14:41:40'),(66,7,'this is contenct','A','2020-12-08 14:41:40'),(67,7,'this is contenct','A','2020-12-08 14:41:40'),(68,7,'this is contenct','A','2020-12-08 14:41:40'),(69,7,'this is contenct','A','2020-12-08 14:41:40'),(70,7,'this is contenct','A','2020-12-08 14:41:40'),(71,7,'this is contenct','A','2020-12-08 14:41:40'),(72,8,'this is contenct','A','2020-12-08 14:41:54'),(73,8,'this is contenct','A','2020-12-08 14:41:54'),(74,8,'this is contenct','A','2020-12-08 14:41:54'),(75,8,'this is contenct','A','2020-12-08 14:41:54'),(76,8,'this is contenct','A','2020-12-08 14:41:54'),(77,8,'this is contenct','A','2020-12-08 14:41:54'),(78,8,'this is contenct','A','2020-12-08 14:41:54'),(79,8,'this is contenct','A','2020-12-08 14:41:54'),(80,8,'this is contenct','A','2020-12-08 14:41:54'),(81,8,'this is contenct','A','2020-12-08 14:41:54'),(82,9,'this is contenct','A','2020-12-08 14:42:06'),(83,9,'this is contenct','A','2020-12-08 14:42:06'),(84,9,'this is contenct','A','2020-12-08 14:42:06'),(85,9,'this is contenct','A','2020-12-08 14:42:06'),(86,9,'this is contenct','A','2020-12-08 14:42:06'),(87,9,'this is contenctmkdkdpoopman','A','2020-12-08 14:42:06'),(88,9,'this is contenct','A','2020-12-08 14:42:06'),(89,9,'this is contenct','A','2020-12-08 14:42:06'),(90,9,'this is contenct','A','2020-12-08 14:42:06'),(91,9,'this is contenct','A','2020-12-08 14:42:06'),(98,10,'this is contenctdk apricotdkd chicken soup','A','2020-12-08 14:42:22'),(99,10,'this is contenctchcickld','A','2020-12-08 14:42:22'),(101,10,'this is contenct','A','2020-12-08 14:42:22'),(123,1,'@Bob','A','2020-12-10 02:06:11'),(124,6,'@Bob','A','2020-12-10 02:06:42'),(125,2,'fkfkd sksk @Bob kwke','A','2020-12-10 02:07:35'),(126,6,'@Mitch is cool','A','2020-12-10 10:54:20'),(127,10,'@cosmo is a fairy @terry @fred @cosmo','A','2020-12-10 10:56:48'),(128,6,'@Mitch hello','A','2020-12-10 11:00:09'),(129,9,'@mitch @bob yo yo yo @fred','A','2020-12-10 11:01:11'),(135,1,'@cosmo','A','2020-12-13 11:45:29'),(137,1,'@bob','A','2020-12-13 12:07:38');
/*!40000 ALTER TABLE `chirps` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mentions`
--

DROP TABLE IF EXISTS `mentions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mentions` (
  `userid` int(11) NOT NULL,
  `chirpid` int(11) NOT NULL,
  PRIMARY KEY (`userid`,`chirpid`),
  KEY `chirpid` (`chirpid`),
  CONSTRAINT `mentions_ibfk_1` FOREIGN KEY (`userid`) REFERENCES `users` (`id`),
  CONSTRAINT `mentions_ibfk_2` FOREIGN KEY (`chirpid`) REFERENCES `chirps` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mentions`
--

LOCK TABLES `mentions` WRITE;
/*!40000 ALTER TABLE `mentions` DISABLE KEYS */;
INSERT INTO `mentions` VALUES (2,1),(3,123),(3,124),(3,125),(1,126),(9,127),(1,129),(3,129),(9,135),(3,137);
/*!40000 ALTER TABLE `mentions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `email` varchar(75) NOT NULL,
  `password` text,
  `_created` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Mitch','mitch@gmail.com','password','2020-12-08 14:35:38'),(2,'Carl','carl@gmail.com','password','2020-12-08 14:35:38'),(3,'Bob','bob@gmail.com','password','2020-12-08 14:35:38'),(4,'Greg','greg@gmail.com','password','2020-12-08 14:39:00'),(5,'Dan','dan@gmail.com','password','2020-12-08 14:39:00'),(6,'Jeff','Jeff@gmail.com','password','2020-12-08 14:39:00'),(7,'berry','berry@gmail.com','password','2020-12-08 14:39:00'),(8,'Alan','alan@gmail.com','password','2020-12-08 14:39:00'),(9,'Cosmo','cosmo@gmail.com','password','2020-12-08 14:39:00'),(10,'terry','terry@gmail.com','password','2020-12-08 14:39:00');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-12-13 12:19:39
