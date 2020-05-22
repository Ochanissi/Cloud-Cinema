const express = require('express');
const cors = require('cors');
const path = require('path');
const bcrypt = require('bcrypt');
const knex = require('knex');

const signUp = require('./controllers/sign-up');
const signIn = require('./controllers/sign-in');
const profile = require('./controllers/profile');

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

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirdisplayName, 'client/build')));

  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirdisplayName, 'client/build', 'index.html'));
  });
}

app.post('/sign-in', (req, res) => {
  signIn.handleSignIn(req, res, db, bcrypt);
});

app.post('/sign-up', (req, res) => {
  signUp.handleSignUp(req, res, db, bcrypt);
});

app.get('/profile/:id', (req, res) => {
  profile.handleProfile(req, res, db);
});

app.listen(port, (error) => {
  if (error) throw error;
  console.log('Server running on port ' + port);
});
