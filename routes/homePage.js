const express = require('express');
const auth = require('../middlewares/userAuth');
// const auth = require('../middlewares/userAuth');
const homePageRouter = express.Router();

/* GET home page. */
homePageRouter.get('/', (req, res, next) => {
    res.render('homePage', { title: 'home page express' });
});

// route to test the middleware auth
homePageRouter.get('/auth', auth ,(req, res, next) => {
    res.send('you are authorized');
})

module.exports = homePageRouter;