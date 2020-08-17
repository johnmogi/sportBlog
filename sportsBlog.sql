-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Aug 17, 2020 at 03:20 PM
-- Server version: 10.4.13-MariaDB
-- PHP Version: 7.4.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sportsBlog`
--
CREATE DATABASE IF NOT EXISTS `sportsBlog` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `sportsBlog`;

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `commentID` int(10) NOT NULL,
  `comment` varchar(200) NOT NULL,
  `gameID` int(10) NOT NULL,
  `commentTime` datetime(6) NOT NULL,
  `tags` varchar(75) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`commentID`, `comment`, `gameID`, `commentTime`, `tags`) VALUES
(1, 'best game of the century, tremendous', 1, '2020-08-01 12:48:30.000000', '1');

-- --------------------------------------------------------

--
-- Table structure for table `games`
--

CREATE TABLE `games` (
  `gameID` int(10) NOT NULL,
  `teamA` varchar(25) NOT NULL,
  `teamB` varchar(25) NOT NULL,
  `teamAScore` int(6) NOT NULL,
  `teamBScore` int(6) NOT NULL,
  `gameDate` datetime(6) NOT NULL,
  `category` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `games`
--

INSERT INTO `games` (`gameID`, `teamA`, `teamB`, `teamAScore`, `teamBScore`, `gameDate`, `category`) VALUES
(1, 'Maccabi Haifa', 'Hapoel TLV', 25, 45, '2020-08-01 12:32:09.000000', 'Football'),
(2, 'Maccabi Tel-Aviv', 'Hapoel TLV', 45, 75, '2020-08-02 00:00:00.000000', 'Football'),
(3, 'Hapoel Jerusalem', 'Hapoel TLV', 10, 42, '2020-08-03 00:00:00.000000', 'Football'),
(4, 'Hapoel Jerusalem', 'Maccabi Beer- sheba', 17, 52, '2020-08-04 00:00:00.000000', 'basketball'),
(5, 'Maccabi Tel-Aviv', 'Maccabi Beer- sheba', 85, 75, '2020-08-05 00:00:00.000000', 'basketball'),
(6, 'Maccabi Haifa', 'Maccabi Beer- sheba', 98, 65, '2020-08-06 00:00:00.000000', 'basketball'),
(7, 'Maccabi Dardasim', 'Hapoel katkatim', 0, 0, '2020-08-15 00:00:00.000000', 'basketball'),
(8, 'Maccabi Dardasim', 'Hapoel katkatim', 0, 0, '2020-08-15 00:00:00.000000', 'fooball'),
(9, 'Hapoel Dardasim', 'Maccabi katkatim', 0, 0, '2020-08-15 00:00:00.000000', 'dwarf-throwing');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`commentID`),
  ADD KEY `gameID` (`gameID`);

--
-- Indexes for table `games`
--
ALTER TABLE `games`
  ADD PRIMARY KEY (`gameID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `commentID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `games`
--
ALTER TABLE `games`
  MODIFY `gameID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `comments_ibfk_1` FOREIGN KEY (`gameID`) REFERENCES `games` (`gameID`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
