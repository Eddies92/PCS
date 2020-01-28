const app = require('connect')();


app.use((req, res, next) => {
    res.setHeader('content-type', 'text/html');
    next();
});

app.use(require('./sayPlease.js'));

app.use('/home', (req, res, next) => {
    res.end('<h1>The Home Page</h1>');
});

app.use('/about', (req, res, next) => {
    res.end('<h3>I will tell you about myself</h3>');
});
app.use('/reviews', (req, res, next) => {
    res.end('<h3>Other people will tell you about me</h3>');
});
app.use('/contact', (req, res, next) => {
    res.end('<h1>Call me</h1>');
});



app.listen(80);