const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    image: {
      type: String,
    },
    text: {
      type: String,
    },
    username: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
