const express = require('express');
const controller = require('../../controller/normalController/userNormCon')
const router = express.Router();

router.get('/', controller.landing)
router.get('/register', controller.register);
router.get('/login', controller.login);
router.get('/join', controller.join)


module.exports = router;
