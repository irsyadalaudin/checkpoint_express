const express = require('express');
const ourServiceRouter = express.Router();

/* GET users listing. */
ourServiceRouter.get('/', (req, res, next) => {
	res.render('ourService', {title: 'our service'});
});

module.exports = ourServiceRouter;