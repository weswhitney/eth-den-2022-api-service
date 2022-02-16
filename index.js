const express = require("express")
const bodyParser = require("body-parser")
var cors = require('cors');
const app = express()
const PORT = process.env.PORT || 5000;

app.use(cors());

app.use(bodyParser.json())

let response;

app.use(bodyParser.json())
app.post("/", (req, res) => {
  response = req.body;
  console.log('response in post', response) // Call your action on the request here
  res.status(200).end() // Responding is important
})

// mock out successful request Firstname, Lastname, middlename, optional: mobile phone number, email, over 21

app.get("/url", (req, res, next) => {
  if (response !== undefined) {
    console.log('response in get', response.FirstName)
    res.json(response.FirstName);
  } else {
    res.status(200).end()
  }
});

app.get("/signout", (req, res, next) => {
  response.FirstName = undefined;
  res.status(200).end()
})

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`))
