const express = require('express');
const router = express.Router();
const SiteController = require('../../controller/SiteController');

router.get('/', SiteController.showProduct);
router.get('/product_details', SiteController.showProductDetails);

module.exports = router;

