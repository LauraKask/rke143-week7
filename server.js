const express = require('express');
const bodyParser = require('body-parser');
const app = express();


const pumpkinData = require('./data/pumpkin.json');
const broccoliData = require('./data/pumpkin.json');
const nodeJsData = require('./data/nodejs.json');

app.use(bodyParser.json());

app.get('/', (req, res) => {
    const randomIndex = Math.floor(Math.random() * pumpkinData.Categories['Pumpkin Drinks'].length);
    const randomDrinkRecipe = pumpkinData.Categories['Pumpkin Drinks'][randomIndex];

    res.status(200).json({randomDrinkRecipe});
});

app.get('/pumpkin', (req, res) => {
    res.status(200).json({message: 'Got pumpkin?'});
});


app.post ('/pumpkin', (req, res) => {
    console.log(req.body);
    if(req.body.username !== 'admin' ||  req.body.password !== "1234") {
        res.status(200).json({broccoliData});       
    } else {
        res.status(200).json({pumpkinData}); 
    }
});

app.post('/rke143', (req, res) => {
    console.log(req.body);
    if(req.body.name === 'rke' && req.body.code === '143') {
        res.status(200).json(nodeJsData);
    } else {
        res.status(200).json({ message: 'invalid credentials' });
    }
});


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});