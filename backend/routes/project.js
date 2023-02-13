const express = require('express');

const {
    project
} = require('../controllers/projectController');

const router = express.Router();

router.post('/cproject',project );

module.exports = router;