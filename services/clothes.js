const {db} = require('./dbConnect');
const ClothesServices = {};

//GET all pics
ClothesServices.renderpics= () => {
  const sql = `SELECT *
  FROM clothes`
  return db.any(sql, {});
}


//post new pic
ClothesServices.create = (category,style,color,season,user_id,img_url) => {
  const sql = `INSERT INTO clothes (category,style,color,season,user_id,img_url) VALUES ($[category], $[style], $[color],$[season],$[user_id],$[img_url])`;
  return db.none(sql, {category,style,color,season,user_id,img_url});
}

//--------------

//params
ClothesServices.renderbottomsbycategory= (category) => {
  const sql = `SELECT * 
  from clothes 
  where category =$[category]`
  return db.any(sql, {category});
}


ClothesServices.createOotd = (clothes_id, nickname, stamp)=>{
  const sql =`INSERT INTO
  ootd (clothes_id, nickname, stamp)
  VALUES ($[clothes_id], $[nickname], $[stamp])`
  return db.none(sql, {clothes_id, nickname, stamp})
}

ClothesServices.updateOotd = (clothes_id,stamp, nickname) =>{
  const sql = `UPDATE ootd SET stamp=$[stamp] WHERE clothes_id=$[clothes_id] AND nickname=$[nickname]`
  return db.none(sql, {clothes_id,stamp, nickname})

}

ClothesServices.readOotd = (nickname) =>{
  const sql = `SELECT * 
  from ootd 
  INNER JOIN clothes
  on clothes_id = clothes.id
  where nickname=$[nickname]`
  return db.any(sql, {nickname});

}

ClothesServices.readAllOotd = () =>{
  const sql = `SELECT * 
  from ootd 
  INNER JOIN clothes
  on clothes_id = clothes.id`
  return db.any(sql, {});

}
// -------------FOR FILTERING-----------------
//GET all by a specific style  
ClothesServices.renderStyleType= (style) => {
  const sql = `SELECT * 
  FROM clothes 
  WHERE style=$[style]`
  return db.any(sql, {style});
}


//GET all by a specific color 
ClothesServices.renderColorType= (category,style,color) => {
  console.log('colors',color)
  console.log('category',category)
  const sql = `
  SELECT * 
  FROM clothes 
  WHERE category=$[category]
  AND style=$[style]
  AND color=$[color]`
  return db.any(sql, {category,style,color});
}


//GET all by a specific season
ClothesServices.renderSeasonType= (category,style,color,season) => {
  console.log('SEASON', season)
  const sql = `SELECT * FROM clothes
  WHERE category=$[category]
  AND style=$[style]
  AND color=$[color]
  AND season=$[season]`
  return db.any(sql, {category,style,color,season});
}


module.exports = ClothesServices;