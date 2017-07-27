const express = require('express');
const router = express.Router();
const storeController = require('../controllers/mainController');

router.get('/', storeController.homepage);

router.get('/add/:url*', storeController.addUrl);
router.post('/add/:url*', storeController.addUrl);

router.get('/:urlId', storeController.getUrl);
router.post('/:urlId', storeController.getUrl);

module.exports = router;
