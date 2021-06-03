const express = require('express');

const router = express.Router();

const dataCtl = require('../controlers/data');

router.post('/', dataCtl.getCategory);
router.post('/nextPrev', dataCtl.getNextPrev);

module.exports = router;