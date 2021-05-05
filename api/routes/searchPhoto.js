var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const querystring = require('querystring');

router.get('/', (req, res, next) => {
  const searchquerry = req.query.searchInput;
  res.json(searchquerry);
});

module.exports = router;
