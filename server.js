const express = require('express');
const cors = require('cors');
const path = require('path');
const bcrypt = require('bcrypt');

if (process.env.NODE_ENV !== 'production') require('dotenv').config;

const app = express();
const port = process.env.PORT || 5000;

const database = {
  users: [
    {
      id: '123',
      displayName: 'John',
      email: 'john@email.com',
      password: 'test1234',
      entries: 0,
      joined: new Date(),
    },
    {
      id: '124',
      displayName: 'Sally',
      email: 'sally@email.com',
      password: 'test1234',
      entries: 0,
      joined: new Date(),
    },
  ],
};

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
  console.log(req.body);

  // bcrypt.compare(
  //   'test1234',
  //   '$2b$05$/fVXiiXfX30sHHYYSZP.tewL57FMT44/bsB/umR/XiW9CMUCqule2',
  //   function (err, res) {
  //     console.log(res);
  //   }
  // );

  if (
    req.body.email === database.users[0].email &&
    req.body.password === database.users[0].password
  ) {
    res.json('success');
  } else {
    res.status(400).json('error logging in');
  }
});

app.post('/sign-up', (req, res) => {
  const { email, displayName, password } = req.body;

  // bcrypt.hash(password, 10, function (err, hash) {
  //   console.log(hash);
  // });

  database.users.push({
    id: '125',
    displayName: displayName,
    password: password,
    entries: 0,
    joined: new Date(),
  });

  res.json(database.users[database.users.length - 1]);
});

app.post('/profile/:id', (req, res) => {
  const { id } = req.params;
  let found = false;

  database.users.forEach((user) => {
    if (user.id === id) {
      found = true;
      return res.json(user);
    }
  });

  if (!found) {
    res.status(404).json('no such user');
  }
});

app.listen(port, (error) => {
  if (error) throw error;
  console.log('Server running on port ' + port);
});
