-- DROP DATABASE IF EXISTS switchit;
-- CREATE DATABASE  switchit;

-- \c switchit;

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS clothes;
DROP TABLE IF EXISTS favorites;
DROP TABLE IF EXISTS outfits;


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
img_url VARCHAR NOT NULL);   --delete and add to outfits table


CREATE TABLE favorites (
  id SERIAL PRIMARY KEY,
  clothes_id INT REFERENCES clothes (id) NOT NULL,
  favorited BOOLEAN DEFAULT FALSE
);

CREATE TABLE outfits (
  id SERIAL PRIMARY KEY,
  top_id INT REFERENCES clothes (id) NOT NULL,
  bottom_id INT REFERENCES clothes (id) NOT NULL,
  descriptions VARCHAR NOT NULL);

INSERT INTO users (uid,firstname,lastname,email,username) VALUES
('123abc','Lukas', 'Augustinho','lukas@pursuit.org','singer4Christ'),
('456cdf','Lala', 'Jones','jones@pursuit.org','joneslala');


INSERT INTO clothes(category, style,color,season,user_id,img_url) VALUES
('top','long-sleeve','black', 'fall/winter',1,'https://m.media-amazon.com/images/I/81DyVYd89PL._AC_UL320_.jpg'),
('top', 'long-sleeve','white','fall/winter',1,'http://makingadeal.com/wp-content/uploads/2017/06/Brand-White-Men-Shirt-Long-Sleeve-Chemise-Homme-2016-Fashion-Business-Design-Mens-Slim-Fit-Dress-7.jpg_640x640-7.jpg'),
('top', 'long-sleeve','blue','summer/spring',1,'https://images-na.ssl-images-amazon.com/images/I/61JUbrOdtPL._UX385_.jpg'),
('top', 'long-sleeve','red','summer/spring',1,'https://sep.yimg.com/ay/yhst-54326505879580/sp14rd-men-s-red-long-sleeve-industrial-work-shirt-15.jpg'),
('top', 'short-sleeve','black','summer/spring',1,'https://www.dhresource.com/0x0s/f2-albu-g5-M01-90-47-rBVaJFlHyKmASA95AAStD_YA6K4089.jpg/men-shirt-designer-brand-2017-male-short.jpg'),
('top', 'short-sleeve','other','summer/spring',1,'https://gloimg.rglcdn.com/rosegal/pdm-product-pic/Clothing/2018/05/16/source-img/20180516180432_11443.jpg'),
('bottom', 'long','red','fall/winter',1,'https://www.footjoy.com/dw/image/v2/AAZW_PRD/on/demandware.static/-/Sites-footjoy-master/default/dw64e9d532/FJ_24193_01.jpg?sw=1024&sh=1024&sm=fit&sfrm=jpg'),
('bottom', 'short','white','summer/spring',1,'https://cfcdn.zulily.com/images/cache/product/297504/zu56800369_main_tm1523660714.jpg'),
('top', 'sleeve-less','other','summer/spring',1,'https://cdn2.bigcommerce.com/n-biq04i/lk0gwzb/products/1821/images/4740/PC54TT_athletichthr_flat_front__11333.1456256487.1280.1280.jpg?c=2'),
('top', 'sleeve-less','white','summer/spring',2,'http://thecosmo.co.uk/img/p/6/8/2/682-large_default.jpg'),
('top', 'sleeve-less','other','summer/spring',2,'https://cdn.shopify.com/s/files/1/0035/7652/9014/products/mockup-663807f9_2000x.png?v=1534968746'),
('bottom', 'skirt','red','fall/winter',2,'https://m.media-amazon.com/images/I/71jx94HJQdL._SR500,500_.jpg'),
('bottom', 'skirt','other','summer/spring',2,'https://dtpmhvbsmffsz.cloudfront.net/posts/2013/08/31/5222b93124a9480619005d36/m_5222b93424a9480619005d39.jpg');

INSERT INTO outfits (top_id,bottom_id,descriptions) VALUES
  (1,8,'cute outfit need to wear this again'),
  (11,12,'wearing this for my next outing');
 
 INSERT INTO favorites(clothes_id) VALUES 
 (8);