const express=require('express')
const clothesRouter=express.Router();
const ClothesServices=require('../services/clothes')



//GET all pics
clothesRouter.get('/', (req, res, next) => {  
  ClothesServices.renderpics()
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      next(err);
    })
});

//post new pic
clothesRouter.post('/newpic', (req, res, next) => {
  const {category,style,color,season,user_id,img_url} = req.body;
  ClothesServices.create(category,style,color,season,user_id,img_url)
    .then(data => {
      res.json({success: `Upoaded pic successfully`});
    })
    .catch(err => {
        console.log(err)
      next(err);
    })
});


//--------------------------------------- OOTD
clothesRouter.ootd = (req, res)=>{
  const {clothes_id, nickname, stamp} = req.body;
  console.log('img:', clothes_id)
  console.log('style:', nickname)
  console.log('stamp:', stamp)
  ClothesServices.createOotd(clothes_id, nickname, stamp)
  .then(data =>{
    console.log(data)
    res.json('ootd saved')
  })
  .catch(error=>{
    res.json(error)
  })
}


//--------------
//GET all category
clothesRouter.get('/category', (req, res, next) => {  
  ClothesServices.rendercategory()
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      next(err);
    })
});

//GET all color
clothesRouter.get('/color', (req, res, next) => {  
  ClothesServices.rendercolor()
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      next(err);
    })
});

//GET all style
clothesRouter.get('/style', (req, res, next) => {  
  ClothesServices.renderstyle()
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      next(err);
    })
});

//GET all season
clothesRouter.get('/season', (req, res, next) => {  
  ClothesServices.renderseason()
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      next(err);
    })
});



//GET all style by category where bottom or top
//params
clothesRouter.get('/style/:category', (req, res, next) => {  
  const {category}=req.params;
  ClothesServices.renderbottomsbycategory(category)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      next(err);
    })
});



module.exports=clothesRouter;