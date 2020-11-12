-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: bnbibuckuaz4sr9y0biy-mysql.services.clever-cloud.com:3306
-- Generation Time: Nov 12, 2020 at 02:55 AM
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

-- --------------------------------------------------------

--
-- Table structure for table `estudiantes-certificacion`
--

CREATE TABLE `estudiantes-certificacion` (
  `id_estudiantes_certificacion` int(5) NOT NULL,
  `id_estudiantes` int(5) NOT NULL,
  `id_certificacion` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `modulo-clases`
--

CREATE TABLE `modulo-clases` (
  `id_mod_clases` int(5) NOT NULL,
  `id_modulo` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `id_clases` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `modulos`
--

CREATE TABLE `modulos` (
  `id` int(5) NOT NULL,
  `señales reglamentarias` varchar(50) NOT NULL,
  `señales preventivas` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=COMPACT;

-- --------------------------------------------------------

--
-- Table structure for table `temas`
--

CREATE TABLE `temas` (
  `id` int(5) NOT NULL,
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
  ADD UNIQUE KEY `id_certificacion` (`id`) USING BTREE;

--
-- Indexes for table `clases`
--
ALTER TABLE `clases`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- Indexes for table `estudiantes`
--
ALTER TABLE `estudiantes`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- Indexes for table `estudiantes-certificacion`
--
ALTER TABLE `estudiantes-certificacion`
  ADD PRIMARY KEY (`id_estudiantes_certificacion`),
  ADD UNIQUE KEY `id_certificacion` (`id_certificacion`),
  ADD UNIQUE KEY `id_estudiantes` (`id_estudiantes`);

--
-- Indexes for table `modulo-clases`
--
ALTER TABLE `modulo-clases`
  ADD PRIMARY KEY (`id_mod_clases`) USING BTREE,
  ADD UNIQUE KEY `id_clases` (`id_clases`),
  ADD UNIQUE KEY `id_modulo` (`id_modulo`,`id_clases`) USING BTREE;

--
-- Indexes for table `modulos`
--
ALTER TABLE `modulos`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `temas`
--
ALTER TABLE `temas`
  ADD UNIQUE KEY `id_temas` (`id`) USING BTREE;

--
-- Indexes for table `videos`
--
ALTER TABLE `videos`
  ADD PRIMARY KEY (`id`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `certificacion`
--
ALTER TABLE `certificacion`
  ADD CONSTRAINT `fk_estudiantes-certificacion_certificacion` FOREIGN KEY (`id`) REFERENCES `estudiantes-certificacion` (`id_certificacion`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `fk_estudiantes_certificaion` FOREIGN KEY (`id`) REFERENCES `estudiantes` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Constraints for table `clases`
--
ALTER TABLE `clases`
  ADD CONSTRAINT `fk_modulo-clases_clases` FOREIGN KEY (`id`) REFERENCES `modulo-clases` (`id_clases`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `fk_videos_clases` FOREIGN KEY (`id`) REFERENCES `videos` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Constraints for table `estudiantes`
--
ALTER TABLE `estudiantes`
  ADD CONSTRAINT `fk_estudiantes-certificacion_estudiantes` FOREIGN KEY (`id`) REFERENCES `estudiantes-certificacion` (`id_estudiantes`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Constraints for table `estudiantes-certificacion`
--
ALTER TABLE `estudiantes-certificacion`
  ADD CONSTRAINT `fk_modulos_estudiantes-certificacion` FOREIGN KEY (`id_estudiantes_certificacion`) REFERENCES `modulos` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Constraints for table `modulo-clases`
--
ALTER TABLE `modulo-clases`
  ADD CONSTRAINT `fk_modulos_modulos-clases` FOREIGN KEY (`id_mod_clases`) REFERENCES `modulos` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Constraints for table `modulos`
--
ALTER TABLE `modulos`
  ADD CONSTRAINT `fk_temas_modulos` FOREIGN KEY (`id`) REFERENCES `temas` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Constraints for table `videos`
--
ALTER TABLE `videos`
  ADD CONSTRAINT `fk_modulo-clases_videos` FOREIGN KEY (`id`) REFERENCES `modulo-clases` (`id_modulo`) ON DELETE RESTRICT ON UPDATE RESTRICT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
