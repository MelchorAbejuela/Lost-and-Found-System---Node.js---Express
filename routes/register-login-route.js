const express = require("express");
const router = express.Router();

const { postUser, getUser } = require("../controller/user-controller");
const { postAdmin, getAdmin } = require("../controller/admin-controller");

// post a user
router.post("/users", postUser);

// get a single user
router.get("/users/:studentNum", getUser);

// post an admin
router.post("/admins", postAdmin);

// get a single admin
router.get("/admins/:employeeId", getAdmin);

module.exports = router;
