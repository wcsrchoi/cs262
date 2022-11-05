CS 262 - Homework 3
This Homework is based on https://cs.calvin.edu/courses/cs/262/kvlinden/09is/homework.html


1.
a)
https://sc83-monopoly-service.herokuapp.com/

https://sc83-monopoly-service.herokuapp.com/players

https://sc83-monopoly-service.herokuapp.com/players/1

https://sc83-monopoly-service.herokuapp.com/players/-1 (not found)

https://sc83-monopoly-service.herokuapp.com/blob (undefined endpoint)

https://sc83-monopoly-service.herokuapp.com/playergame

https://sc83-monopoly-service.herokuapp.com/playergame/gameid=1

https://sc83-monopoly-service.herokuapp.com/playergame/playerid=1


b)
It is reading from the database , meaning it is using GET commends. So all of them are both idempotent and nullipotent.

c)
It is RESTful because:
- it uses http protocol
- uses .json to transfer data
- uses standardized url: https://sc83-monopoly-service.herokuapp.com/
- it is stateless, since client context is not stored in the server
- it has a client server that can access to the database

d)
No, becasue SQL is not Obeject-Oriented Program and the objects or class definitions are not mapped to database tables.



