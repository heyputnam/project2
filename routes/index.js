const express = require('express');
const router = express.Router();
const indexCtrl = require('../controllers/index');



// login/landing page

router.get('/', indexCtrl.login);
router.get('/dashboard', indexCtrl.dashboard);




module.exports = router; 