const express = require('express');
const router = express.Router();
const { testRouter, payment } = require('../../controllers/payment-controller');

router.get('/test', testRouter);
router.post('/', payment);

module.exports = router;
