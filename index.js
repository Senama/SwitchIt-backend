const {app,} = require('./app')
const port = 7999;

app.listen(process.env.PORT || port, ()=>{
  console.log(`listening at port ${port}`)
})
