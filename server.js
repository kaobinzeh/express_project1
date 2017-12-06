const User = require('./model');
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const http = require('http')
const homePage = require('./index')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({urlencoded: false}));

var router = express.Router();

router.get('/api', function (req, res) {
    User.find(function (err, users) {
        if (err) res.send(err);
        res.json({ message: users });
    });
});

router.get('/user', (req, res) => {
    User.create({firstName :'Kingd',lastName:'Nzeh',Email:'email@gmail.com'}, function(err,user) {
        if(err) res.send(err);
         res.json(user);
    })
});

router.get('/getbyid', (req, res) => {
    User.findById('5a280d3352a4e63208f5448e', function(err, user){
        if (err) res.send(err);
        res.json(user)
    })
});

router.delete('/delete', (req, res) => {
    User.find({firstName: 'Livinus'})

});
app.use('/', router);

app.listen(3000, function () {
    console.log('listening on port 3000')
});