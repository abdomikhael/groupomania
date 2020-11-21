const models = require('../models');
const fs = require('fs');

exports.getAllPosts = (req, res, next) => {
  Sauce.find().then(
    (post) => {
      res.status(200).json(post);
    }
  ).catch(
    (post) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

exports.getOnePost = (req, res, next) => {
  Sauce.findOne({
    _id: req.params.id
  }).then(
    (post) => {
      res.status(200).json(post);
    }
  ).catch(  
    (error) => {
      res.status(404).json({
        error: error
      });
    }
  );
};

exports.createPost = (req, res, next) => {
  const postObject = JSON.parse(req.body.posts);
  delete postObject._id;

  const post = new ({
    ...postObject,
  
  });
  post.save()
    .then(() => res.status(201).json({ message: 'Post enregistré !'}))
    .catch(error => res.status(400).json({ error }));
};

exports.modifyPost = (req, res, next) => {
  const postObject = req.file ?
    {
        ...JSON.parse(req.body.posts),

    } : { ...req.body };
    if(!req.body.errorMessage) {
        Post.updateOne({ _id: req.params.id }, { ...postObject, _id: req.params.id })
        .then(() => {
            if(!req.file) {
                res.status(200).json({ message: "Le post a bien été modifiée!"})
            } else {
                next();
            }
        })
        .catch(error => { 
            if(error.message.indexOf("duplicate key")>0) {
                req.body.errorMessage = "Le post existe déjà!";
            }
            next();
        })
    } else {
        next();
    }
};

exports.deletePost = (req, res, next) => {
    Sauce.findOne({ _id: req.params.id })
    .then(post => {
        
       
            Post.deleteOne({ _id: req.params.id })
            .then(() => res.status(200).json({ message: 'Le post a bien été supprimée !'}))
            .catch(error => res.status(400).json({ error }));
      
      })
      .catch(error => res.status(500).json({ error }));
};

