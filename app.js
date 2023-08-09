const express = require('express');
const path = require('path')
const app = express();
const port = 5000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug')

const homePageRouter = require('./routes/homePage')
app.use('/', homePageRouter)

const ourServiceRouter = require('./routes/ourService')
app.use('/ourService', ourServiceRouter)

const contactUsRouter = require('./routes/contactUs')
app.use('/contactUs', contactUsRouter)

app.use(express.static('public')); 						// this is for serving static files like css, js, images, etc.

app.listen(port, () => {
	console.log(`the server is running on port http://localhost:${port}`)
});