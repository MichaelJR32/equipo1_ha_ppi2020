-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: bnbibuckuaz4sr9y0biy-mysql.services.clever-cloud.com:3306
-- Generation Time: Nov 10, 2020 at 12:24 AM
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
-- Database: `bnbibuckuaz4sr9y0biy`
--

-- --------------------------------------------------------

--
-- Table structure for table `certificacion`
--

CREATE TABLE `certificacion` (
  `id` int(5) NOT NULL,
  `progreso` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `clases`
--

CREATE TABLE `clases` (
  `id` varchar(10) NOT NULL,
  `señales de transito` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `estudiantes`
--

CREATE TABLE `estudiantes` (
  `id` int(5) NOT NULL,
  `nombre` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `documento` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `contrasena` varchar(80) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `correo` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci ROW_FORMAT=COMPACT;

--
-- Dumping data for table `estudiantes`
--

INSERT INTO `estudiantes` (`id`, `nombre`, `documento`, `contrasena`, `correo`) VALUES
(1, 'Clarie', '12356788', '827ccb0eea8a706c4c34a16891f84e7b', 'chabbin3@clickbank.net'),
(2, 'Grace', '14758912', '099ebea48ea9666a7da2177267983138', 'gorton4@alibaba.com'),
(3, 'Corny', '23478931', '827ccb0eea8a706c4c34a16891f84e7b', 'cguyot1@studiopress.com'),
(4, 'Benson', '56234913', '827ccb0eea8a706c4c34a16891f84e7b', 'bstickels2@vimeo.com');

-- --------------------------------------------------------

--
-- Table structure for table `modulos`
--

CREATE TABLE `modulos` (
  `id` varchar(10) NOT NULL,
  `señales reglamentarias` varchar(50) NOT NULL,
  `señales preventivas` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=COMPACT;

-- --------------------------------------------------------

--
-- Table structure for table `temas`
--

CREATE TABLE `temas` (
  `id` varchar(10) NOT NULL,
  `texto_señales` varchar(50) NOT NULL,
  `examen` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `videos`
--

CREATE TABLE `videos` (
  `id` varchar(10) NOT NULL,
  `url` varchar(50) NOT NULL,
  `nombre` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

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
  ADD PRIMARY KEY (`id`) USING BTREE,
  ADD UNIQUE KEY `uq_documento` (`nombre`) USING BTREE;

--
-- Indexes for table `modulos`
--
ALTER TABLE `modulos`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `temas`
--
ALTER TABLE `temas`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `videos`
--
ALTER TABLE `videos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `estudiantes`
--
ALTER TABLE `estudiantes`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `certificacion`
--
ALTER TABLE `certificacion`
  ADD CONSTRAINT `fk_certificacion_estudiantes` FOREIGN KEY (`id`) REFERENCES `estudiantes` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Constraints for table `clases`
--
ALTER TABLE `clases`
  ADD CONSTRAINT `fk_videos_clases` FOREIGN KEY (`id`) REFERENCES `videos` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Constraints for table `temas`
--
ALTER TABLE `temas`
  ADD CONSTRAINT `fk_señales de transito_temas` FOREIGN KEY (`id`) REFERENCES `modulos` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
