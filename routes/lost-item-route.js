const express = require("express");
const router = express.Router();

const {
  getAllItems,
  createLostItem,
} = require("../controller/item-lost-controller");

router.get("/", getAllItems);
router.post("/", createLostItem);

module.exports = router;
