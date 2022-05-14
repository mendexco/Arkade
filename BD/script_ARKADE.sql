CREATE DATABASE ARKADE;
USE ARKADE;

CREATE TABLE Player (
idPlayer INT PRIMARY KEY AUTO_INCREMENT,
namePlayer VARCHAR(30),
emailPlayer VARCHAR(60),
password VARCHAR(30),
arkScore INT,
register TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Characters (
idChar INT PRIMARY KEY AUTO_INCREMENT,
nameChar VARCHAR(20),
priceChar INT,
life INT,
attack INT,
magicName1 VARCHAR(25),
magicDmg1 INT,
magicName2 VARCHAR(25),
magicDmg2 INT,
magicName3 VARCHAR(25),
magicDmg3 INT,
physical_resistance INT,
magical_resistance INT
);

CREATE TABLE CharactersMetrics (
idMetric INT PRIMARY KEY AUTO_INCREMENT,
fkChar INT,
FOREIGN KEY (fkChar) REFERENCES Characters(idChar),
width INT,
height INT,
atkSpeed INT,	
atkWidth INT,
atkHeight INT,
sp1Speed INT,
sp1kWidth INT,
sp1Height INT,
sp2Speed INT,
sp2Width INT,
sp2Height INT,
sp3Speed INT,
sp3Width INT,
sp3Height INT,
entrySpeed INT,
entryWidth INT,
entryHeight INT,
loseSpeed INT,
loseWidth INT,
loseHeight INT
);

CREATE TABLE Stages (
idStage INT PRIMARY KEY AUTO_INCREMENT,
fkChar INT,
FOREIGN KEY (fkChar) REFERENCES Characters(idChar),
nameStage VARCHAR(25),
priceStage INT
);

CREATE TABLE Items (
idItem INT AUTO_INCREMENT,
fkPlayer INT,
FOREIGN KEY (fkPlayer) REFERENCES Player(idPlayer),
fkChar INT,
FOREIGN KEY (fkChar) REFERENCES Characters(idChar),
fkStage INT,
FOREIGN KEY (fkStage) REFERENCES Stages(idStage),
PRIMARY KEY (idItem, fkPlayer)
);

-- INDIVIDUAL SELECTS
SELECT * FROM Player;
SELECT * FROM Characters;
SELECT * FROM CharactersMetrics;
SELECT * FROM Stages;
SELECT * FROM Items;

-- list characters acquired by the player -------------------
SELECT idPlayer, namePlayer, idChar, nameChar FROM Player 
	JOIN Items ON idPlayer = fkPlayer
		RIGHT JOIN Characters ON idChar = fkChar
			WHERE idPlayer = 1;
-- list stages acquired by player ---------------------------
SELECT idStage, nameStage, nameChar FROM Items
	JOIN Stages ON Stages.idStage = Items.fkStage
		JOIN Characters ON Characters.idChar = Stages.fkChar;
-- set chars to battle --------------------------------------
SELECT * FROM Characters 
	JOIN CharactersMetrics ON idChar = fkChar
		WHERE idChar = 1;

-- PLAYER INSERTS
INSERT INTO Player VALUES
(NULL, 'Vitor', 'vitormendesco@gmail.com', '123456', 0, DEFAULT),
(NULL, 'Vinicius', 'viniciuscosta@outlook.com', '123456', 0, DEFAULT);

-- CHARACTERS INSERTS
INSERT INTO Characters VALUES
(NULL, 'Ryu', 1800, 100, 22, 'SHORYUKEN', 17, 'TATSUMAKI', 20, 'HADOKEN EX', 37, 35, 30),
(NULL, 'Ken', 1800, 98, 24, 'TATSUMAKI', 16, 'HADOKEN', 20, 'SHORYUKEN EX', 32, 32, 21),
(NULL, 'Sagat', 2800, 95, 22, 'TIGER SHOT', 12, 'TIGER KNEE', 18, 'TIGER UPPERCUT', 28, 40, 15),
(NULL, 'Akuma', 5600, 75, 30, 'GOHADOKEN EX', 20, 'ASHURA SENKU', 32, 'KURETSUHA', 60, 11, 4),
(NULL, 'Balrog', 4700, 110, 32, 'SCREW SMASH', 12, 'BURSTING BUFFALO', 16, 'GIGATON BLOW', 22, 68, 19),
(NULL, 'Chun-Li', 4700, 125, 27, 'KIKOKEN', 28, 'HYAKURETSUKYAKU', 30, 'HOYOKUSEN', 38, 16, 47),
(NULL, 'Dhalsim', 3500, 122, 13, 'YOGA FIRE', 21, 'YOGA FLAME', 32, 'YOGA SUNBURST', 43, 8, 52),
(NULL, 'M.Bison', 5600, 135, 22, 'PSYCHO BLAST', 16, 'DEVIL REVERSE', 24, 'PSYCHO CRUSHER ULTIMATE', 50, 42, 38),
(NULL, 'Guile', 2800, 112, 21, 'SONIC BOOM EX', 24, 'SOMERSAULT KICK', 19, 'SONIC TEMPEST', 34, 28, 24),
(NULL, 'Vega', 3500, 91, 18, 'FLYING BARCELONA', 8, 'CRIMSON TERROR', 26, 'BLOODY RAIN', 39, 17, 17);

-- METRICS INSERTS
INSERT INTO CharactersMetrics VALUES
(NULL, 1, 17, 52, 640, 26, 52, 1190, 20, 100, 1620, 30, 72, 3540, 34, 55, null, null, null, null, null, null),
(NULL, 2, 17, 52, 1050, 33, 58, 1920, 34, 68, 820, 66, 57, 1620, 46, 114, null, null, null, null, null, null);

SELECT * FROM Characters JOIN CharactersMetrics ON idChar = fkChar;

-- STAGES INSERTS
INSERT INTO Stages VALUES
(NULL, 1, 'Suzaku Castle', 2500),
(NULL, 2, 'Battle Harbor', 2500),
(NULL, 3, 'Ala', 2500),
(NULL, 4, 'Ruined Dojo', 2500),
(NULL, 5, 'World Warrior', 2500),
(NULL, 6, 'Taiping Road', 2500),
(NULL, 7, 'Maharaja Palace', 2500),
(NULL, 8, 'Shadaloo Fortress', 2500),
(NULL, 9, 'Air Forece Base', 2500),
(NULL, 10, 'Flamenco Tavern', 2500);


alter table charactersmetrics rename column sp1kWidth to sp1Width;
update stages set nameStage = 'Kings Court' where idStage = 3;
-- ITEMS INSERTS
INSERT INTO Items VALUES
(NULL, 1, 1, 1),
(NULL, 1, 2, 2),
(NULL, 1, 3, 3),
(NULL, 1, 4, 4),
(NULL, 1, 5, 5),
(NULL, 1, 6, 6),
(NULL, 1, 7, 7),
(NULL, 1, 8, 8),
(NULL, 1, 9, 9),
(NULL, 1, 10, 10);

TRUNCATE ITEMS;