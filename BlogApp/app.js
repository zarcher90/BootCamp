const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const expressSanitizer = require('express-sanitizer');

const app = express();

// APP Config
app.set('view engine', 'ejs');
app.use(express.static(`${__dirname}/public/`));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(expressSanitizer());
mongoose.connect('mongodb://zach:sandbox1@ds111913.mlab.com:11913/zachsandbox');

// Mongoose Model Config
const blogSchema = new mongoose.Schema({
  title: String,
  image: String,
  body: String,
  created: { type: Date, default: Date.now },
});

const Blog = mongoose.model('Blog', blogSchema);

// RESTfull Routes

// Redirect / to index page
app.get('/', (req, res) => {
  res.redirect('/blogs');
});

// Index Route
app.get('/blogs', (req, res) => {
  Blog.find({}, (err, blogs) => {
    if (err) {
      console.log(err);
    } else {
      res.render('index', { blogs });
    }
  });
});

// New Route
app.get('/blogs/new', (req, res) => {
  res.render('new');
});

// Create Blog Route
app.post('/blogs', (req, res) => {
  req.body.blog.body = req.sanitize(req.body.blog.body);
  Blog.create(req.body.blog, (err) => {
    if (err) {
      res.render('new');
    } else {
      res.redirect('/blogs');
    }
  });
});

// Request Blog Route
app.get('/blogs/:id', (req, res) => {
  Blog.findById(req.params.id, (err, blog) => {
    if (err) {
      console.log(err);
    } else {
      res.render('show', { blog });
    }
  });
});

// Edit Blog Route
app.get('/blogs/:id/edit', (req, res) => {
  Blog.findById(req.params.id, (err, blog) => {
    if (err) {
      console.log(err);
    } else {
      res.render('edit', { blog });
    }
  });
});

// Update Blog Route
app.put('/blogs/:id', (req, res) => {
  req.body.blog.body = req.sanitize(req.body.blog.body);
  Blog.findByIdAndUpdate(req.params.id, req.body.blog, (err, updatedBlog) => {
    if (err) {
      console.log(err);
    } else {
      res.redirect(`/blogs/${req.params.id}`);
    }
  });
});

// Delete Blog Route
app.delete('/blogs/:id', (req, res) => {
  Blog.findByIdAndRemove(req.params.id, (err) => {
    if (err) {
      console.log(err);
    } else {
      res.redirect('/blogs');
    }
  });
});

app.listen(3000, 'localhost');
