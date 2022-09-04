-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema parktrackerdb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `parktrackerdb` ;

-- -----------------------------------------------------
-- Schema parktrackerdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `parktrackerdb` DEFAULT CHARACTER SET utf8 ;
USE `parktrackerdb` ;

-- -----------------------------------------------------
-- Table `park`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `park` ;

CREATE TABLE IF NOT EXISTS `park` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `description` VARCHAR(3000) NOT NULL,
  `state` VARCHAR(45) NOT NULL,
  `street` VARCHAR(45) NOT NULL,
  `zip_code` INT NOT NULL,
  `city` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS parkuser@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'parkuser'@'localhost' IDENTIFIED BY 'parkuser';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'parkuser'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `park`
-- -----------------------------------------------------
START TRANSACTION;
USE `parktrackerdb`;
INSERT INTO `park` (`id`, `name`, `description`, `state`, `street`, `zip_code`, `city`) VALUES (1, 'Sandy Hook', 'Several beaches overlooking the atlantic ovcean and raratin bay', 'New Jersey', '26 Hudson Rd', 07732, 'Highlands');
INSERT INTO `park` (`id`, `name`, `description`, `state`, `street`, `zip_code`, `city`) VALUES (2, 'Gand Canyon', 'A deep ravine in the Arizona desert that has the Colorado river flowing through it', 'Arizona', '20 South Entrance Rd', 86023, 'Grand Canyon');
INSERT INTO `park` (`id`, `name`, `description`, `state`, `street`, `zip_code`, `city`) VALUES (3, 'Zion National Park\nZion', 'A Narrow Slot canyon with unique plants and wild life, seen under a briliant blue sky', 'Utah', '1 Zion Park Blvd', 84767, 'Springdale');
INSERT INTO `park` (`id`, `name`, `description`, `state`, `street`, `zip_code`, `city`) VALUES (4, 'Mount Rushmore', 'See the faces of some of the United States most revered presidents carved into the side of a mountain', 'South Dakota', '13000 Highway 244\n', 57751, 'Keystone');
INSERT INTO `park` (`id`, `name`, `description`, `state`, `street`, `zip_code`, `city`) VALUES (5, 'Redwood', 'The majestic redwood forest features the mighty redwood tree that live for centuries and grow as tall as skyscapers', 'California', '1111 Second Street\n', 95531, 'Crescent City');

COMMIT;

