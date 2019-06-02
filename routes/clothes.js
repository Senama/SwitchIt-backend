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


//--------------
// //GET all category
// clothesRouter.get('/category', (req, res, next) => {  
//   ClothesServices.rendercategory()
//     .then(data => {
//       res.json(data);
//     })
//     .catch(err => {
//       next(err);
//     })
// });

// //GET all color
// clothesRouter.get('/color', (req, res, next) => {  
//   ClothesServices.rendercolor()
//     .then(data => {
//       res.json(data);
//     })
//     .catch(err => {
//       next(err);
//     })
// });

// //GET all style
// clothesRouter.get('/style', (req, res, next) => {  
//   ClothesServices.renderstyle()
//     .then(data => {
//       res.json(data);
//     })
//     .catch(err => {
//       next(err);
//     })
// });

// //GET all season
// clothesRouter.get('/season', (req, res, next) => {  
//   ClothesServices.renderseason()
//     .then(data => {
//       res.json(data);
//     })
//     .catch(err => {
//       next(err);
//     })
// });



//GET all style by category where bottom or top
//params
clothesRouter.get('/style/:category', (req, res) => {  
  const {category}=req.params;
  ClothesServices.renderbottomsbycategory(category)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      next(err);
    })
});



// --------------------FOR FILTERING -------------------

//GET all by a specific style 
clothesRouter.get('/:style', (req, res) => {  
  const {style}=req.params;
  ClothesServices.renderStyleType(style)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      next(err);r
    })
});

//GET all by a specific color 
clothesRouter.get('/color/:color', (req, res) => {  
  const {color}=req.params;
  console.log('c', color)
  ClothesServices.renderColorType(color)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      next(err);
    })
});

//GET all by a specific season
clothesRouter.get('/season/:season', (req, res) => {  
  const {season}=req.params;
  console.log('seasons!!!',season)
  ClothesServices.renderSeasonType(season)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      next(err);
    })
});

module.exports=clothesRouter;