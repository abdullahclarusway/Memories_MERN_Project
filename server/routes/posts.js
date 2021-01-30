const express = require("express");
// const posts = require("../controllers/posts");
const router = express.Router();
// const Posts = require("../controllers/Posts");
const Posts = require("../Controllers/Posts");

// router.get("/", posts.getPosts);
// router.post("/", posts.createPost);
// router.get("/", Posts.hasan);
router.get("/", Posts.getPosts);
router.post("/", Posts.createPost);
router.patch("/:id", Posts.updatePost);

module.exports = router;
