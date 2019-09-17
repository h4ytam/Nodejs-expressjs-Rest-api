const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

app.use(bodyParser.json());

// import routes
const postsRoutes = require('./routes/posts');

app.use('/posts', postsRoutes);

// routes
app.get('/', (req, res) => {
  res.send('we are on posts');
});

// connect to Db
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
  console.log('connected');
});
// port
app.listen(3000);
