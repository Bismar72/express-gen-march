const express = require('express');
const router = express.Router();

router.get('/:fro', function (req, res, next) {
  res.send(req.params.fro);
});


router.get('/:fromId-:toId', function (req, res, next) {
  res.render('book', { fromId: req.params.fromId, toId: req.params.toId });
});

/* GET home page. */
router.get('/:bookId([1-9][0-9]*)', function (req, res, next) {
  res.render('book', { bookId: req.params.bookId });
});



module.exports = router;