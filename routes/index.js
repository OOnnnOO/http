var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  res.render('index', {title: 'index'});
});

// router.get('/ip', function (req, res, next) {
//   res.send(req.ip);
// });

router.get('/ip', function (req, res, next) {
  res.send(req.headers['x-real_ip']);
});


router.get('/user-agent', function (req, res, next) {
  res.send(req.headers['user-agent']);
});

router.get('/headers', function (req, res, next) {
  // console.log(req);
  res.send(req.headers);
});

router.get('/get', function (req, res) {
  res.send('get a get request');
});

router.post('/post', function (req, res) {
  res.send('get a POST request');
});

router.put('/put', function (req, res) {
  res.send('get a put request');
});
router.delete('/delete', function (req, res) {
  res.send('get a delete request');
});

// 返回204 No Content
router.get('/204', function (req, res) {
  res.sendStatus(204).end();
});


module.exports = router;
