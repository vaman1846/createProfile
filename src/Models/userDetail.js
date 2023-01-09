const mongoose = require("mongoose");
// const Geolocation = require("geolocation")
const detailSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    created_by: {
      type: String,
      required: true,
    },
    active: {
      type: String,
      require: true,
    },
    goelocation:{
      type: String,
      require: true,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("detail", detailSchema);
