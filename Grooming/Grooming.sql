-- phpMyAdmin SQL Dump
-- version 4.3.8
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Mar 25, 2018 at 09:57 PM
-- Server version: 5.5.51-38.2
-- PHP Version: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `team3_pet_shop`
--

-- --------------------------------------------------------

--
-- Table structure for table `Grooming`
--

CREATE TABLE IF NOT EXISTS `Grooming` (
  `GroomingID` int(11) NOT NULL,
  `FirstName` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `LastName` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `Address` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `City` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `State` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `Zip` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `PhoneNumber` varchar(15) COLLATE utf8_unicode_ci NOT NULL,
  `Email` varchar(150) COLLATE utf8_unicode_ci DEFAULT NULL,
  `PetType` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `Breed` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `PetName` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `NeuterOrSpayed` tinyint(1) DEFAULT NULL,
  `PetBirthday` datetime DEFAULT NULL
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `Grooming`
--

INSERT INTO `Grooming` (`GroomingID`, `FirstName`, `LastName`, `Address`, `City`, `State`, `Zip`, `PhoneNumber`, `Email`, `PetType`, `Breed`, `PetName`, `NeuterOrSpayed`, `PetBirthday`) VALUES
(1, 'admin', 'jones', '1234 main street ', 'anywhere', 'ca', '12345', '555-555-1234', NULL, '', NULL, '', NULL, NULL),
(2, 'JAMES', 'JOHNSON', '2345 DISNEY WAY', 'DISNEY', 'CA', '12209', '213-567-9876', 'JOHN123@DISNEY.COM', 'DOG', 'YORKIE', 'BLACKIE', 0, '2017-10-01 00:00:00'),
(3, 'JAMES', 'JOHNSON', '2345 DISNEY WAY', 'DISNEY', 'CA', '12209', '213-567-9876', 'JOHN123@DISNEY.COM', 'DOG', 'YORKIE', 'BLACKIE', 0, '2017-10-01 00:00:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Grooming`
--
ALTER TABLE `Grooming`
  ADD PRIMARY KEY (`GroomingID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Grooming`
--
ALTER TABLE `Grooming`
  MODIFY `GroomingID` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=4;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
