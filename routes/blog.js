const express = require("express");
const path = require("path");
const blogs = require("../data/blogs");

const router = express.Router();

router.get("/", (req, res) => {
  //   res.sendFile(path.join(__dirname, "../views/index.html"));
  res.render("home");
});

router.get("/blogs", (req, res) => {
  //   blogs.forEach((element) => {
  //     console.log(element.title);
  //   });
  //   res.sendFile(path.join(__dirname, "../views/bloghome.html"));
  res.render("blogPost", {
    blogs: blogs,
  });
});

router.get("/blogpost/:slug", (req, res) => {
  myBlog = blogs.filter((e) => {
    return e.slug == req.params.slug;
  });
  res.render("blogpage", {
    title: myBlog[0].title,
    content: myBlog[0].content,
  });
  //   res.sendFile(path.join(__dirname, "../views/blogpage.html"));
});

module.exports = router;
