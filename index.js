// Require express and body-parser
const express = require("express")
const bodyParser = require("body-parser")
// Initialize express and define a port
const app = express()
const PORT = process.env.PORT || 5000;
// Tell express to use body-parser's JSON parsing
app.use(bodyParser.json())
// Start express on the defined port

app.use(bodyParser.json())
app.post("/hook", (req, res) => {
  console.log(req.body) // Call your action on the request here
  res.status(200).end() // Responding is important
})
app.get("/url", (req, res, next) => {
  res.json(["Tony","Lisa","Michael","Ginger","Food"]);
});

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`))
