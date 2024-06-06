const router = require('express').Router();
const apiRoutes = require('./api-routes');

router.use('/api', appRoutes);
router.use((reg, res) => {
    return res.status(404).send('Not Found');
});

module.exports = router;