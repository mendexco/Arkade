CREATE DATABASE ARKADE;
USE ARKADE;

CREATE TABLE Player (
idPlayer INT PRIMARY KEY AUTO_INCREMENT,
namePlayer VARCHAR(30),
emailPlayer VARCHAR(60),
password VARCHAR(30),
arkScore INT DEFAULT 0,
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
magical_resistance INT,
fkBasic INT,
FOREIGN KEY (fkBasic) REFERENCES BasicMetrics(idBasic),
fkAdvanced INT,
FOREIGN KEY (fkAdvanced) REFERENCES AdvancedMetrics(idAdvanced)
);

CREATE TABLE BasicMetrics (
idMetric INT PRIMARY KEY AUTO_INCREMENT,
width INT,
height INT,
top INT,
side INT,
entryWidth INT,
entryHeight INT,
entryTop INT,
entrySide INT,
defendWidth INT,
defendHeight INT,
defendTop INT,
defendSide INT,
loseWidth INT,
loseHeight INT,
loseTop INT,
loseSide INT
);

CREATE TABLE AdvancedMetrics (
idAdvanced INT PRIMARY KEY AUTO_INCREMENT,
atkSpeed INT,	
atkWidth INT,
atkHeight INT,
atkTop INT,
atkSide INT,
sp1Speed INT,
sp1Width INT,
sp1Height INT,
sp1Top INT,
sp1Side INT,
sp2Speed INT,
sp2Width INT,
sp2Height INT,
sp2Top INT,
sp2Side INT,
sp3Speed INT,
sp3Width INT,
sp3Height INT,
sp3Top INT,
sp3Side INT
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
SELECT * FROM BasicMetrics;
SELECT * FROM AdvancedMetrics;
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
		JOIN Characters ON Characters.idChar = Stages.fkChar
			WHERE fkPlayer = 1;
-- set chars to battle --------------------------------------
SELECT * FROM Characters 
	JOIN BasicMetrics ON idBasic = fkBasic
		JOIN AdvancedMetrics ON idAdvanced = fkAdvanced
			WHERE idChar = 1;

-- PLAYER INSERTS
INSERT INTO Player VALUES
(NULL, 'Vitor', 'vitormendesco@gmail.com', '123456', 0, DEFAULT),
(NULL, 'Vinicius', 'viniciuscosta@outlook.com', '123456', 0, DEFAULT);
SELECT * FROM Player;
-- UPDATE Player SET column = '' WHERE idPlayer = X;

-- CHARACTERS INSERTS
INSERT INTO Characters VALUES
(NULL, 'Ryu', 1800, 100, 12, 'SHORYUKEN', 20, 'TATSUMAKI', 30, 'HADOKEN EX', 45, 35, 30, 1, 1),
(NULL, 'Ken', 1800, 96, 14, 'TATSUMAKI', 18, 'HADOKEN', 28, 'SHORYUKEN EX', 45, 32, 21, 2, 2),
(NULL, 'Sagat', 2800, 97, 13, 'TIGER SHOT', 16, 'TIGER KNEE', 22, 'TIGER UPPERCUT', 38, 40, 15, 3, 3),
(NULL, 'Akuma', 5600, 75, 18, 'GOHADOKEN EX', 24, 'ASHURA SENKU', 32, 'KURETSUHA', 55, 11, 4, 4, 4),
(NULL, 'Balrog', 4700, 110, 12, 'SCREW SMASH', 20, 'BURSTING BUFFALO', 30, 'GIGATON BLOW', 40, 68, 19, 5, 5),
(NULL, 'Chun-Li', 4700, 130, 10, 'KIKOKEN', 24, 'HYAKURETSUKYAKU', 31, 'HOYOKUSEN', 47, 16, 47, 6, 6),
(NULL, 'Dhalsim', 3500, 120, 9, 'YOGA FIRE', 25, 'YOGA SUNBURST', 35, 'YOGA FLAME', 50, 8, 52, 7, 7),
(NULL, 'M.Bison', 5600, 135, 18, 'PSYCHO BLAST', 21, 'DEVIL REVERSE', 31, 'PSYCHO CRUSHER ULTIMATE', 54, 42, 38, 8, 8),
(NULL, 'Guile', 2800, 112, 16, 'SONIC BOOM EX', 17, 'SOMERSAULT KICK', 28, 'SONIC TEMPEST', 39, 28, 24, 9, 9),
(NULL, 'Vega', 3500, 90, 13, 'FLYING BARCELONA', 21, 'CRIMSON TERROR', 30, 'BLOODY RAIN', 44, 17, 17, 10, 10);
SELECT * FROM Characters;
-- UPDATE Characters SET column = '' WHERE idChar = X;

-- BASIC METRICS INSERTS
INSERT INTO BasicMetrics VALUES
(NULL, 17, 52, 39, 26, 18, 52, 38, 26, 18, 52, 38, 30, 35, 53, 38, 20),
(NULL, 17, 52, 38, 26, 24, 52, 38, 26, 18, 52, 38, 30, 34, 52, 39, 18),
(NULL, 20, 64, 27, 27, 17, 60, 30, 27, 25, 72, 21, 31, 39, 46, 47, 19),
(NULL, 18, 57, 32, 25, 18, 61, 28, 26, 18, 57, 32, 31, 36, 58, 33, 17),
(NULL, 20, 61, 29, 26, 24, 62, 30, 26, 22, 64, 29, 33, 41, 37, 56, 18),
(NULL, 18, 50, 41, 27, 23, 53, 38, 24, 18, 50, 41, 32, 33, 49, 42, 18),
(NULL, 20, 60, 31, 29, 17, 51, 30, 26, 21, 57, 25, 31, 30, 25, 68, 22),
(NULL, 27, 61, 31, 19, 28, 76, 14, 15, 35, 105, -10, 22, 43, 45, 51, 20),
(NULL, 20, 60, 32, 27, 20, 61, 30, 26, 22, 74, 22, 33, 33, 62, 29, 21),
(NULL, 22, 63, 28, 25, 24, 68, 25, 30, 18, 58, 35, 36, 38, 41, 58, 16);
SELECT * FROM BasicMetrics;
-- UPDATE BasicMetrics SET column = '' WHERE idBasic = X;

-- ADVANCED METRICS INSERTS
INSERT INTO AdvancedMetrics VALUES
(NULL, 640, 26, 52, 39, 39, 1190, 22, 100, -9, 47, 1620, 36, 72, 19, 40, 3540, 41, 57, 34, 26),
(NULL, 1050, 40, 59, 31, 31, 1920, 37, 68, 23, 38, 820, 64, 56, 35, 19, 1620, 50, 127, -32, 32),
(NULL, 1880, 38, 64, 26, 31, 4050, 59, 69, 24, 13, 1280, 43, 84, 9, 30, 3600, 63, 99, -5, 21),
(NULL, 1200, 36, 111, -20, 42, 1350, 29, 94, -1, 23, 1260, 66, 62, 28, 20, 5390, 63, 167, -68, 19),
(NULL, 1480, 42, 60, 30, 28, 1260, 67, 61, 31, 7, 1450, 67, 61, 32, 13, 7100, 80, 81, 11, 8),
(NULL, 2500, 34, 65, 26, 38, 1070, 60, 56, 35, 19, 3180, 88, 132, -33, 32, 5160, 71, 117, -18, 24),
(NULL, 1700, 56, 66, 25, 26, 1600, 56, 68, 26, 22, 2160, 61, 68, 25, 15, 6700, 47, 93, 2 ,30),
(NULL, 1800, 65, 89, 4, 37, 1740, 54, 84, 8, 19, 7000, 78, 144, -42, 8, 5900, 100, 124, -24, 0),
(NULL, 800, 38, 71, 20, 30, 700, 53, 58, 33, 18, 1820, 56, 113, -20, 16, 4280, 78, 64, 28, 9),
(NULL, 1700, 57, 70, 24, 17, 2640, 70, 108, -15, 11, 2100, 43, 97, -3, 35, 2300, 58, 83, 17, 26);
SELECT * FROM AdvancedMetrics;
-- UPDATE AdvancedMetrics SET column = '' WHERE idAdvanced = X;

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
(NULL, 9, 'Air Force Base', 2500),
(NULL, 10, 'Flamenco Tavern', 2500);
SELECT * FROM Stages;
-- UPDATE Stages SET column = '' WHERE idStage = X;

-- ITEMS INSERTS (MAIN)
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
-- ITEMS INSERTS (SECONDARY)
INSERT INTO Items VALUES
(NULL, 2, 1, NULL),
(NULL, 2, NULL, 1);
SELECT * FROM Items;
-- UPDATE Items SET column = '' WHERE idItem = X;