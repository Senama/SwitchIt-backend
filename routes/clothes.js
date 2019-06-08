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
  console.log('clothes_id:', clothes_id)
  console.log('nickname:', nickname)
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


clothesRouter.put('/update', (req, res) => {
  const {clothes_id,stamp, nickname} = req.body;
  ClothesServices.updateOotd(clothes_id, stamp, nickname)
  .then(() => {
    res.json({success:`${clothes_id} time updated too: ${stamp}`});
  })
    .catch(err => {
      res.json(err.toString());
    })
});

clothesRouter.get('/read', (req, res) => {  
  const {nickname}=req.body;
  ClothesServices.readOotd(nickname)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json(err)
    })
});

clothesRouter.get('/readAll', (req, res) => {  
  ClothesServices.readAllOotd()
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json(err)
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
clothesRouter.get('/color/:category/:style/:color', (req, res) => {  
  const {category,style,color}=req.params;
  ClothesServices.renderColorType(category,style,color)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      next(err);
    })
});

//GET with a specific season and all filtered
clothesRouter.get('/season/:category/:style/:color/:season', (req, res) => {  
  const {category,style,color,season}=req.params;
  ClothesServices.renderSeasonType(category,style,color,season)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      next(err);
    })
});
module.exports=clothesRouter;