-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: classmysql.engr.oregonstate.edu:3306
-- Generation Time: Apr 05, 2019 at 09:50 AM
-- Server version: 10.3.13-MariaDB-log
-- PHP Version: 7.0.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `persist_cs340_schutfoj`
--

-- --------------------------------------------------------

--
-- Table structure for table `Catalog`
--

CREATE TABLE `Catalog` (
  `sid` int(11) NOT NULL,
  `pid` int(11) NOT NULL,
  `price` decimal(5,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Catalog`
--

INSERT INTO `Catalog` (`sid`, `pid`, `price`) VALUES
(11, 1, '10.55'),
(11, 3, '5.50'),
(22, 5, '4.80'),
(22, 7, '4.55'),
(33, 5, '3.75');

-- --------------------------------------------------------

--
-- Table structure for table `Parts`
--

CREATE TABLE `Parts` (
  `pid` int(11) NOT NULL,
  `pname` varchar(20) NOT NULL,
  `color` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Parts`
--

INSERT INTO `Parts` (`pid`, `pname`, `color`) VALUES
(1, 'widget', 'white'),
(2, 'gasket', 'blue'),
(3, 'bolt', 'black'),
(5, 'gasket', 'green'),
(6, 'handle', 'black'),
(7, 'gasket', 'black'),
(9, 'nail', 'pink');

-- --------------------------------------------------------


--
-- Indexes for table `Catalog`
--
ALTER TABLE `Catalog`
  ADD PRIMARY KEY (`sid`,`pid`),
  ADD KEY `pid` (`pid`);
--
-- Indexes for table `Parts`
--
ALTER TABLE `Parts`
  ADD PRIMARY KEY (`pid`);
