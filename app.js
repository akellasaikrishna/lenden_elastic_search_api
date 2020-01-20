const express = require("express");
const Index = require("./index.js");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3333 || process.env.PORT;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: "false" }));

app.post("/search", function(req, res) {
  Index.run(req.body.param).then(function(question) {
    res.json({ success: true, results: question });
  });
});

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
