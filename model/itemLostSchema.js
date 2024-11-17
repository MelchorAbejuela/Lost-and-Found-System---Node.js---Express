const mongoose = require("mongoose");

const itemLostSchema = mongoose.Schema({
  itemName: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  timeStampFound: {
    type: Date,
    required: true,
  },
  reportedBy: {
    type: String,
    required: true,
  },
  claimedStatus: {
    type: String,
    default: false,
  },
});

module.exports = mongoose.model("ItemLost", itemLostSchema);
