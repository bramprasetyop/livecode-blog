var express = require('express');
var router = express.Router();
var images = require('../helpers/images')


const {
  newArticle,
  getArticle,
  deleteArticle,
  getOneArticle
} = require("../controllers/articleController");

var {
  logincheck
} = require("../helpers/auth");
/* GET articlelisting. */
router.post('/',logincheck, images.multer.single("image"),
//  authorization 
images.sendUploadToGCS, newArticle).get('/articles', getArticle)
  .delete('/articles/delete/:id',logincheck, deleteArticle).get('/articles/:id', getOneArticle)
module.exports = router;