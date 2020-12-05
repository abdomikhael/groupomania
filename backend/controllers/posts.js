const models = require('../models');
const fs = require('fs');

exports.getAllPosts = (req, res, next) => {
 models.Post.findAll({})
 .then((post) => {
  res.status(200).json(post)
})
 .catch(  
  (error) => {
    res.status(404).json({
      error: error
    });
  });
};

exports.getOnePost = (req, res, next) => {
 const id = req.params.id;

 models.Post.findByPk(id)
 .then(posts => {res.status(200).json(posts)
 })
 .catch(  
  (error) => {
    res.status(404).json({
      error: error
    });
  });
};

exports.createPost = (req, res, next) => {

  const postObject = req.body;


  const post = new models.Post ({
    ...postObject,

  });
  post.save()
  .then(() => res.status(201).json({ message: 'Post enregistré !'}))
  .catch(error => res.status(400).json({ error }));
};

exports.modifyPost = (req, res, next) => {
  const id = req.params.id;
  const postObject = req.body;
   delete postObject.createdAt;
  const post = new models.Post ({
    ...postObject,

  });
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    }); 
  }
  
  post.update(id)
  .then(() => res.status(201).json({ message: 'Post enregistré !'}))
  .catch(error => res.status(400).json({ error }));
  
};

exports.deletePost = (req, res, next) => {
    const id = req.params.id;
    const postObject = req.body;
    post = models.Post
    post.deleteOne(id)
    .then(() => res.status(201).json({ message: 'Post supprimé !'}))
  .catch(error => res.status(400).json({ error }));

};

