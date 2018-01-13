const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/api/testing', (req,res)=>{
	const dummyInfo = "I am dummy info";

	res.json(dummyInfo);
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 3001;
app.listen(port);