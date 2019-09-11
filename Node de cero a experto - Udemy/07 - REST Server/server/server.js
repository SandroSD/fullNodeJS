require('./config/config');
const express = require('express'); 
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());



app.get('/usuario', function (req, res){
	res.json('aa')
});

app.post('/usuario', function (req, res){
	let body = req.body;
	res.json({body})
});

app.put('/usuario/:id', function (req, res){
	let id = req.params.id;
	res.json({id})
});

app.delete('/usuario', function (req, res){
	res.json('aa')
});

app.listen(process.env.PORT, () => {
	console.log('Escuchando puerto: ', 3000);
})