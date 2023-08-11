// Import required modules
const express = require('express');
const auth = require('./middlewares/userAuth');
const path = require('path');

// Create an instance of the Express application
const app = express();

// Set the port number the server will listen on
const port = 5000;

// Use Express to create the server and handle routes
// Configure the views/pug settings
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Import and use route handlers for different routes
const homePageRouter = require('./routes/homePage');
app.use('/', homePageRouter);

const ourServiceRouter = require('./routes/ourService');
app.use('/ourService', ourServiceRouter);

const contactUsRouter = require('./routes/contactUs');
app.use('/contactUs', contactUsRouter);

// Serve static files (CSS, JS, images, etc.) from the 'public' directory
app.use(express.static('public'));

// Start the server and listen on the specified port
app.listen(port, () => {
	console.log(`the server is running on port http://localhost:${port}`);
});