CREATE DATABASE groupomania CHARACTER SET 'utf8';

USE groupomania;

CREATE TABLE `users` (
  id SMALLINT NOT NULL AUTO_INCREMENT,
  username varchar(32) NOT NULL,
  email varchar(255) NOT NULL,
  password varchar(255) NOT NULL,
  bio text NOT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB;

CREATE TABLE `posts` (
  id SMALLINT NOT NULL AUTO_INCREMENT,
  fk_user SMALLINT NOT NULL,
  INDEX user_ind (fk_user),
  title varchar(255) NOT NULL,
  content text NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY(fk_user)
  REFERENCES users(id)
  ON DELETE CASCADE
) ENGINE=InnoDB;	
npx sequelize-auto -o "./models" -d groupomania -h localhost -u student -p 3306 -x mot_de_passe -e mysql
ALTER TABLE posts   ADD FOREIGN KEY(fk_user)  REFERENCES users(Id)

