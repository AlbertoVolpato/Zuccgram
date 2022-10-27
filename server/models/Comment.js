const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema(
  {
    post_id: {
      type: String,
      requred: true,
    },
    username: {
      type: String,
      required: true,
    },
    comment: {
        type: String,
      required: true,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Comment", CommentSchema);
