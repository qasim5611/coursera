
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PersonSchema = new Schema({
   name: String,
   email: String,
   blogs: [{ 
      type: mongoose.Schema.Types.ObjectId,
      ref: "Blog"
   }]
});

const BlogSchema = new Schema({
   title: String,
   Person: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Person"
   },
   body: String,
   comments: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment"
   }]
})

const CommentSchema = new Schema({
   Person: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Person"
   },
   blog: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Blog"
   },
   body: String
})


const Person = mongoose.model("Author", PersonSchema);
const Blog = mongoose.model("Blog", BlogSchema);
const Comment = mongoose.model("Comment", CommentSchema);

module.exports = {Person, Blog, Comment}