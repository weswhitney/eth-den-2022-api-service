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

app.use(bodyParser.json())
app.post("/", (req, res) => {
  console.log('called')
  console.log(req.body) // Call your action on the request here
  res.status(200).end() // Responding is important
})

// mock out successful request Firstname, Lastname, middlename, optional: mobile phone number, email, over 21

app.get("/url", (req, res, next) => {
  res.json(["Tony","Lisa","Michael","Ginger","Food"]);
});

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`))
