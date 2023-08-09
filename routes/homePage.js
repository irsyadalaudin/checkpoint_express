const express = require('express');
const homePageRouter = express.Router();

/* GET home page. */
homePageRouter.get('/', (req, res, next) => {
    res.render('homePage', { title: 'home page express' });
});

module.exports = homePageRouter;