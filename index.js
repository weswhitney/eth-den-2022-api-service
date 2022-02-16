// Require express and body-parser
const express = require("express")
const bodyParser = require("body-parser")
var cors = require('cors');
// Initialize express and define a port
const app = express()
const PORT = process.env.PORT || 5000;
app.use(cors());

const mockResponse = {
  "name": "wes"
}
// Tell express to use body-parser's JSON parsing
app.use(bodyParser.json())
// Start express on the defined port

let response;

app.use(bodyParser.json())
app.post("/", (req, res) => {
  response = req.body;
  console.log('response in post', response) // Call your action on the request here
  res.status(200).end() // Responding is important
})

// mock out successful request Firstname, Lastname, middlename, optional: mobile phone number, email, over 21

app.get("/url", (req, res, next) => {
  console.log('response in get', response.FirstName)
  res.json(response.FirstName);
});

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`))
