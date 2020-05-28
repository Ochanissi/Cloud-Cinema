const handleGetProfile = (req, res, db) => {
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
};

const handlePatchProfile = (req, res, db) => {
  const { name, email, age, occupation, country, about } = req.body;

  // console.log({ name, email, age, occupation, country, about });

  // console.log(req.file);

  db('users')
    .where({ email: email })
    .update({ name: name })
    .update({ occupation: occupation })
    .update({ age: age })
    .update({ country: country })
    .update({ about: about })
    // .update({ photo: photo })
    .returning('*')
    .then((user) => {
      if (user.length) {
        res.json(user[0]);
        // res.sendFile(path.join(__dirname, `./public/uploads/${user[0]}`));

        // console.log(user[0]);
      } else {
        res.status(400).json('Error updating user!');
      }
    })
    .catch((err) => res.status(400).json('Unable to update data!'));
};

module.exports = {
  handleGetProfile,
  handlePatchProfile,
};
