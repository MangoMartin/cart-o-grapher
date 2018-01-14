const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const Credentials = require('./client/models/credentials.js')

const app = express();
app.use(bodyParser());

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/users', (req,res)=>{

	res.json([
			{id:1, name:"green"},
			{id:2, name:"blue"},
			{id:3, name:"yellow"},
			{id:4, name:"red"}
		])
})

app.get('/fetchme', (req,res)=>{

	Credentials.findAll()
						 .then(res=>res.json())
});

app.post('/form', (req,res)=>{
	Credentials.sync()
						 .then(()=>{
							 return Credentials.create({
								 username: req.body.username,
								 password: req.body.password
							 });
						 })
						 .then(()=>{
							 res.redirect('/')
						 })
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 3001;
app.listen(port);
