	const models = require('../models');
	const fs = require('fs');
	exports.getAllPosts = (req, res, next) => {
		models.Post.findAll({
			order: [
			['id', 'DESC'],
			
			]
			
		})
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
		models.Post.findOne({
			where: {
				id: (req.params.id)
			}
		});
		models.Post.update({
			title: req.body.title,
			content: req.body.content,
		}, {
			where: {
				id: (req.params.id)
			}
		});
		return res.status(200).send({
			message: "Publication modifiée"
		})
	};
	exports.deletePost = (req, res, next) => {
		const id = req.params.id;
		models.Post.destroy({ where:{ id } })
		.then(() => res.status(201).json({ message: 'Post supprimé !'}))
		.catch(error => res.status(400).json({ error }));
	};
