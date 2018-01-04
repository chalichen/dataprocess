var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  // res.sendFile(path.join(__dirname,'index.html'))
  console.log("index!");
  res.send("ok");
  //res.render('index', { title: 'Express' });
});
// router.get('/data', function(req, res, next) {
//   // var args1 = {minRQ: "2015-11-11",maxRQ:"2017-12-11"};
//   // a = soaptest(args1);
//   res.send("测试soap");

//   // res.render('index', { title: a });
// });
module.exports = router;
