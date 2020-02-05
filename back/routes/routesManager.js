const router = require('express').Router();
const complexRoutes = require('./complexRoutes');
var routes = require('./routes');

router.use('/v1', complexRoutes);
router.use('/v1', routes);

module.exports = router;