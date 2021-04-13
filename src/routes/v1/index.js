const express = require("express");

const router = express.Router();

router.use("/article", require("./article"));
router.use("/user", require("./user"));

module.exports = router;
