CREATE DATABASE carlog_db;
USE carlog_db;

CREATE TABLE cars
(
	id int NOT NULL auto_increment,
	car_make varchar(40) NOT NULL,
    car_model varchar(40) NOT NULL,
    car_Year varchar(40) NOT NULL,
    car_VIN varchar(40) NOT NULL,
    PRIMARY KEY (id)
);