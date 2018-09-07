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
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL UNIQUE,
    release_date VARCHAR(255) NOT NULL,
    rating INT NOT NULL,
    poster VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);
