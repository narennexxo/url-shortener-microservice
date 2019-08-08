const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

router.get('/', mainController.homepage);

// router.get('/add/:url*', mainController.addUrl);
// router.post('/add/:url*', mainController.addUrl);
//
// router.get('/:urlId', mainController.getUrl);
// router.post('/:urlId', mainController.getUrl);

router.get('/sendmessage', mainController.sendmessage);


router.post('/getmessage', mainController.getmessage);

router.get('/getmessage', mainController.getmessage);

module.exports = router;
