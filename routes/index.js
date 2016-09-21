var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/', function(req, res, next) {
  request.get(req.body.url, function(err, response, body) {
    return res.send(response);
  }
});

module.exports = router;
