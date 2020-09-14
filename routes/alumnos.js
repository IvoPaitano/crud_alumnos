var express = require('express');
var router = express.Router();
var alumnoController = require('../controllers/alumnoController');

router.get('/',alumnoController.list);
router.get('/create',alumnoController.getCreateStudent);
router.post('/create',alumnoController.postCreateStudent);
router.post('/:id/delete',alumnoController.postDeleteStudent);

router.get('/:id/edit',alumnoController.getEditStudent);
router.post('/:id/edit',alumnoController.postEditStudent);

module.exports = router;