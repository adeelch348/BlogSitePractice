const express = require("express");
const path = require("path");
const router = require("./routes/blog");
const exphs = require("express-handlebars");
const bodyParser = require("body-parser");
require("./models");
const postRoute = require("./routes/posts");

const app = express();

app.use(bodyParser.json());

const port = 8000;

// app.engine("handlebars", exphs());
// app.set("view engine", "handlebars");
// app.use(express.static(path.join(__dirname, "public")));

// app.use("/", require(path.join(__dirname, "routes/blog.js")));
// app.get("/welcome/:name", (req, res) => {
//   res.send("Welcome " + req.params.name);
// });

app.use("/posts", postRoute);
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});

module.exports = app;
