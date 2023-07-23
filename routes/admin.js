const express = require('express');

const path = require('path');

const router = express.Router();

const controller = require('../controllers/admin');

router.post('/forms', controller.AddDetails);

router.get('/forms',controller.getDetails);

router.delete('/forms/:id', controller.deleteUser);

router.post('/forms/:id',controller.editUser)

module.exports=router;