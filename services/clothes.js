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
// //GET all category
// ClothesServices.rendercategory= () => {
//   const sql = `SELECT category
//   FROM clothes
//   GROUP BY clothes.category`
//   return db.any(sql, {});
// }
// //GET all color
// ClothesServices.rendercolor= () => {
//   const sql = `SELECT color
//   FROM clothes
//   GROUP BY clothes.color`
//   return db.any(sql, {});
// }
// //GET all style
// ClothesServices.renderstyle= () => {
//   const sql = `SELECT style
//   FROM clothes
//   GROUP BY clothes.style`
//   return db.any(sql, {});
// }
// //GET all season
// ClothesServices.renderseason= () => {
//   const sql = `SELECT season
//   FROM clothes
//   GROUP BY clothes.season`
//   return db.any(sql, {});
// }


//GET all style by category bottom where bottom or top
//params
ClothesServices.renderbottomsbycategory= (category) => {
  const sql = `SELECT * 
  from clothes 
  where category =$[category]`
  return db.any(sql, {category});
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