const Article = require("../model/articleModel");
var jwt = require("jsonwebtoken");

function newArticle(req, res) {
  var decoded = jwt.verify(req.headers.token,process.env.SECRET_KEY)
  // console.log('======',req.headers.token);
  

  let addArticle = {
    image: req.file.cloudStoragePublicUrl,
    title:req.body.title,
    content: req.body.content,
    category:req.body.category,
    author : decoded.author

  }

  Article.create(addArticle)
    .then(Article => {
      res.status(200).json({
        message: 'new Article added',
        Article
      })
    })
    .catch(err => {
      res.status(400).json({
        message: 'failed',
        err
      })
    })
}

function getArticle(req, res) {
  Article.find()
    .then(Article => {
      res.status(200).json({
        message: 'get Article',
        Article
      })
    })
    .catch(err => {
      res.status(400).json({
        message: 'failed',
        err
      })
    })
}

function deleteArticle(req, res) {
  Article.findByIdAndRemove(req.params.id)
    .then(Article => {
      res.status(200).json({
        message: 'delete Article',
        Article
      })
    })
    .catch(err => {
      res.status(400).json({
        message: 'failed',
        err
      })
    })
}
function getOneArticle(req, res) {
  Article.findOne({_id:req.params.id})
    .then(Article => {
      res.status(200).json({
        message: 'get one Article',
        Article
      })
    })
    .catch(err => {
      res.status(400).json({
        message: 'failed',
        err
      })
    })
}





module.exports = {
  newArticle,
  getArticle,
  deleteArticle,
  getOneArticle
};