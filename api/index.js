import express from "express";
import  * as users from "./routes/users";
import  * as data from "./routes/data";

const router = express.Router();

// 获取用户信息
router.get('/currentUser', users.currentUser);
router.get('/users', users.users);
router.get('/GetJsonReportSummary', data.GetJsonReportSummary);
router.get('/getfile',data.getfile);
// getNotices;

export default router;