CREATE DATABASE IF NOT EXISTS hwdb;
USE hwdb;

DROP TABLE IF EXISTS book;
CREATE TABLE book (
	id int PRIMARY KEY ,
	title varchar(48) NOT NULL,
    author varchar(48) NOT NULL,
    yearPublished int(8) NOT NULL,
    publisher varchar(48) NOT NULL,
    pgCnt int(8) NOT NULL,
    msrp varchar(24)
);

INSERT INTO book (id, title, author, yearPublished, publisher, pgCnt, msrp) VALUES 
(1, 'Leading', 'Alex Ferguson', 2015, 'Hachette Books', 416, '$22.97'),
(2, 'Jose Mourinho: The Art of Winning', 'Andrew J. Kirby', 2016, 'Red Sportswriting', 276, '$10.99');

-- SELECT * FROM book;

-- COMMIT;

-- CREATE USER 'msisreader'@'%' IDENTIFIED BY 'msisreadonly';
-- GRANT SELECT ON * . * TO 'msisreader'@'%';