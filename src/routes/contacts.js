const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

router.get('/contacts', contactController.list);
router.get('/contacts/:name', contactController.getByName);
router.post('/contacts', contactController.create);
router.delete('/contacts/:name', contactController.remove);

module.exports = router;