const express = require('express');
const contactUsRouter = express.Router();

/* GET users listing. */
contactUsRouter.get('/', (req, res, next) => {
	res.render('contactUs', {title: 'contact us'});
});

module.exports = contactUsRouter;