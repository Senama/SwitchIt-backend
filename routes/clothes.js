const express=require('express')
const pictureRouter=express.Router();
const PicturesServices=require('../services/uploadpics')



//GET all pics
pictureRouter.get('/', (req, res, next) => {  
  PicturesServices.renderpics()
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      next(err);
    })
});

//post new pic
pictureRouter.post('/', (req, res, next) => {
  const {category,style,color,season,user_id,img_url} = req.body;
  PicturesServices.create(category,style,color,season,user_id,img_url)
    .then(data => {
      res.json({success: `Upoaded pic successfully`});
    })
    .catch(err => {
        console.log(err)
      next(err);
    })
});


//--------------------------------------- OOTD
pictureRouter.ootd = (req, res)=>{
  const {img, style, stamp} = req.body;
  console.log('img:', img)
  console.log('style:', style)
  console.log('stamp:', stamp)
  PicturesServices.createOotd(img, style, stamp)
  .then(data =>{
    console.log(data)
    res.json('ootd saved')
  })
  .catch(error=>{
    res.json(error)
  })
}

module.exports=pictureRouter;