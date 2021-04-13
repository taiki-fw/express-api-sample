const express = require("express");
const router = express.Router();

// GET /api/v1/users/test
router.get("/test", function (req, res) {
  res.json({
    message: "This is user api",
  });
});

module.exports = router;
