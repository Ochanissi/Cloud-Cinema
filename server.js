const express = require('express');
const cors = require('cors');
const path = require('path');
const bcrypt = require('bcrypt');
const knex = require('knex');

const db = knex({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    user: 'postgres',
    password: 'test1234',
    database: 'cloudcinema',
  },
});

if (process.env.NODE_ENV !== 'production') require('dotenv').config;

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
  const { email, password } = req.body;

  db.select('email', 'hash')
    .from('login')
    .where('email', '=', email)
    .then((data) => {
      const isValid = bcrypt.compareSync(password, data[0].hash);
      if (isValid) {
        return db
          .select('*')
          .from('users')
          .where('email', '=', email)
          .then((user) => {
            res.json(user[0]);
          })
          .catch((err) => res.status(400).json('Unable to connect!'));
      } else {
        res.status(400).json('Wrong credentials!');
      }
    })
    .catch((err) => res.status(400).json('Wrong credentials!'));
});

app.post('/sign-up', (req, res) => {
  const { email, name, password } = req.body;

  const hash = bcrypt.hashSync(password, 10);
  db.transaction((trx) => {
    trx
      .insert({
        hash: hash,
        email: email,
      })
      .into('login')
      .returning('email')
      .then((loginEmail) => {
        return trx('users')
          .returning('*')
          .insert({
            email: loginEmail[0],
            name: name,
            joined: new Date(),
          })
          .then((user) => {
            res.json(user[0]);
          });
      })
      .then(trx.commit)
      .catch(trx.rollback);
  }).catch((err) => res.status(400).json('Unable to register!'));
});

app.get('/profile/:id', (req, res) => {
  const { id } = req.params;

  db.select('*')
    .from('users')
    .where({
      id: id,
    })
    .then((user) => {
      if (user.length) {
        res.json(user[0]);
      } else {
        res.status(400).json('Error getting user!');
      }
    });
});

app.listen(port, (error) => {
  if (error) throw error;
  console.log('Server running on port ' + port);
});
