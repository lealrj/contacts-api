const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

router.get('/contacts', contactController.list);
router.get('/contact/:name', contactController.getByName);
router.post('/contact', contactController.create);
router.delete('/contact/:name', contactController.remove);

module.exports = router;