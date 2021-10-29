-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         10.6.4-MariaDB - mariadb.org binary distribution
-- SO del servidor:              Win64
-- HeidiSQL Versión:             11.3.0.6295
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Volcando estructura de base de datos para personas
CREATE DATABASE IF NOT EXISTS `personas` /*!40100 DEFAULT CHARACTER SET utf8mb3 */;
USE `personas`;

-- Volcando estructura para tabla personas.personas
CREATE TABLE IF NOT EXISTS `personas` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `nombres` char(80) NOT NULL,
  `apellidos` char(80) NOT NULL,
  `numero_identificacion` bigint(20) unsigned NOT NULL,
  `fecha_nacimiento` date DEFAULT NULL,
  `edad` int(10) unsigned DEFAULT 0,
  `salario` decimal(12,2) DEFAULT 500000.00,
  `id_tipo_identificacion` bigint(20) unsigned zerofill NOT NULL,
  `id_profesion` bigint(20) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_tipo_identificacion` (`id_tipo_identificacion`),
  KEY `id_profesion` (`id_profesion`),
  CONSTRAINT `personas_ibfk_1` FOREIGN KEY (`id_tipo_identificacion`) REFERENCES `tipo_identificacion` (`id`),
  CONSTRAINT `personas_ibfk_2` FOREIGN KEY (`id_profesion`) REFERENCES `profesiones` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- Volcando datos para la tabla personas.personas: ~11 rows (aproximadamente)
/*!40000 ALTER TABLE `personas` DISABLE KEYS */;
/*!40000 ALTER TABLE `personas` ENABLE KEYS */;

-- Volcando estructura para tabla personas.profesiones
CREATE TABLE IF NOT EXISTS `profesiones` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` char(150) NOT NULL,
  `descripcion` char(200) DEFAULT 'SIN DESCRIPCIÓN',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3;

-- Volcando datos para la tabla personas.profesiones: ~4 rows (aproximadamente)
/*!40000 ALTER TABLE `profesiones` DISABLE KEYS */;
INSERT IGNORE INTO `profesiones` (`id`, `nombre`, `descripcion`) VALUES
	(1, 'ABOGADO', 'ABOGADO'),
	(2, 'MEDICO GENERAL', 'MEDICO GENERAL'),
	(3, 'PSICOLOGO', 'PSICOLOGO'),
	(4, 'INGENIERO', 'SIN DESCRIPCIÓN');
/*!40000 ALTER TABLE `profesiones` ENABLE KEYS */;

-- Volcando estructura para tabla personas.tipo_identificacion
CREATE TABLE IF NOT EXISTS `tipo_identificacion` (
  `id` bigint(20) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `tipo_identificacion` char(2) NOT NULL,
  `descripcion` char(200) DEFAULT 'SIN DESCRIPCIÓN',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3;

-- Volcando datos para la tabla personas.tipo_identificacion: ~5 rows (aproximadamente)
/*!40000 ALTER TABLE `tipo_identificacion` DISABLE KEYS */;
INSERT IGNORE INTO `tipo_identificacion` (`id`, `tipo_identificacion`, `descripcion`) VALUES
	(00000000000000000001, 'CC', 'CÉDULA DE CIUDADANÍA'),
	(00000000000000000002, 'TI', 'TARJETA DE IDENTIDAD'),
	(00000000000000000003, 'RC', 'REGISTRO CIVIL'),
	(00000000000000000004, 'PP', 'SIN DESCRIPCIÓN'),
	(00000000000000000005, 'CE', 'SIN DESCRIPCIÓN');
/*!40000 ALTER TABLE `tipo_identificacion` ENABLE KEYS */;

-- Volcando estructura para tabla personas.usuarios
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `usuario` char(50) NOT NULL,
  `contrasena` char(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- Volcando datos para la tabla personas.usuarios: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
