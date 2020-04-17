# How to separate endpoints

## file level

app
- app.js
- routes
 - v1
  - index.js
  - user.js
  - article.js
  - xxx.js
  
 ## code 
 
 **`"~":"xxx/app/"`**

```javascript
// ~/app.js ... root file
const app = express();

const router = require("./routes/v1/index");
app.use("/api/v1/", router);
```

```javascript
// ~/app/routes/v1/index.js
const router = express.Router();

router.use("/article", require("./article"));
router.use("/user", require("./user"));

module.exports = router;
```

```javascript
// ~/app/routes/v1/user.js
const router = express.Router();

// ~/api/v1/user/
router.get("/", function(req, res) {

  // response
  res.json({
    message: "Hello, user api."
  });

});

module.exports = router;
```
