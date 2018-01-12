const express = require('express');
const bodyParser = require('body-parser');
const Location = require('./models/address.js')

const app = express();
app.use(bodyParser());

app.set('views', __dirname + '/views')
app.set('view engine', 'pug');

//let addressBook = [];
app.get('/', function(req,res){
  Location.findAll()
          .then(addresses => {
            res.send('http://localhost:3000')
            console.log(addressBook[0][1].dataValues.address)
          })
  //res.send(202);
})

app.get('/about', function(req,res){
  res.render('index');
})

app.post('/about', function(req,res){
  Location.sync()
      .then(()=>{
        return Location.create({
          address: req.body.address
        });
      })
      .then(()=>{
        res.redirect('http://localhost:3000');
      })
})

app.listen(3001, function(){
  console.log('It works!')
})
