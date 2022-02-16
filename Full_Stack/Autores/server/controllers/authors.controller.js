const {Authors} = require('../models/authors.models')

module.exports.getAllAuthors = (req,res) => {
    Authors.find({}).sort({name: 1})
    .then(authors => res.json(authors))
    .catch(erro => res.json(erro))
}
module.exports.getAuthor = (req,res) => {
    Authors.findOne({_id: req.params.id})
    .then(authors => res.json(authors))
    .catch(err => res.json(err))
}
module.exports.createAuthor = (req,res) => {
    const {name} = req.body;
    Authors.create({
        name
    })
    .then(authors => res.json(authors))
    .catch(err => res.status(400).json(err))
}
module.exports.updateAuthor = (req,res) => {
    Authors.updateOne({_id: req.params.id},req.body,{ runValidators: true })
    .then(authors => res.json(authors))
    .catch(err => res.status(400).json(err))
}

module.exports.deleteAuthor = (req,res) => {
    Authors.deleteOne({_id: req.params.id})
    .then(authors => res.json(authors))
    .catch(err => res.json(err))
}