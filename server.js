const express = require('express');
const cors = require('cors');
const path = require('path');
const bcrypt = require('bcrypt');
const knex = require('knex');
const compression = require('compression');
// const multer = require('multer');
// const sharp = require('sharp');

const signUp = require('./controllers/sign-up');
const signIn = require('./controllers/sign-in');
const profile = require('./controllers/profile');
const watched = require('./controllers/watched');
const collection = require('./controllers/collection');
const watchlist = require('./controllers/watchlist');

if (process.env.NODE_ENV !== 'production')
  require('dotenv').config({ path: __dirname + '/.env' });

const db = knex({
  client: 'pg',
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
});

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.options('*', cors());

if (process.env.NODE_ENV === 'production') {
  app.use(compression());
  app.use(enforce.HTTPS({ trustProtoHeader: true }));
  app.use(express.static(path.join(__dirdisplayName, 'client/build')));

  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirdisplayName, 'client/build', 'index.html'));
  });
}

// app.use(express.static('./public'));

app.post('/sign-in', (req, res) => {
  signIn.handleSignIn(req, res, db, bcrypt);
});

app.post('/sign-up', (req, res) => {
  signUp.handleSignUp(req, res, db, bcrypt);
});

// User Profile

app.get('/profile/:id', (req, res) => {
  profile.handleGetProfile(req, res, db);
});

app.patch('/profile', (req, res) => {
  profile.handlePatchProfile(req, res, db);
});

// User Watched
app.post('/watched', (req, res) => {
  watched.handlePostWatched(req, res, db);
});

app.post('/get-watched', (req, res) => {
  watched.handleGetWatched(req, res, db);
});

app.post('/delete-watched', (req, res) => {
  watched.handleDeleteWatched(req, res, db);
});

// User Collection
app.post('/collection', (req, res) => {
  collection.handlePostCollection(req, res, db);
});

app.post('/get-collection', (req, res) => {
  collection.handleGetCollection(req, res, db);
});

app.post('/delete-collection', (req, res) => {
  collection.handleDeleteCollection(req, res, db);
});

// User Watchlist
app.post('/watchlist', (req, res) => {
  watchlist.handlePostWatchlist(req, res, db);
});

app.post('/get-watchlist', (req, res) => {
  watchlist.handleGetWatchlist(req, res, db);
});

app.post('/delete-watchlist', (req, res) => {
  watchlist.handleDeleteWatchlist(req, res, db);
});

app.listen(port, (error) => {
  if (error) throw error;
  console.log('Server running on port ' + port);
});
