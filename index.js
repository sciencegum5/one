const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('pages/index')
})
app.get('/about', (req, res) => {
    res.render('pages/about')
})
app.get('/projects', (req, res) => {
    res.render('pages/projects')
})
app.get('/files/basicbot.zip', function(req, res){
    var file = './views/files/basicbot.zip'
    res.download(file); // Set disposition and send it.
  });
app.get('/contact', (req, res) => {
    res.render('pages/contact')
})
app.get('/deway', (req, res) => {
    res.render('pages/deway')
})
app.get('/answeryes', (req, res) => {
    res.render('pages/answeryes')
})
app.get('/answerno', (req, res) => {
    res.render('pages/answerno')
})
app.listen(port, () => {
    // will echo 'Our app is running on http://localhost:5000 when run locally'
    console.log('Our app is running on http://localhost:' + port);
});