const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const port = process.env.PORT || 3000; // port番号がセットされていないとき、3000番でサーバーを立ち上げる

const router = require("./routes/v1/index");
app.use("/api/v1/", router);

app.listen(port, function () {
  console.log("listen on port" + port);
});
