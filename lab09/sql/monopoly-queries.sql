--
-- This SQL script implements sample queries on the Monopoly database.
--
-- @author kvlinden
-- @version Summer, 2015
--

-- Get the number of Game records.
SELECT *
  FROM Game
  ;

-- Get the player records.
SELECT *
  FROM Player
  ;

-- Get all the users with Calvin email addresses.
SELECT *
  FROM Player
 WHERE emailAddress LIKE '%calvin%'
 ;

-- Get the highest score ever recorded.
  SELECT score
    FROM PlayerGame
ORDER BY score DESC
   LIMIT 1
   ;

-- Get the cross-product of all the tables.
SELECT *
  FROM Player, PlayerGame, Game, Properties
  ;

-- ----------------------------------------------------------------------------------------------------------------
-- Exercise 8.1

-- a.
-- SELECT *
--   FROM Game
--   ORDER BY time DESC
--   ;

-- b.
-- SELECT *
--   From Game
--   WHERE time > '2022-10-14'
--   ;

-- c.
-- SELECT *
--   FROM Player
--   WHERE name IS NOT NULL
--   ;

-- d.
-- SELECT playerID
--   FROM PlayerGame
--   WHERE score > 2000
--   ;

-- e.
-- SELECT *
--   FROM Player
--   WHERE emailAddress LIKE '%gmail%'
--   ;

-- ----------------------------------------------------------------------------------------------------------------
-- Excercise 8.2

-- a.
-- SELECT score
--   FROM Player, PlayerGame
--   WHERE Player.name = 'The King'
--   ORDER BY PlayerGame.score DESC
--   ;

-- b.
-- Select *
--   FROM Game, Player, PlayerGame
--   WHERE Game.time = '2006-06-28 13:20:00'
--   AND Game.ID = PlayerGame.GameID
--   AND Player.ID = PlayerGame.PlayerID
--   ORDER BY score DESC
--   LIMIT 1
--   ;

-- c/
-- Select players with same name and has lower ID

-- d.
-- Probably when data in the table needs another data that is closely related.
-- Such as a day and a month in a birth date.






