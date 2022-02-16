const express = require("express")
const bodyParser = require("body-parser")
var cors = require('cors');
const app = express()
const PORT = process.env.PORT || 5000;

app.use(cors());

app.use(bodyParser.json())

// let response;

app.use(bodyParser.json())
app.post("/", (req, res, next) => {
  req.body;
  // res.status(200).end() // Responding is important
  next()
}, (req, res, next) => {
  res.send(req.body.FirstName)
  res.status(200).end()
})




// app.get("/url", (req, res, next) => {
//   // if (response !== undefined) {
//     res.json(response.FirstName);
//   // } else {
//     // res.status(200).end()
//   // }
// });

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`))
