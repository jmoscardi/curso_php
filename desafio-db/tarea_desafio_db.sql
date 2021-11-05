-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 05-11-2021 a las 20:45:20
-- Versión del servidor: 10.4.18-MariaDB
-- Versión de PHP: 7.3.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `tarea_desafio_db`
--
CREATE DATABASE IF NOT EXISTS `tarea_desafio_db` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `tarea_desafio_db`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `departamentos`
--

CREATE TABLE `departamentos` (
  `id` int(2) NOT NULL,
  `nro_departamento` int(2) NOT NULL,
  `nombre_departamento` varchar(40) NOT NULL,
  `presupuesto` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `departamentos`
--

INSERT INTO `departamentos` (`id`, `nro_departamento`, `nombre_departamento`, `presupuesto`) VALUES
(1, 14, 'Informática', 80000),
(2, 15, 'Gestión', 95000),
(3, 16, 'Comunicación', 75000),
(4, 37, 'Desarrollo', 65000),
(5, 77, 'Investigación', 40000);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empleados`
--

CREATE TABLE `empleados` (
  `id` int(11) NOT NULL,
  `dni` int(11) NOT NULL,
  `nombre` varchar(40) NOT NULL,
  `apellido` varchar(40) NOT NULL,
  `id_departamento` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `empleados`
--

INSERT INTO `empleados` (`id`, `dni`, `nombre`, `apellido`, `id_departamento`) VALUES
(1, 31096678, 'Juan', 'Lopez', 14),
(2, 31096675, 'Martin', 'Zarabia', 77),
(4, 34269854, 'Jose', 'velez', 77),
(5, 41369852, 'Paula', 'Madariaga', 77),
(6, 33698521, 'Pedro', 'perez', 14),
(7, 32698547, 'Mariana', 'Lopez', 15),
(8, 42369854, 'Abril', 'Sanchez', 37),
(9, 36125896, 'Marti', 'Julia', 14),
(10, 36985471, 'Omar', 'Diaz', 15),
(11, 32145698, 'Guadalupe', 'Perez', 77),
(12, 32369854, 'Bernardo', 'pantera', 37),
(13, 36125965, 'Lucia', 'Pesaro', 14),
(14, 31236985, 'Maria', 'diamante', 14),
(15, 32698547, 'Carmen', 'barbieri', 16);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `departamentos`
--
ALTER TABLE `departamentos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `nro_departamento` (`nro_departamento`);

--
-- Indices de la tabla `empleados`
--
ALTER TABLE `empleados`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_departamento` (`id_departamento`) USING BTREE;

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `departamentos`
--
ALTER TABLE `departamentos`
  MODIFY `id` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `empleados`
--
ALTER TABLE `empleados`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `empleados`
--
ALTER TABLE `empleados`
  ADD CONSTRAINT `id_empleados` FOREIGN KEY (`id_departamento`) REFERENCES `departamentos` (`nro_departamento`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
