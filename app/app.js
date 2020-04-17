const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const port = process.env.PORT || 3000; // port番号がセットされていないとき、3000番でサーバーを立ち上げる

app.get("/app/v1/", function (req, res) {
  res.json({
    message: "Hello,World",
  });
});

app.listen(port, function () {
  console.log("listen on port" + port);
});
