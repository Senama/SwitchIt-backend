const express=require('express')
const pictureRouter=express.Router();
const PicturesServices=require('../services/uploadpics')



//GET all pics
pictureRouter.get('/pics', (req, res, next) => {  
  PicturesServices.renderpics()
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      next(err);
    })
});

//post new pic
pictureRouter.post('/newpic', (req, res, next) => {
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


//--------------
//GET all category
pictureRouter.get('/category', (req, res, next) => {  
  PicturesServices.rendercategory()
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      next(err);
    })
});

//GET all color
pictureRouter.get('/color', (req, res, next) => {  
  PicturesServices.rendercolor()
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      next(err);
    })
});

//GET all style
pictureRouter.get('/style', (req, res, next) => {  
  PicturesServices.renderstyle()
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      next(err);
    })
});

//GET all season
pictureRouter.get('/season', (req, res, next) => {  
  PicturesServices.renderseason()
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      next(err);
    })
});

module.exports=pictureRouter;