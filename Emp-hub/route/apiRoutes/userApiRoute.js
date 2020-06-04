const express = require('express');
const controller = require('../../controller/apiController/userApiCon')
const router = express.Router();

router.post('/register', controller.postRegister);
router.post('/login', controller.postLogin);
router.post('/join', controller.postJoin);




module.exports = router;