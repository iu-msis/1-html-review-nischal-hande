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
(2, 'Scholes: My Story', 'Paul Scholes', 2012, 'Simon & Schuster UK', 299, '$13.79'),
(3, 'Jose Mourinho: The Art of Winning', 'Andrew J. Kirby', 2016, 'Red Sportswriting', 276, '$10.99'),
(4, 'My Turn: The Autobiography', 'Johan Cruyff', 2016, 'Macmillan', 320, '$30.47'),
(5, 'I Am Zlatan: My Story On and Off the Field', 'Zlatan Ibrahimovic', 2014, 'Random House Trade Paperbacks', 400, '$11.99');

-- SELECT * FROM book;

-- COMMIT;

-- CREATE USER 'msisreader'@'%' IDENTIFIED BY 'msisreadonly';
-- GRANT SELECT ON * . * TO 'msisreader'@'%';