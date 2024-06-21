const { Router } = require('express');
const { getCalls, createCall } = require('../controllers/calls');

const router = Router();

router.get('/', getCalls);

router.post('/', createCall);

module.exports = router;
