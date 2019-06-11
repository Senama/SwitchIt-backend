const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const admin = require('./firebase');


//define routes
const clothesRouter = require('./routes/clothes');
// const userRoutes = require('./routes/users');

const checkFirebaseToken = (req, res, next) => {
  const { token } = req.body;

  admin.auth().verifyIdToken(token)
    .then(function(decodedToken) {
      var uid = decodedToken.uid;
      next();
    }).catch(function(error) {
      // Handle error
      res.json('ERROR!!!!')
    });
}

// -------- MIDDLEWARE
app.use(cors());
// parse application/x-www-form-urlencoded
//cors calls backend from frontend or else it will block u
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())


//routes
app.use('/user',userRoutes)
app.use('/clothes', clothesRouter); 


app.use((err, req, res, next) => {
  res.status(400).json({error: err.toString()});
});


// -------- ROUTES
app.get('/', (req, res) => {
  res.json('Hello world');
})

app.post('/', clothesRouter)

app.post('/ootd', clothesRouter.ootd)



module.exports={app}