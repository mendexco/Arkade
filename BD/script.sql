CREATE DATABASE ARKADE;
USE ARKADE;

CREATE TABLE Player (
idPlayer INT PRIMARY KEY AUTO_INCREMENT,
nomePlayer VARCHAR(30),
emailPlayer VARCHAR(60),
password VARCHAR(30),
arkScore INT,
cadastro TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Characters (
idChar INT PRIMARY KEY AUTO_INCREMENT,
nameChar VARCHAR(20),
price INT,
life INT,
attack INT,
magic1 INT,
magic2 INT,
magic3 INT,
physical_resistance INT,
magical_resistance INT,
width INT,
maxWidth INT,
height INT,
speed INT
);

CREATE TABLE Items (
idItem INT AUTO_INCREMENT,
fkPlayer INT,
FOREIGN KEY (fkPlayer) REFERENCES Player(idPlayer),
fkChar INT,
FOREIGN KEY (fkChar) REFERENCES Characters(idChar),
PRIMARY KEY (idItem, fkPlayer)
);