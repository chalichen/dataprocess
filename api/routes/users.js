// var express = require('express');
// var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });


export const currentUser = (req, res) => {
  console.log("获取当前用户！");
  let user = {name: 'Serati Ma',
  avatar: 'https://gw.alipayobjects.com/zos/rmsportal/dRFVcIqZOYPcSNrlJsqQ.png',
  userid: '00000001',
  notifyCount: 12};
  
  res.json(user);
};
export const users = (req, res) => {

  res.json("陈亮");
};

// module.exports = router;
