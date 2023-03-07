const { urlencoded } = require("express");
const express = require("express");
const people = require('./routes/people')
const auth = require('./routes/auth')
const app = express();

app.use(express.static("./methods-public"));
app.use(urlencoded({ extended: false }));
app.use(express.json());


app.use("/api/people",people)

app.use("",auth)

app.listen(5000, () => {
  console.log("listening on port 5000...");
});
