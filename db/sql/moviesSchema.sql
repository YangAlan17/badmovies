-- SET UP SCHEMA HERE
DROP DATABASE IF EXISTS badmovies;
CREATE DATABASE IF NOT EXISTS badmovies;
USE badmovies;


DROP TABLE IF EXISTS movies, genres;


CREATE TABLE genres (
    genre_id INT NOT NULL,
    genre_name VARCHAR(255) NOT NULL,
    PRIMARY KEY (genre_id),
    UNIQUE KEY (genre_id)
);

CREATE TABLE movies (
    movie_id INT NOT NULL,
    movie_name VARCHAR(255) NOT NULL
);
