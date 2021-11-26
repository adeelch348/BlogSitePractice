const express = require("express");
const path = require("path");
const router = require("./routes/blog");
const exphs = require("express-handlebars");
const bodyParser = require("body-parser");
require("./models");
const postRoute = require("./routes/posts");
const userRoute = require("./routes/user");
const imageRoute = require("./routes/images");
const cron = require("node-cron");
const mailer = require("nodemailer");
const app = express();
app.use(express.json());
//Creating a transporter
// const transporter = mailer.createTransport({
//   host: "smtp.ethereal.email",
//   port: 587,
//   auth: {
//     user: "your-username",
//     pass: "your-password",
//   },
// });

// function sendEmail(message) {
//   //sending the email
//   transporter
//     .sendMail({
//       from: '"Peter" <peter@kayere.com>',
//       to: '"You there" <you@there.com>',
//       subject: "Scheduled Email",
//       text: message,
//     })
//     .then((_) => {
//       console.log("Email sent on " + new Date());
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }

// cron.schedule(
//   "*/2 * * * * *",
//   () => {
//     console.log("Hey there, this email was sent to you automatically");
//   }
//   // sendEmail("Hey there, this email was sent to you automatically")
// );
// app.use(bodyParser.json());
let task = cron.schedule("* * * * * *", () => {
  console.log("Task is running every minute " + new Date());
});

// task.start();
task.stop();

const port = 8000;

// app.get("/", (_req, res) => {
//   res.send("Blog Site");
// });
app.engine("handlebars", exphs());
app.set("view engine", "handlebars");
app.use(express.static(path.join(__dirname, "public")));

app.use("/", require(path.join(__dirname, "routes/blog.js")));
app.get("/welcome/:name", (req, res) => {
  res.send("Welcome " + req.params.name);
});

app.use("/posts", postRoute);
app.use("/user", userRoute);
app.use("/images", imageRoute);
app.use("/uploads", express.static("uploads"));
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});

module.exports = app;
