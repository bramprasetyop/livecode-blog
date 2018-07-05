const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let articleSchema = new Schema({
  image:{
    type:String
  },
  title: {
    type: String
  },
  content: {
    type: String
  },
  category: {
    type: String
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User_blog_livecode"
  }
}, {
  timestamps: true
});





const Article = mongoose.model("Articles_livecode", articleSchema);

module.exports = Article;