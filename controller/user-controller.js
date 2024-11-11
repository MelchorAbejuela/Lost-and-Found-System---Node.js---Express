const { User } = require("../model/userSchemaModel");

const postUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
  }
};

const getUser = async (req, res) => {
  try {
    const { studentNum } = req.params;
    const { password } = req.query;

    const user = await User.findOne({ studentNum });

    if (!user) {
      return res
        .status(404)
        .json({ msg: `No user found with studentNum ${studentNum}` });
    }

    if (user.password !== password) {
      return res.status(401).json({ msg: "Invalid password" });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = { postUser, getUser };
