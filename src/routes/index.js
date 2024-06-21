const { Router } = require('express');
const callsRouter = require('./calls.js');

const router = Router();

router.use('/calls', callsRouter);

module.exports = router;
