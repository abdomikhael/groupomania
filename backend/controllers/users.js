const models = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
exports.signup = (req, res, next) => {
  bcrypt.hash(req.body.password, 10)
  .then(hash => {
   models.User.create({
    email: req.body.email,
    username : req.body.username,
    bio : req.body.bio,
    password: hash
  })
   .then((user) => res.status(201).json({ message: 'Utilisateur créé !',
     userId: user.id,
     token: jwt.sign(
      { userId: user.id },
      'RANDOM_TOKEN_SECRET'
      )
   }))
   .catch(error => res.status(400).json({ error }))
 })
  .catch(error => res.status(500).json({ error }));
};
exports.login = (req, res, next) => {
  const user = models.User.findOne({ where: { email: req.body.email }})
  .then(user => {
    if (!user) {
      return res.status(404).json({ error: 'Utilisateur non trouvé !' });
    }
    bcrypt.compare(req.body.password, user.password)
    .then(valid => {
      if (!valid) {
        return res.status(401).json({ error: 'Mot de passe incorrect !' });
      }
      res.status(200).json({
        userId: user.id,
        token: jwt.sign(
          { userId: user._id },
          'RANDOM_TOKEN_SECRET'
          )
      });
    })
    .catch(error => res.status(500).json({ error }));
  })
  .catch(error => res.status(500).json({ error }));
};
exports.showProfile = (req, res, next) => {
 const id = req.params.id;
 models.User.findByPk(id)
 .then(user => {res.status(200).json(user)
 })
 .catch(  
  (error) => {
    res.status(404).json({
      error: error
    });
  });
};
exports.deleteProfile =(req, res, next) => {
 const id = req.params.id;
 models.User.destroy({ where:{ id } })
 .then(() => res.status(201).json({ message: 'Profile supprimé !'}))
 .catch(error => res.status(400).json({ error }));
}