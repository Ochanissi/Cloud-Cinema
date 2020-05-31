const handlePostCollection = (req, res, db) => {
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
      .into('collection')
      .returning('*')
      .then((data) => {
        return trx('collection')
          .where('email', '=', email)
          .returning('*')
          .then((data) => {
            res.json(data);
          });
      })
      .then(trx.commit)
      .catch(trx.rollback);
  }).catch((err) => res.status(400).json('Unable to submit collection!'));
};

const handleGetCollection = (req, res, db) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json('Incorrect request!');
  }

  db.select('*')
    .from('collection')
    .where('email', '=', email)
    .then((data) => {
      res.json(data);

      // console.log(data);
    })
    .catch((err) => res.status(400).json('Unable to get collection!'));
};

const handleDeleteCollection = (req, res, db) => {
  const { id, email } = req.body;

  // console.log(id);

  if (!id || !email) {
    return res.status(400).json('Incorrect request!');
  }

  db.transaction((trx) => {
    trx('collection')
      .where('id', '=', id)
      .del()
      .returning('*')
      .then((data) => {
        return trx('collection')
          .where('email', '=', email)
          .returning('*')
          .then((data) => {
            res.json(data);
          });
      })
      .then(trx.commit)
      .catch(trx.rollback);
  }).catch((err) => res.status(400).json('Unable to submit collection!'));
};

module.exports = {
  handlePostCollection,
  handleGetCollection,
  handleDeleteCollection,
};
