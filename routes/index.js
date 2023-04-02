
const router = require('express').Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'My Cite', name: req.login.auth ? req.login.username : "Guest" });
});

router.all('/', function (req, res, next) {
  res.render('index', { title: 'My Cite' });
});



router.get('/:cats?', function (req, res, next) {
  res.render('index', { title: "cats", name: "Bismar" });
});

//router.get('/ca+ts ', function (req, res, next) {
// res.render('index', { title: "caaaaaaaaaa....", name: "Kendra" });
//});


module.exports = router;
