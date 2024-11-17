const LostItem = require("../model/itemLostSchema");

const getAllItems = async (req, res) => {
  try {
    const allTask = await LostItem.find({});
    res.status(200).json(allTask);
  } catch (error) {
    res.status(400).json({ msg: error });
    console.log(error);
  }
};

const createLostItem = async (req, res) => {
  try {
    const lostItem = await LostItem.create(req.body);
    res.status(201).json(lostItem);
  } catch (error) {
    res.status(400).json({ msg: error });
    console.log(error);
  }
};

module.exports = { getAllItems, createLostItem };
