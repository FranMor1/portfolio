const router = require('express').Router();

router.use('/experience', require('./api/experience.routes'));
router.use('/projects', require('./api/projects.routes'));
router.use('/studies', require('./api/studies.routes'));

module.exports = router;