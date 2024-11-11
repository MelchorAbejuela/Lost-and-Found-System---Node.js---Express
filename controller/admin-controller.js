const { Admin } = require("../model/userSchemaModel");

const postAdmin = async (req, res) => {
  try {
    const admin = await Admin.create(req.body);
    res.status(200).json(admin);
  } catch (error) {
    console.log(error);
  }
};

const getAdmin = async (req, res) => {
  try {
    const { employeeId } = req.params;
    const { password } = req.query;

    const admin = await Admin.findOne({ employeeId });

    if (!admin) {
      return res
        .status(404)
        .json({ msg: `No admin found with employeeId ${employeeId}` });
    }

    if (admin.password !== password) {
      return res.status(401).json({ msg: `Invalid password` });
    }

    res.status(200).json(admin);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = { postAdmin, getAdmin };
