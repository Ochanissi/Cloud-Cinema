const handleSignIn = (req, res, db, bcrypt) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json('Incorrect form submission!');
  }

  db.select('email', 'hash')
    .from('login')
    .where('email', '=', email)
    .then((data) => {
      const isValid = bcrypt.compareSync(password, data[0].hash);
      if (isValid) {
        return (
          db
            // .select('*')
            // .from('watched')
            // .leftOuterJoin('users', { 'users.email': 'watched.email' })

            .select('*')
            .from('users')
            .where('email', '=', email)
            .then((user) => {
              res.json(user[0]);

              // console.log(user);
            })
            .catch((err) => res.status(400).json('Unable to connect!'))
        );
      } else {
        res.status(400).json('Wrong credentials!');
      }
    })
    .catch((err) => res.status(400).json('Wrong credentials!'));
};

module.exports = {
  handleSignIn,
};
