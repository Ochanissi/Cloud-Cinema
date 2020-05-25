const handlePostWatched = (req, res, db) => {
  const { id, email, type, title, url, rating } = req.body;

  // console.log(req.body);

  if (!id || !email || !type || !url) {
    return res.status(400).json('Incorrect request!');
  }

  db.transaction((trx) => {
    trx
      .insert({
        id: id,
        email: email,
        type: type,
        title: title,
        url: url,
        rating: rating,
      })
      .into('watched')
      .returning('*')
      .then((data) => {
        return trx('watched')
          .where('email', '=', email)
          .returning('*')
          .then((data) => {
            res.json(data);
          });
      })
      .then(trx.commit)
      .catch(trx.rollback);
  }).catch((err) => res.status(400).json('Unable to submit data!'));
};

const handleGetWatched = (req, res, db) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json('Incorrect request!');
  }

  db.select('*')
    .from('watched')
    .where('email', '=', email)
    .then((data) => {
      res.json(data);

      // console.log(data);
    })
    .catch((err) => res.status(400).json('Unable to get watched!'));
};

const handleDeleteWatched = (req, res, db) => {
  const { id } = req.body;

  // console.log(id);

  if (!id) {
    return res.status(400).json('Incorrect request!');
  }

  db.transaction((trx) => {
    trx('watched')
      .where('id', '=', id)
      .del()
      .returning('*')
      .then((data) => {
        return trx('watched')
          .where('id', '!=', id)
          .returning('*')
          .then((data) => {
            res.json(data);
          });
      })
      .then(trx.commit)
      .catch(trx.rollback);
  }).catch((err) => res.status(400).json('Unable to submit data!'));
};

module.exports = {
  handlePostWatched,
  handleGetWatched,
  handleDeleteWatched,
};
