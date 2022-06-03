-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/* para workbench - local - desenvolvimento */
CREATE DATABASE ARKADE;
USE ARKADE;

CREATE TABLE Player (
idPlayer INT PRIMARY KEY AUTO_INCREMENT,
namePlayer VARCHAR(30),
emailPlayer VARCHAR(60),
password VARBINARY(150),
arkScore INT DEFAULT 0,
arkCoin INT DEFAULT 0,
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
FOREIGN KEY (fkAdvanced) REFERENCES AdvancedMetrics(idAdvanced),
charDesc VARCHAR(1000)
);

CREATE TABLE BasicMetrics (
idBasic INT PRIMARY KEY AUTO_INCREMENT,
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

-- SELECTS
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

-- INSERTS
-- PLAYER INSERTS
INSERT INTO Player VALUES
(NULL, 'Vitor', 'vitormendesco@gmail.com', AES_ENCRYPT('123456', 'arkcrypt'), DEFAULT, DEFAULT, DEFAULT),
(NULL, 'Vinicius', 'viniciuscosta@outlook.com', AES_ENCRYPT('123456', 'arkcrypt'), DEFAULT, DEFAULT, DEFAULT);
SELECT * FROM Player;
-- UPDATE Player SET column = '' WHERE idPlayer = X;

-- CHARACTERS INSERTS
INSERT INTO Characters VALUES
(NULL, 'Ryu', 1800, 100, 12, 'SHORYUKEN', 20, 'TATSUMAKI', 30, 'HADOKEN EX', 45, 35, 30, 1, 1, "Ryu is usually a silent, serious individual whose severity is often juxtaposed against the light-hearted, fiery persona of his best friend, Ken. He travels the globe with a stern nature, often appearing to others as boring or detached. In rare occasions, Ryu shows a very bad sense of humor. Ryu's overarching goal in Street Fighter is to become a total master of his fighting style. To this end, Ryu plays the part of the wandering warrior, and takes both his travels and his training very seriously."),
(NULL, 'Ken', 1800, 96, 14, 'TATSUMAKI', 18, 'HADOKEN', 28, 'SHORYUKEN EX', 45, 32, 21, 2, 2, "While Ryu is the serious, nice and stoic of the two, Ken is the complete opposite. He is flashy, unorthodox, and unpredictable. He can also be very egotistical and short tempered at times. But he is actually a good person who tries to help people with problems and very easy going. He never backs down from a fight no matter how difficult it is."),
(NULL, 'Sagat', 2800, 97, 13, 'TIGER SHOT', 16, 'TIGER KNEE', 22, 'TIGER UPPERCUT', 38, 40, 15, 3, 3, "Sagat encompasses a stereotypical 'proud fighter' personality, since he is very powerful, prideful and strong-willed as well as hard working and dedicated in body and spirit to martial arts life. His uncommon physical appearance makes him menacing, hideous and downright unfriendly at first glance."),
(NULL, 'Guile', 2800, 112, 16, 'SONIC BOOM EX', 17, 'SOMERSAULT KICK', 28, 'SONIC TEMPEST', 39, 28, 24, 4, 4, "Guile is a tough man, both physically and mentally, who takes pride in family, and is a loving husband and father to his family. A stoic man at heart, Guile's calm and emotionless exterior actually hides intense feelings, especially his fury after Charlie's death. Although loyal to the Air Force and the United States, Guile is extremely persistent."),
(NULL, 'Dhalsim', 3500, 120, 9, 'YOGA FIRE', 25, 'YOGA SUNBURST', 35, 'YOGA FLAME', 50, 8, 52, 5, 5, "Dhalsim is quite stoic, serious, self-disciplined, humble, and also very stern when needed. Being a pacifist, he will never hurt a person more than necessary, or kill an adversary, even the most evil ones such as M. Bison. His pacifistic beliefs also allow him to be a greatly loving father and husband towards his family."),
(NULL, 'Vega', 3500, 90, 13, 'FLYING BARCELONA', 21, 'CRIMSON TERROR', 30, 'BLOODY RAIN', 44, 17, 17, 6, 6, "Vega is vain, overconfident, and highly convinced of his own abilities, almost to the point of megalomania. He is also incredibly sadistic and takes great pleasure in seeing the ugly murdered, and preferably mutilated."),
(NULL, 'Balrog', 4700, 110, 12, 'SCREW SMASH', 20, 'BURSTING BUFFALO', 30, 'GIGATON BLOW', 40, 68, 19, 7, 7, "Balrog is usually, hot-tempered, arrogant and sadistic. He is a belligerent pugilist who possesses an insatiable urge for money and a vicious, bullying mean streak, often refusing to take responsibility for his actions. Despite being a once great prize boxer, he intentionally cheated in his fights whenever he felt like it, and has even killed one of his opponents."),
(NULL, 'Chun-Li', 4700, 130, 10, 'KIKOKEN', 24, 'HYAKURETSUKYAKU', 31, 'HOYOKUSEN', 47, 16, 47, 8, 8, "Chun-Li is a resourceful and dedicated officer of the law with a strong sense of justice that rivals that of her father, as she strongly believes in protecting the innocent and saving the lives of others. She is a highly disciplined, seasoned, and courageous woman, and is often the voice of reason. As an official of Interpol, she takes her work as a cop with pride (showing pride at what she does when she saves another), outside of her duty as a cop, she has an elegant, sweet, and feminine personality."),
(NULL, 'Akuma', 5600, 75, 18, 'GOHADOKEN EX', 24, 'ASHURA SENKU', 32, 'KURETSUHA', 55, 11, 4, 9, 9, "Akuma is a cold and extremely powerful warrior whose sole reason for being is to hone his fighting skills by battling and destroying strong foes. He rarely displays any sign of emotions or humanity, aside from occasional bursts of anger, and rarely smiles. He, however, will not engage in battle towards helpless people and in some cases may even defend them, either as a righteous calling or an afterthought of conquering major adversary. The only instance of humanity he has displayed after being drenched in the Satsui no Hado is with Kazumi Mishima, whom he respects, even in battle."),
(NULL, 'M.Bison', 5600, 135, 18, 'PSYCHO BLAST', 21, 'DEVIL REVERSE', 31, 'PSYCHO CRUSHER ULTIMATE', 54, 42, 38, 10, 10, "Possessing a vast ego and a god complex, Bison is physically incapable of feeling empathy for others and even takes pleasure in watching people suffer at his hands, never feeling a shred of regret or remorse for the numerous atrocities that he has committed. In many ways, Bison's characterization is comparable to the clinical diagnosis of a real-life psychopath or sociopath. ");
SELECT * FROM Characters;
-- UPDATE Characters SET column = '' WHERE idChar = X;

-- BASIC METRICS INSERTS
INSERT INTO BasicMetrics VALUES
(NULL, 17, 52, 39, 26, 18, 52, 38, 26, 18, 52, 38, 30, 35, 53, 38, 20),
(NULL, 17, 52, 38, 26, 24, 52, 38, 26, 18, 52, 38, 30, 34, 52, 39, 18),
(NULL, 20, 64, 27, 27, 17, 60, 30, 27, 25, 72, 21, 31, 39, 46, 47, 19),
(NULL, 20, 60, 32, 27, 20, 61, 30, 26, 22, 74, 22, 33, 33, 62, 29, 21),
(NULL, 20, 60, 31, 29, 17, 51, 30, 26, 21, 57, 25, 31, 30, 25, 68, 22),
(NULL, 22, 63, 28, 25, 24, 68, 25, 30, 18, 58, 35, 36, 38, 41, 58, 16),
(NULL, 20, 61, 29, 26, 24, 62, 30, 26, 22, 64, 29, 33, 41, 37, 56, 18),
(NULL, 18, 50, 41, 27, 23, 53, 38, 24, 18, 50, 41, 32, 33, 49, 42, 18),
(NULL, 18, 57, 32, 25, 18, 61, 28, 26, 18, 57, 32, 31, 36, 58, 33, 17),
(NULL, 27, 61, 31, 19, 28, 76, 14, 15, 35, 105, -10, 22, 43, 45, 51, 20);
SELECT * FROM BasicMetrics;
-- UPDATE BasicMetrics SET column = '' WHERE idBasic = X;

-- ADVANCED METRICS INSERTS
INSERT INTO AdvancedMetrics VALUES
(NULL, 640, 26, 52, 39, 39, 1190, 22, 100, -9, 47, 1620, 36, 72, 19, 40, 3540, 41, 57, 34, 26),
(NULL, 1050, 40, 59, 31, 31, 1920, 37, 68, 23, 38, 820, 64, 56, 35, 19, 1620, 50, 127, -32, 32),
(NULL, 1880, 38, 64, 26, 31, 4050, 59, 69, 24, 13, 1280, 43, 84, 9, 30, 3600, 63, 99, -5, 21),
(NULL, 800, 38, 71, 20, 30, 700, 53, 58, 33, 18, 1820, 56, 113, -20, 16, 4280, 78, 64, 28, 9),
(NULL, 1700, 56, 66, 25, 26, 1600, 56, 68, 26, 22, 2160, 61, 68, 25, 15, 6700, 47, 93, 2 ,30),
(NULL, 1700, 57, 70, 24, 17, 2640, 70, 108, -15, 11, 2100, 43, 97, -3, 35, 2300, 58, 83, 17, 26),
(NULL, 1480, 42, 60, 30, 28, 1260, 67, 61, 31, 7, 1450, 67, 61, 32, 13, 7100, 80, 81, 11, 8),
(NULL, 2500, 34, 65, 26, 38, 1070, 60, 56, 35, 19, 3180, 88, 132, -33, 32, 5160, 71, 117, -18, 24),
(NULL, 1200, 36, 111, -20, 42, 1350, 29, 94, -1, 23, 1260, 66, 62, 28, 20, 5390, 63, 167, -68, 19),
(NULL, 1800, 65, 89, 4, 37, 1740, 54, 84, 8, 19, 7000, 78, 144, -42, 8, 5900, 100, 124, -24, 0);
SELECT * FROM AdvancedMetrics;
-- UPDATE AdvancedMetrics SET column = '' WHERE idAdvanced = X;

-- STAGES INSERTS
INSERT INTO Stages VALUES
(NULL, 1, 'Suzaku Castle', 2500),
(NULL, 2, 'Battle Harbor', 2500),
(NULL, 3, 'Ayutthaya Ruins', 2500),
(NULL, 4, 'Air Force Base', 2500),
(NULL, 5, 'Maharaja Palace', 2500),
(NULL, 6, 'Flamenco Tavern', 2500),
(NULL, 7, 'World Warrior', 2500),
(NULL, 8, 'Taiping Road', 2500),
(NULL, 9, 'Ruined Dojo', 2500),
(NULL, 10, 'Shadaloo Fortress', 2500);
SELECT * FROM Stages JOIN characters ON idChar = fkChar;
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

    SELECT * FROM Characters
		JOIN Stages ON idChar = fkChar
			WHERE nameChar = 'Ryu';