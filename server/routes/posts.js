const express = require("express");

const router = express.Router();

const Posts = require("../Controllers/Posts");

router.get("/", Posts.getPosts);
router.post("/", Posts.createPost);
router.get("/:id", Posts.getPost);
router.patch("/:id", Posts.updatePost);
router.delete("/:id", Posts.deletePost);
router.patch("/:id/likePost", Posts.likePost);

module.exports = router;
