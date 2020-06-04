const express = require('express');
const controller = require('../../controller/apiController/dashCon');
const middleware = require('../../middleware/authentication')
const router = express.Router()


router.get('/userDash', middleware, controller.check)

router.get('/userDash1', middleware, controller.check1)
module.exports = router