const {db} = require('./dbConnect');
const PicturesServices = {};


//GET all pics
PicturesServices.renderpics= () => {
  const sql = `SELECT *
  FROM clothes`
  return db.any(sql, {});
}


//post new pic
PicturesServices.create = (category,style,color,season,user_id,img_url) => {
  const sql = `INSERT INTO clothes (category,style,color,season,user_id,img_url) VALUES ($[category], $[style], $[color],$[season],$[user_id],$[img_url])`;
  return db.none(sql, {category,style,color,season,user_id,img_url});
}

//--------------
//GET all category
PicturesServices.rendercategory= () => {
  const sql = `SELECT category
  FROM clothes
  GROUP BY clothes.category`
  return db.any(sql, {});
}
//GET all color
PicturesServices.rendercolor= () => {
  const sql = `SELECT color
  FROM clothes
  GROUP BY clothes.color`
  return db.any(sql, {});
}
//GET all style
PicturesServices.renderstyle= () => {
  const sql = `SELECT style
  FROM clothes
  GROUP BY clothes.style`
  return db.any(sql, {});
}
//GET all season
PicturesServices.renderseason= () => {
  const sql = `SELECT season
  FROM clothes
  GROUP BY clothes.season`
  return db.any(sql, {});
}


//GET all style by category bottom where bottom or top
//params
PicturesServices.renderbottomsbycategory= (category) => {
  const sql = `SELECT style 
  from clothes 
  where category =$[category]
  GROUP BY style`
  return db.any(sql, {category});
}


PicturesServices.createOotd = (img, style, stamp)=>{
  const sql =`INSERT INTO
  ootd (img, style, stamp)
  VALUES ($[img], $[style], $[stamp])`
  return db.none(sql, {img, style, stamp})
}



module.exports = PicturesServices;