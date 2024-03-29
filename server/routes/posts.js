const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");
var multer = require('multer');

var Storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});

var upload = multer({ storage: Storage }).single('image');

//CREATE POST
router.post('/', (req, res, next) => {
  console.log(req.body)
  upload(req, res, (err) => {
      if (err) {
          console.log(err);
      } else {
          const newPost = new Post({
              image: req.file.originalname,
              text: req.body.text,
              username: req.body.username
          });
          newPost.save()
              .then(() => res.send('successfully uploaded'))
      }
  });
});

//UPDATE POST
router.put("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    //if (post.username === req.body.username) {
    try {
      const updatedPost = await Post.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedPost);
    } catch (err) {
      res.status(500).json(err);
    }
    // } else {
    //   res.status(401).json("You can update only your post!");
    // }
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE POST
router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.username === req.body.username) {
      try {
        await post.delete();
        res.status(200).json("Post has been deleted...");
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      ///res.status(401).json("You can delete only your post!");
      ///rimuovi il codice non commentato e scommenta il codice per ottenere gli api come prima
      try {
        await post.delete();
        res.status(200).json("Post has been deleted...");
      } catch (err) {
        res.status(500).json(err);
      }
    }
  } catch (err) {
    res.status(500).json(err);
  }
});


//GET POST
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL POSTS
router.get("/", async (req, res) => {
  const username = req.query.user;
  const catName = req.query.cat;
  try {
    let posts;
    if (username) {
      posts = await Post.find({ username });
    } else if (catName) {
      posts = await Post.find({
        categories: {
          $in: [catName],
        },
      });
    } else {
      posts = await Post.find();
    }
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
