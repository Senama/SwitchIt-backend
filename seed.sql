-- DROP DATABASE IF EXISTS switchit;
-- CREATE DATABASE  switchit;

-- \c switchit;

DROP TABLE IF EXISTS favorites CASCADE;
DROP TABLE IF EXISTS outfits CASCADE;
DROP TABLE IF EXISTS ootd CASCADE;
DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS clothes CASCADE;



CREATE TABLE users (
id SERIAL PRIMARY KEY,
uid VARCHAR NOT NULL,
firstname VARCHAR NOT NULL,
lastname VARCHAR NOT NULL,
email VARCHAR NOT NULL,
username VARCHAR NOT NULL);


CREATE TABLE clothes (
id SERIAL PRIMARY KEY,
category VARCHAR NOT NULL,
style VARCHAR NOT NULL,
color VARCHAR NOT NULL,
season VARCHAR NOT NULL,
user_id INT REFERENCES users (id) NOT NULL, --unique
img_url VARCHAR NOT NULL
);   --delete and add to outfits table


CREATE TABLE favorites (
  id SERIAL PRIMARY KEY,
  clothes_id INT REFERENCES clothes (id) NOT NULL,
  favorited BOOLEAN DEFAULT FALSE
);

CREATE TABLE outfits (
  id SERIAL PRIMARY KEY,
  top_id INT REFERENCES clothes (id) NOT NULL,
  bottom_id INT REFERENCES clothes (id) NOT NULL,
  descriptions VARCHAR NOT NULL
  );

CREATE TABLE ootd(
  id SERIAL PRIMARY KEY,
  top_id INT REFERENCES clothes (id) NOT NULL,
  bottom_id INT REFERENCES clothes (id) NOT NULL,
  nickname VARCHAR NOT NULL,
  stamp VARCHAR NOT NULL
);

INSERT INTO users (uid,firstname,lastname,email,username) VALUES
('123abc','Lukas', 'Augustinho','lukas@pursuit.org','singer4Christ'),
('456cdf','Lala', 'Jones','jones@pursuit.org','joneslala');


INSERT INTO clothes(category, style,color,season,user_id,img_url) VALUES
('top','long-sleeve','black', 'fall-winter',1,'https://m.media-amazon.com/images/I/81DyVYd89PL._AC_UL320_.jpg'),
('top', 'long-sleeve','red','summer-spring',1,'https://sep.yimg.com/ay/yhst-54326505879580/sp14rd-men-s-red-long-sleeve-industrial-work-shirt-15.jpg'),
('top', 'short-sleeve','other','summer-spring',1,'https://gloimg.rglcdn.com/rosegal/pdm-product-pic/Clothing/2018/05/16/source-img/20180516180432_11443.jpg');




INSERT INTO outfits (top_id,bottom_id,descriptions) VALUES
  (1,8,'cute outfit need to wear this again'),
  (11,12,'wearing this for my next outing');
 
 INSERT INTO favorites(clothes_id) VALUES 
 (8);