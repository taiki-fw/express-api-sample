const express = require("express");
const router = express.Router();

// GET /api/v1/article/test
router.get("/test", function (req, res) {
  res.json({
    message: "This is article api",
  });
});

module.exports = router;
