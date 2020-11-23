-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: bp8gug67aqhjrdcjlbdg-mysql.services.clever-cloud.com:3306
-- Generation Time: Nov 23, 2020 at 06:55 PM
-- Server version: 8.0.15-5
-- PHP Version: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bp8gug67aqhjrdcjlbdg`
--

-- --------------------------------------------------------

--
-- Table structure for table `certificacion`
--

CREATE TABLE `certificacion` (
  `id` int(5) NOT NULL,
  `progreso` varchar(50) NOT NULL,
  `id_estudiante` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `certificacion`
--

INSERT INTO `certificacion` (`id`, `progreso`, `id_estudiante`) VALUES
(1, '50', 1),
(2, '60', 2),
(3, '70', 3),
(4, '80', 4),
(5, '100', 5);

-- --------------------------------------------------------

--
-- Table structure for table `clases`
--

CREATE TABLE `clases` (
  `id` int(5) NOT NULL,
  `señales` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `clases`
--

INSERT INTO `clases` (`id`, `señales`) VALUES
(1, 'preventivas'),
(2, 'reglamentarias'),
(3, 'información');

-- --------------------------------------------------------

--
-- Table structure for table `estudiantes`
--

CREATE TABLE `estudiantes` (
  `id` int(5) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `documento` varchar(50) NOT NULL,
  `contraseña` varchar(50) NOT NULL,
  `correo` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `estudiantes`
--

INSERT INTO `estudiantes` (`id`, `nombre`, `documento`, `contraseña`, `correo`) VALUES
(1, 'Clarie', '12345', '827ccb0eea8a706c4c34a16891f84e7b', 'chabbin3@clickbank.net'),
(2, 'Grace', '23456', '099ebea48ea9666a7da2177267983138', 'gorton4@alibaba.com'),
(3, 'Fredra', '34567', '4529ff824728f6c873898efa847db23f', 'fcraddy2@google.de'),
(4, 'Kass', '45678', '1a0ff093e9704ef132d3f80cda08b5ca', 'kcrocket8@yandex.ru'),
(25, 'Carlos', '54324', '95c6345b5fd08f41600f910e97b50b4c', 'carlos23@clickbank.net');

-- --------------------------------------------------------

--
-- Table structure for table `estudiantes_certificaciones`
--

CREATE TABLE `estudiantes_certificaciones` (
  `id_estudiantes_certificacion` int(5) NOT NULL,
  `id_modulo` int(5) NOT NULL,
  `id_certificacion` int(5) NOT NULL,
  `id_estudiante` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `modulos`
--

CREATE TABLE `modulos` (
  `id` int(5) NOT NULL,
  `reglamentarias` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `preventivas` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `modulo_clases`
--

CREATE TABLE `modulo_clases` (
  `id_mod_clases` int(5) NOT NULL,
  `id_modulo` int(5) NOT NULL,
  `id_clases` int(5) NOT NULL,
  `id_video` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `temas`
--

CREATE TABLE `temas` (
  `id` int(5) NOT NULL,
  `info_señales` varchar(100) NOT NULL,
  `examen` varchar(50) NOT NULL,
  `id_modulo` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `videos`
--

CREATE TABLE `videos` (
  `id` int(5) NOT NULL,
  `url` varchar(100) NOT NULL,
  `nombre` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `videos`
--

INSERT INTO `videos` (`id`, `url`, `nombre`) VALUES
(1, 'https://youtu.be/gq-D_nhmHLQ', 'Señales de transito preventivas'),
(2, 'https://youtu.be/6Z-9Aa3XOxg', 'Señales reglamentarias'),
(3, 'https://youtu.be/MG5xVy8qGdM', 'Señales de información');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `certificacion`
--
ALTER TABLE `certificacion`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `clases`
--
ALTER TABLE `clases`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `estudiantes`
--
ALTER TABLE `estudiantes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `estudiantes_certificaciones`
--
ALTER TABLE `estudiantes_certificaciones`
  ADD PRIMARY KEY (`id_estudiantes_certificacion`),
  ADD KEY `id_estudiante` (`id_estudiante`),
  ADD KEY `id_modulo` (`id_modulo`),
  ADD KEY `id_certificacion` (`id_certificacion`);

--
-- Indexes for table `modulos`
--
ALTER TABLE `modulos`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `modulo_clases`
--
ALTER TABLE `modulo_clases`
  ADD PRIMARY KEY (`id_mod_clases`),
  ADD KEY `id_video` (`id_video`),
  ADD KEY `id_clases` (`id_clases`),
  ADD KEY `id_modulo` (`id_modulo`);

--
-- Indexes for table `temas`
--
ALTER TABLE `temas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_modulo` (`id_modulo`);

--
-- Indexes for table `videos`
--
ALTER TABLE `videos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `certificacion`
--
ALTER TABLE `certificacion`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `clases`
--
ALTER TABLE `clases`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `estudiantes`
--
ALTER TABLE `estudiantes`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `estudiantes_certificaciones`
--
ALTER TABLE `estudiantes_certificaciones`
  MODIFY `id_estudiantes_certificacion` int(5) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `modulos`
--
ALTER TABLE `modulos`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `modulo_clases`
--
ALTER TABLE `modulo_clases`
  MODIFY `id_mod_clases` int(5) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `temas`
--
ALTER TABLE `temas`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `videos`
--
ALTER TABLE `videos`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `estudiantes_certificaciones`
--
ALTER TABLE `estudiantes_certificaciones`
  ADD CONSTRAINT `estudiantes_certificaciones_ibfk_1` FOREIGN KEY (`id_estudiante`) REFERENCES `estudiantes` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  ADD CONSTRAINT `estudiantes_certificaciones_ibfk_2` FOREIGN KEY (`id_modulo`) REFERENCES `modulos` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  ADD CONSTRAINT `estudiantes_certificaciones_ibfk_3` FOREIGN KEY (`id_certificacion`) REFERENCES `certificacion` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

--
-- Constraints for table `modulo_clases`
--
ALTER TABLE `modulo_clases`
  ADD CONSTRAINT `modulo_clases_ibfk_1` FOREIGN KEY (`id_video`) REFERENCES `videos` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  ADD CONSTRAINT `modulo_clases_ibfk_2` FOREIGN KEY (`id_clases`) REFERENCES `clases` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  ADD CONSTRAINT `modulo_clases_ibfk_3` FOREIGN KEY (`id_modulo`) REFERENCES `modulos` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

--
-- Constraints for table `temas`
--
ALTER TABLE `temas`
  ADD CONSTRAINT `temas_ibfk_1` FOREIGN KEY (`id_modulo`) REFERENCES `modulos` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
