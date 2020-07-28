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

CREATE TABLE Logs
(
	id int NOT NULL auto_increment,
	car_VIN varchar(40) NOT NULL,
    Mileage varchar(40) NOT NULL,
    serviceType_Option varchar(40) NOT NULL,
    notes varchar(100) NOT NULL,
    carpart_Used varchar(100) NOT NULL,
    warranty_info varchar(150) NOT NULL,
    DATE_FORMAT() varchar(40) NOT NULL,
    cost DECIMAL(10, 2) NOT NULL,
    PRIMARY KEY (id)
);