const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const reviewsSchema = new Schema(
  {
    reviewText: {
      type: String,
     required: true,
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },
    /*username: {
      type: String,
      required: true,
    },*/
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Reviews = model("Reviews", reviewsSchema);

module.exports = Reviews;