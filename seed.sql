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
('top', 'long-sleeve','white','fall-winter',1,'http://makingadeal.com/wp-content/uploads/2017/06/Brand-White-Men-Shirt-Long-Sleeve-Chemise-Homme-2016-Fashion-Business-Design-Mens-Slim-Fit-Dress-7.jpg_640x640-7.jpg'),
('top', 'long-sleeve','blue','summer-spring',1,'https://images-na.ssl-images-amazon.com/images/I/61JUbrOdtPL._UX385_.jpg'),
('top', 'long-sleeve','red','summer-spring',1,'https://sep.yimg.com/ay/yhst-54326505879580/sp14rd-men-s-red-long-sleeve-industrial-work-shirt-15.jpg'),
('top', 'short-sleeve','black','summer-spring',1,'https://www.dhresource.com/0x0s/f2-albu-g5-M01-90-47-rBVaJFlHyKmASA95AAStD_YA6K4089.jpg/men-shirt-designer-brand-2017-male-short.jpg'),
('top', 'short-sleeve','other','summer-spring',1,'https://gloimg.rglcdn.com/rosegal/pdm-product-pic/Clothing/2018/05/16/source-img/20180516180432_11443.jpg'),
('bottom', 'pants','blue','fall-winter',1,'https://www.moschino.com/media/catalog/product/cache/0/900x1148/f5f5f5/AEF192Z_03185224-1290-1.jpg'),
('bottom', 'pants','white','summer-spring',1,'https://www.moschino.com/media/catalog/product/cache/0/900x1148/f5f5f5/AEF191Z_03050227-1485-1.jpg'),
('top', 'sleeve-less','other','summer-spring',1,'https://cdn2.bigcommerce.com/n-biq04i/lk0gwzb/products/1821/images/4740/PC54TT_athletichthr_flat_front__11333.1456256487.1280.1280.jpg?c=2'),
('top', 'sleeve-less','white','summer-spring',2,'http://thecosmo.co.uk/img/p/6/8/2/682-large_default.jpg'),
('top', 'sleeve-less','other','summer-spring',2,'https://cdn.shopify.com/s/files/1/0035/7652/9014/products/mockup-663807f9_2000x.png?v=1534968746'),
('bottom', 'skirt','red','fall-winter',2,'https://m.media-amazon.com/images/I/71jx94HJQdL._SR500,500_.jpg'),
('bottom', 'skirt','other','summer-spring',2,'https://dtpmhvbsmffsz.cloudfront.net/posts/2013/08/31/5222b93124a9480619005d36/m_5222b93424a9480619005d39.jpg');
('bottom', 'pants','white','summer-spring',1,'https://www.moschino.com/media/catalog/product/cache/0/900x1148/f5f5f5/AEF191Z_03060219-0001-1_1.jpg'),
('bottom', 'pants','blue','summer-spring',1,'https://www.moschino.com/us_en/moschino/men/clothing/trousers/fleece-pants-pixel-capsule.html'),
('bottom', 'pants','black','fall-winter',1,'https://www.moschino.com/media/catalog/product/cache/0/900x1148/f5f5f5/AEF192Z_03405229-1555-1_1.jpg'),
('bottom', 'pants','black','summer-spring',1,'https://www.moschino.com/us_en/moschino/men/clothing/trousers/cotton-jogging-with-double-question-mark-logo-23797.html'),
('bottom', 'pants','red','summer-spring',1,'https://www.moschino.com/us_en/moschino/men/clothing/trousers/fleece-jogging-with-polka-dots.html'),
('bottom', 'pants','other','summer-spring',1,'https://www.moschino.com/us_en/moschino/men/clothing/trousers/jogging-in-tricolor-technical-twill.html'),
('bottom', 'shorts','yellow','summer-spring',1,'https://www.moschino.com/media/catalog/product/cache/0/900x1148/f5f5f5/AEF191Z_03110228-0027-1_1.jpg'),
('bottom', 'shorts','white','summer-spring',1,'https://www.moschino.com/media/catalog/product/cache/0/900x1148/f5f5f5/AEF191Z_03040227-1001-1_2.jpg'),
('top','long-sleeve','black', 'fall-winter',1,'https://m.media-amazon.com/images/I/81DyVYd89PL._AC_UL320_.jpg'),
('top','long-sleeve','black', 'fall-winter',1,'https://s7.landsend.com/is/image/LandsEnd/435123_A513_LF_BLA?fmt=jpeg,rgb&qlt=60,1&op_sharpen=0&resMode=sharp2&op_usm=0.5,1,3,0&icc=sRGB%20IEC61966-2.1,relative&iccEmbed=1&hei=2061&wid=1374'),
('top','long-sleeve','black', 'fall-winter',1,'https://proskins.co/wp-content/uploads/2019/03/proskins-power_Men_Compression_Long-Sleeve-Top_front_800X800-800x800.jpg'),
('top', 'long-sleeve','red','fall-winter',1,'https://m.media-amazon.com/images/I/91DSxiIdijL._AC_UL320_.jpg'),
('top', 'long-sleeve','red','fall-winter',1,'https://images-na.ssl-images-amazon.com/images/I/613CKZIR6nL._UX342_.jpg'),
('top', 'long-sleeve','white','fall-winter',1,'https://cdn-images.farfetch-contents.com/13/70/40/65/13704065_16569104_300.jpg'),
('top', 'long-sleeve','white','fall-winter',1,'https://www3.assets-gap.com/webcontent/0017/022/336/cn17022336.jpg'),
('top', 'long-sleeve','blue','fall-winter',1,'https://brooksbrothers.scene7.com/is/image/BrooksBrothers/MS00860_DARK-ROYAL-BLUE?$bbproductimages$'),
('top', 'long-sleeve','blue','fall-winter',1,'https://brooksbrothers.scene7.com/is/image/BrooksBrothers/MS00860_LIGHT-BLUE-HEATHER?$bbproductimages$'),
('top', 'long-sleeve','other','fall-winter',1,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwP-iqDC3Zz59F__jTibG3qZos7DMsVgMFwMc3bQrlKIhxe4acWQ'),
('top', 'long-sleeve','other','fall-winter',1,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwP-iqDC3Zz59F__jTibG3qZos7DMsVgMFwMc3bQrlKIhxe4acWQ'),
('top','short-sleeve','black', 'summer-spring',1,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ11kAkv3N8Rxzod6mM3rH9nOE1lpGHPD8IMwNfYtqheZbSGHwU'),
('top','short-sleeve','black', 'summer-spring',1,'https://target.scene7.com/is/image/Target/GUEST_2b8f2c52-72f7-409b-bd72-1160d9c6d0c7?wid=488&hei=488&fmt=webp'),
('top','short-sleeve','black', 'summer-spring',1,'https://target.scene7.com/is/image/Target/GUEST_2b8f2c52-72f7-409b-bd72-1160d9c6d0c7?wid=488&hei=488&fmt=webp'),
('top', 'short-sleeve','black','summer-spring',1,'https://www.dhresource.com/0x0s/f2-albu-g5-M01-90-47-rBVaJFlHyKmASA95AAStD_YA6K4089.jpg/men-shirt-designer-brand-2017-male-short.jpg'),
('top', 'short-sleeve','other','summer-spring',1,'https://gloimg.rglcdn.com/rosegal/pdm-product-pic/Clothing/2018/05/16/source-img/20180516180432_11443.jpg'),
('top', 'short-sleeve','red','summer-spring',1,'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSFwx7MnR1uNFajqRlQpqeBkp8y-SheRSpjYX3IOR1foov0hXf-ptISLpHu9H4MbDVapmOV4HRDP8I1qy1UEKvyz-E6-G2wkzokQb_4OHTVyn1i9_kN7lWTtw&usqp=CAY'),
('top', 'short-sleeve','red','summer-spring',1,'https://s7d2.scene7.com/is/image/aeo/2154_1627_613_f?$PDP_78_Main$'),
('top','sleeve-less','black', 'summer-spring',1,'http://www.johannescavalcanti.com/images//pic/11854445_Ql733itwBH.jpg'),
('top','sleeve-less','black', 'summer-spring',1,'https://images-na.ssl-images-amazon.com/images/I/81omt09Uy2L._UY445_.jpg'),
('top', 'sleeve-less','other','summer-spring',1,'https://cdn2.bigcommerce.com/n-biq04i/lk0gwzb/products/1821/images/4740/PC54TT_athletichthr_flat_front__11333.1456256487.1280.1280.jpg?c=2'),
('top', 'sleeve-less','blue','summer-spring',1,'https://brooksbrothers.scene7.com/is/image/BrooksBrothers/MS00859_NAVY?$bbproductimages$'),
('top', 'sleeve-less','blue','summer-spring',1,'https://www.tillys.com/dw/image/v2/BBLQ_PRD/on/demandware.static/-/Sites-master-catalog/default/dw4137b470/tillys/images/catalog/1000x1000/344597523.jpg?sw=295&sh=380&sm=fit'),
('top','sleeve-less','red', 'summer-spring',1,'https://s7.landsend.com/is/image/LandsEnd/509379_A819_LF_38S?fmt=jpeg,rgb&qlt=60,1&op_sharpen=0&resMode=sharp2&op_usm=0.5,1,3,0&icc=sRGB%20IEC61966-2.1,relative&iccEmbed=1&hei=1185&wid=789'),
('top','sleeve-less','red', 'summer-spring',1,'https://images-na.ssl-images-amazon.com/images/I/51Z5GX9ktXL._UX569_.jpg'),
('top','sleeve-less','white', 'summer-spring',1,'https://images-na.ssl-images-amazon.com/images/I/61CDQ2%2B%2BexL._UY550_.jpg'),
('top','sleeve-less','white', 'summer-spring',1,'https://image.made-in-china.com/43f34j00QSRafzhtBPrM/100-Organic-Cotton-Men-White-Tank-Top-Wholesale.jpg'),
('top', 'long-sleeve','other','fall-winter',1,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwP-iqDC3Zz59F__jTibG3qZos7DMsVgMFwMc3bQrlKIhxe4acWQ'),
('top', 'long-sleeve','other','fall-winter',1,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwP-iqDC3Zz59F__jTibG3qZos7DMsVgMFwMc3bQrlKIhxe4acWQ'),
('top', 'long-sleeve','white','fall-winter',1,'https://s7.landsend.com/is/image/LandsEnd/173824_AG13_LF_WHI?fmt=jpeg%2Crgb&qlt=60%2C1&op_sharpen=0&resMode=sharp2&op_usm=0.5%2C1%2C3%2C0&icc=sRGB%20IEC61966-2.1%2Crelative&iccEmbed=1&wid=690&hei=1035'),
('top', 'long-sleeve','blue','summer-spring',1,'https://images-na.ssl-images-amazon.com/images/I/61JUbrOdtPL._UX385_.jpg'),
('top', 'long-sleeve','red','summer-spring',1,'https://sep.yimg.com/ay/yhst-54326505879580/sp14rd-men-s-red-long-sleeve-industrial-work-shirt-15.jpg'),


INSERT INTO outfits (top_id,bottom_id,descriptions) VALUES
  (1,8,'cute outfit need to wear this again'),
  (11,12,'wearing this for my next outing');
 
 INSERT INTO favorites(clothes_id) VALUES 
 (8);