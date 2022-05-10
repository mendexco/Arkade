CREATE DATABASE ARKADE;
USE ARKADE;

CREATE TABLE Player (
idPlayer INT PRIMARY KEY AUTO_INCREMENT,
nomePlayer VARCHAR(30),
emailPlayer VARCHAR(60),
password VARCHAR(30),
arkScore INT,
register TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Characters (
idChar INT PRIMARY KEY AUTO_INCREMENT,
nameChar VARCHAR(20),
price INT,
life INT,
attack INT,
magicName1 VARCHAR(25),
magicDmg1 INT,
magicName2 VARCHAR(25),
magicDmg2 INT,
magicName3 VARCHAR(25),
magicDmg3 INT,
physical_resistance INT,
magical_resistance INT,
width INT,
height INT,
special INT
);

CREATE TABLE Items (
idItem INT AUTO_INCREMENT,
fkPlayer INT,
FOREIGN KEY (fkPlayer) REFERENCES Player(idPlayer),
fkChar INT,
FOREIGN KEY (fkChar) REFERENCES Characters(idChar),
PRIMARY KEY (idItem, fkPlayer)
);

-- INDIVIDUAL SELECTS
SELECT * FROM Player;
SELECT * FROM Characters;
SELECT * FROM Items;

SELECT idPlayer, nomePlayer, idChar, nameChar FROM Player 
	JOIN Items ON idPlayer = fkPlayer
		JOIN Characters ON idChar = fkChar;



-- PLAYER INSERTS
INSERT INTO Player VALUES
(NULL, 'Vitor', 'vitormendesco@gmail.com', '123456', 0, DEFAULT);

-- ITEMS INSERTS
INSERT INTO Items VALUES
(NULL, 1, 1),
(NULL, 1, 2);
update characters set magicName2 = 'BURST BUFFALO' where idChar = 5;
-- CHARACTERS INSERTS
truncate characters;
INSERT INTO Characters VALUES
(NULL, 'Ryu', 1800, 100, 22, 'SHORYUKEN', 17, 'TATSUMAKI', 20, 'HADOKEN EX', 37, 35, 30, 17, 52, 3920),
(NULL, 'Ken', 1800, 98, 24, 'TATSUMAKI', 16, 'HADOKEN', 20, 'SHORYUKEN EX', 32, 32, 21, 17, 52, 1620),
(NULL, 'Sagat', 2800, 95, 22, 'TIGER SHOT', 12, 'TIGER KNEE', 18, 'TIGER UPPERCUT', 28, 40, 15, 20, 64, 3600),
(NULL, 'Akuma', 5600, 75, 30, 'GOHADOKEN EX', 20, 'ASHURA SENKU', 32, 'KURETSUHA', 60, 11, 4, 17, 54, 5390),
(NULL, 'Balrog', 4700, 110, 32, 'SCREW SMASH', 12, 'BURSTING BUFFALO', 16, 'GIGATON BLOW', 22, 68, 19, 18, 57, 4960),
(NULL, 'Chun-Li', 4700, 125, 27, 'KIKOKEN', 28, 'HYAKURETSUKYAKU', 30, 'HOYOKUSEN', 38, 16, 47, 20, 46, 5160),
(NULL, 'Dhalsim', 3500, 122, 13, 'YOGA FIRE', 21, 'YOGA FLAME', 32, 'YOGA SUNBURST', 43, 8, 52, 20, 55, 2160),
(NULL, 'M.Bison', 5600, 135, 22, 'PSYCHO BLAST', 16, 'DEVIL REVERSE', 24, 'PSYCHO CRUSHER ULTIMATE', 50, 42, 38, 26, 68, 5900),
(NULL, 'Guile', 2800, 112, 21, 'SONIC BOOM EX', 24, 'SOMERSAULT KICK', 19, 'SONIC TEMPEST', 34, 28, 24, 18, 52, 4280),
(NULL, 'Vega', 3500, 91, 18, 'FLYING BARCELONA', 8, 'CRIMSON TERROR', 26, 'BLOODY RAIN', 39, 17, 17, 19, 58, 1800);