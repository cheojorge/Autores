const AuthorsController = require('../controllers/authors.controller');
const API_URL = "/api/authors"
module.exports = function(app){
    app.get(API_URL, AuthorsController.getAllAuthors)
    app.get(`${API_URL}/:id`, AuthorsController.getAuthor)
    app.post(API_URL, AuthorsController.createAuthor)
    app.put(`${API_URL}/:id`, AuthorsController.updateAuthor)
    app.delete(`${API_URL}/:id`, AuthorsController.deleteAuthor)
}
